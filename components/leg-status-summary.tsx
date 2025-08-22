import { AlertTriangle, Clock, CheckCircle } from "lucide-react"
import { StatusCard } from "./status-card"

interface Run {
  status: "overdue" | "pending" | "completed" | "not-required"
}

interface Leg {
  id: string
  name: string
  runs: Run[]
}

interface LegStatusSummaryProps {
  legs: Leg[]
}

function calculateLegTotals(runs: Run[]) {
  return runs.reduce(
    (totals, run) => {
      if (run.status === "overdue") totals.overdue++
      else if (run.status === "pending") totals.pending++
      else if (run.status === "completed") totals.completed++
      return totals
    },
    { overdue: 0, pending: 0, completed: 0 },
  )
}

export function LegStatusSummary({ legs }: LegStatusSummaryProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-center text-slate-700 dark:text-slate-200">Leg Status</h4>
      {legs.map((leg) => {
        const { overdue, pending, completed } = calculateLegTotals(leg.runs)
        return (
          <div key={leg.id} className="space-y-2">
            <h5 className="text-sm font-medium text-center text-slate-600 dark:text-slate-300">{leg.name}</h5>
            <div className="space-y-1">
              <StatusCard icon={AlertTriangle} label="Overdue" count={overdue} variant="overdue" />
              <StatusCard icon={Clock} label="Pending" count={pending} variant="pending" />
              <StatusCard icon={CheckCircle} label="Completed" count={completed} variant="completed" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
