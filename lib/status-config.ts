import { Clock, CheckCircle, Play, AlertTriangle, Zap } from "lucide-react"

export type RunStatus = "not-started" | "picking" | "completed" | "overdue" | "priority"

export const statusConfig = {
  "not-started": {
    variant: "secondary" as const,
    icon: Clock,
    bgColor: "bg-slate-800/5 dark:bg-slate-800/20",
    borderColor: "border-slate-700/20 dark:border-slate-600/30",
    badgeStyle: "bg-slate-600/80 text-slate-50 hover:bg-slate-600/90",
  },
  picking: {
    variant: "secondary" as const,
    icon: Play,
    bgColor: "bg-blue-900/10 dark:bg-blue-900/20",
    borderColor: "border-blue-800/20 dark:border-blue-700/30",
    badgeStyle: "bg-blue-800/80 text-blue-50 hover:bg-blue-800/90",
  },
  completed: {
    variant: "secondary" as const,
    icon: CheckCircle,
    bgColor: "bg-emerald-900/10 dark:bg-emerald-900/20",
    borderColor: "border-emerald-800/20 dark:border-emerald-700/30",
    badgeStyle: "bg-emerald-800/80 text-emerald-50 hover:bg-emerald-800/90",
  },
  overdue: {
    variant: "destructive" as const,
    icon: AlertTriangle,
    bgColor: "bg-red-900/10 dark:bg-red-900/20",
    borderColor: "border-red-800/20 dark:border-red-700/30",
    badgeStyle: "bg-red-800/80 text-red-50 hover:bg-red-800/90",
  },
  priority: {
    variant: "secondary" as const,
    icon: Zap,
    bgColor: "bg-yellow-900/10 dark:bg-yellow-900/20",
    borderColor: "border-yellow-800/20 dark:border-yellow-700/30",
    badgeStyle: "bg-yellow-800/80 text-yellow-50 hover:bg-yellow-800/90",
  },
} as const
