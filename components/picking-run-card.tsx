import { Badge } from "@/components/ui/badge"
import { Package, AlertTriangle, Truck, Clock } from "lucide-react"

type PickingStatus = "picking" | "urgent" | "dispatched" | "pending"

interface PickingRun {
  id: string
  runNumber: string
  status: PickingStatus
  startTime?: string
  completedTime?: string
  completedBy?: string
}

interface PickingRunCardProps {
  run: PickingRun
  size?: "large" | "small"
}

const STATUS_CONFIG = {
  picking: {
    label: "Picking",
    icon: Package,
    badgeClass: "bg-green-500 text-white hover:bg-green-600",
  },
  urgent: {
    label: "Priority",
    icon: AlertTriangle,
    badgeClass: "bg-yellow-500 text-white hover:bg-yellow-600",
  },
  dispatched: {
    label: "Dispatched",
    icon: Truck,
    badgeClass: "bg-red-500 text-white hover:bg-red-600",
  },
  pending: {
    label: "Pending",
    icon: Clock,
    badgeClass: "bg-slate-500 text-white hover:bg-slate-600",
  },
}

export function PickingRunCard({ run, size = "large" }: PickingRunCardProps) {
  const config = STATUS_CONFIG[run.status]
  const Icon = config.icon

  const isLarge = size === "large"
  const cardPadding = isLarge ? "p-4" : "p-2"
  const textSize = isLarge ? "text-base" : "text-sm"
  const iconSize = isLarge ? "h-5 w-5" : "h-4 w-4"

  return (
    <div
      className={`${cardPadding} bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge className={`${config.badgeClass} flex items-center gap-1 ${isLarge ? "px-3 py-1" : "px-2 py-0.5"}`}>
            <Icon className={iconSize} />
            <span className={`font-medium ${textSize}`}>RUN {run.runNumber}</span>
          </Badge>
        </div>

        <div className={`text-right ${textSize}`}>
          {run.status === "dispatched" && run.completedTime && run.completedBy ? (
            <div className="text-slate-600 dark:text-slate-400">
              <div className="font-medium">{run.completedTime}</div>
              {isLarge && <div className="text-xs">{run.completedBy}</div>}
            </div>
          ) : run.startTime ? (
            <div className="text-slate-600 dark:text-slate-400 font-medium">{run.startTime}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
