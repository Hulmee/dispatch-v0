import { Badge } from "@/components/ui/badge"
import { statusConfig, type RunStatus } from "@/lib/status-config"

interface DispatchData {
  cutOffTime?: string
  timeCompleted?: string
  completedBy?: string
}

interface PickingData {
  startTime?: string
  priority: boolean
}

interface Run {
  id: string
  runNumber: string
  status: RunStatus
  dispatch: DispatchData
  picking: PickingData
}

interface RunCardProps {
  run: Run
  context?: "dispatch" | "picking"
}

export function RunCard({ run, context = "dispatch" }: RunCardProps) {
  const getDisplayStatus = (): RunStatus => {
    if (context === "dispatch") {
      if (run.dispatch.timeCompleted) return "completed"
      if (run.dispatch.cutOffTime && new Date(`2024-01-01 ${run.dispatch.cutOffTime}`) < new Date()) return "overdue"
      return run.status
    } else {
      if (run.picking.priority) return "priority"
      return run.status
    }
  }

  const displayStatus = getDisplayStatus()
  const config = statusConfig[displayStatus]
  const Icon = config.icon

  const renderTimeInfo = () => {
    if (context === "dispatch") {
      if (run.dispatch.timeCompleted) {
        return (
          <div className="text-right">
            <div className="text-emerald-700 dark:text-emerald-300">{run.dispatch.timeCompleted}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{run.dispatch.completedBy}</div>
          </div>
        )
      }
      return <span className="text-slate-600 dark:text-slate-300">{run.dispatch.cutOffTime}</span>
    } else {
      if (run.picking.priority) {
        return <span className="text-yellow-600 dark:text-yellow-300 font-semibold">PRIORITY</span>
      }
      return <span className="text-slate-600 dark:text-slate-300">{run.picking.startTime}</span>
    }
  }

  return (
    <div
      className={`flex items-center justify-between p-2 rounded-md border ${config.bgColor} ${config.borderColor} hover:shadow-sm transition-shadow min-h-[44px]`}
    >
      <div className="flex items-center gap-2">
        <Badge
          variant={config.variant}
          className={`flex items-center gap-1 text-xs min-w-[80px] justify-center ${config.badgeStyle}`}
        >
          <Icon className="w-3 h-3" />
          <span>{run.runNumber}</span>
        </Badge>
      </div>

      <div className="text-xs font-medium text-slate-600 dark:text-slate-300 min-w-[80px] text-right">
        {renderTimeInfo()}
      </div>
    </div>
  )
}
