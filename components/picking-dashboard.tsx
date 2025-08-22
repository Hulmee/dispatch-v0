"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RunCard } from "@/components/run-card"
import { Clock } from "lucide-react"
import { DISPATCH_DATA, getCurrentTime, type Run } from "@/lib/shared-data"

function sortRuns(runs: Run[]): Run[] {
  const statusOrder = { priority: 1, picking: 2, "not-started": 3, completed: 4 }

  return [...runs].sort((a, b) => {
    const aStatus = a.picking.priority ? "priority" : a.status
    const bStatus = b.picking.priority ? "priority" : b.status

    const statusDiff = statusOrder[aStatus] - statusOrder[bStatus]
    if (statusDiff !== 0) return statusDiff

    const aNum = Number.parseInt(a.runNumber.replace(/[A-Z]/g, ""))
    const bNum = Number.parseInt(b.runNumber.replace(/[A-Z]/g, ""))
    return aNum - bNum
  })
}

export function PickingDashboard() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => setCurrentTime(getCurrentTime())
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const allRuns = DISPATCH_DATA.flatMap((leg) => leg.runs)
  const sortedRuns = sortRuns(allRuns)

  const activeRuns = sortedRuns.filter((run) => run.status === "picking" || run.picking.priority)
  const pendingRuns = sortedRuns.filter((run) => run.status === "not-started" && !run.picking.priority)
  const completedRuns = sortedRuns.filter((run) => run.status === "completed")

  return (
    <div className="h-screen flex flex-col p-6 gap-6 bg-slate-50 dark:bg-slate-900">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Picking Dashboard</h1>
        <div className="flex gap-4">
          <a
            href="/"
            className="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            Dispatch
          </a>
          <a href="/picking" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Picking
          </a>
        </div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        <div className="flex-1">
          <Card className="h-full bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50 flex flex-col">
            <CardHeader className="pb-4 flex-shrink-0">
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                <span className="text-3xl font-mono font-bold text-slate-800 dark:text-slate-200">{currentTime}</span>
              </div>
              <CardTitle className="text-center text-slate-700 dark:text-slate-300 text-lg">
                Active Picking ({activeRuns.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto space-y-2">
              {activeRuns.map((run) => (
                <RunCard key={run.id} run={run} context="picking" />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="w-80 flex flex-col gap-6">
          <Card className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-slate-700 dark:text-slate-300 text-sm">
                Not Started ({pendingRuns.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-48 overflow-y-auto space-y-2">
              {pendingRuns.map((run) => (
                <RunCard key={run.id} run={run} context="picking" />
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-100/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-700/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-slate-700 dark:text-slate-300 text-sm">
                Completed ({completedRuns.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-48 overflow-y-auto space-y-2">
              {completedRuns.map((run) => (
                <RunCard key={run.id} run={run} context="picking" />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
