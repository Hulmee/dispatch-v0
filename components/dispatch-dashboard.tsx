import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { RunCard } from "./run-card"
import { LegStatusSummary } from "./leg-status-summary"
import { DISPATCH_DATA, getCurrentTime, type Run } from "@/lib/shared-data"

function sortRuns(runs: Run[]) {
  const statusPriority = { overdue: 1, picking: 2, "not-started": 3, completed: 4, priority: 5 }

  return [...runs].sort((a, b) => {
    const aStatus = a.dispatch.timeCompleted
      ? "completed"
      : a.dispatch.cutOffTime && new Date(`2024-01-01 ${a.dispatch.cutOffTime}`) < new Date()
        ? "overdue"
        : a.status
    const bStatus = b.dispatch.timeCompleted
      ? "completed"
      : b.dispatch.cutOffTime && new Date(`2024-01-01 ${b.dispatch.cutOffTime}`) < new Date()
        ? "overdue"
        : b.status

    const statusDiff = statusPriority[aStatus] - statusPriority[bStatus]
    if (statusDiff !== 0) return statusDiff

    const aNum = Number.parseInt(a.runNumber.replace(/\D/g, "")) || 0
    const bNum = Number.parseInt(b.runNumber.replace(/\D/g, "")) || 0
    return aNum - bNum
  })
}

export function DispatchDashboard() {
  return (
    <div className="container mx-auto p-6 bg-slate-50 dark:bg-slate-900 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Dispatch Dashboard</h1>
        <div className="flex gap-4">
          <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Dispatch
          </a>
          <a
            href="/picking"
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            Picking
          </a>
        </div>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {DISPATCH_DATA.map((leg) => {
          const sortedRuns = sortRuns(leg.runs)

          return (
            <Card
              key={leg.id}
              className="flex-1 bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50 flex flex-col"
            >
              <div className="p-2 pb-1 text-center flex-shrink-0">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{leg.name}</h3>
              </div>
              <CardContent className="space-y-2 pt-0 flex-1 overflow-y-auto">
                {sortedRuns.map((run) => (
                  <RunCard key={run.id} run={run} />
                ))}
              </CardContent>
            </Card>
          )
        })}

        <Card className="w-64 bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50 self-start">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold mb-2 text-slate-700 dark:text-slate-200">
                  <Clock className="w-8 h-8" />
                  <span>{getCurrentTime()}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Current Time</p>
              </div>

              <LegStatusSummary legs={DISPATCH_DATA} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
