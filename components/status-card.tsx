import type { LucideIcon } from "lucide-react"

interface StatusCardProps {
  icon: LucideIcon
  label: string
  count: number
  variant: "overdue" | "pending" | "completed"
}

const statusStyles = {
  overdue: {
    bg: "bg-red-900/10 dark:bg-red-900/20",
    border: "border-red-800/20 dark:border-red-700/30",
    text: "text-red-700 dark:text-red-300",
    iconColor: "text-red-700 dark:text-red-400",
  },
  pending: {
    bg: "bg-slate-800/5 dark:bg-slate-800/20",
    border: "border-slate-700/20 dark:border-slate-600/30",
    text: "text-slate-600 dark:text-slate-300",
    iconColor: "text-slate-600 dark:text-slate-400",
  },
  completed: {
    bg: "bg-emerald-900/10 dark:bg-emerald-900/20",
    border: "border-emerald-800/20 dark:border-emerald-700/30",
    text: "text-emerald-700 dark:text-emerald-300",
    iconColor: "text-emerald-700 dark:text-emerald-400",
  },
}

export function StatusCard({ icon: Icon, label, count, variant }: StatusCardProps) {
  const styles = statusStyles[variant]

  return (
    <div className={`flex items-center justify-between p-1.5 rounded border ${styles.bg} ${styles.border}`}>
      <div className="flex items-center gap-1">
        <Icon className={`w-3 h-3 ${styles.iconColor}`} />
        <span className={`text-xs font-medium ${styles.text}`}>{label}</span>
      </div>
      <span className={`text-sm font-bold ${styles.text}`}>{count}</span>
    </div>
  )
}
