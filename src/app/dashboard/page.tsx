"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"
import { Info } from "lucide-react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

const COLORS = ["#22c55e", "#eab308", "#ef4444"]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [summary, setSummary] = useState<Record<string, { easy: number; medium: number; hard: number }> | null>(null)
  const [rounds, setRounds] = useState<Record<number, number> | null>(null)
  const [loadingSummary, setLoadingSummary] = useState(true)

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch("/api/progress/summary")
        if (res.ok) {
          const data = await res.json()
          setSummary(data.topics)
          setRounds(data.rounds)
        }
      } finally {
        setLoadingSummary(false)
      }
    }

    fetchSummary()
  }, [])

  if (status === "loading") {
    return <p className="p-4">Lade Benutzerinfo...</p>
  }

  if (!session) {
    return <p className="p-4">Du bist nicht eingeloggt.</p>
  }

  const user = session.user

  const roundData = rounds ? [
    { round: "Box 0", value: rounds[0] || 0 },
    { round: "Box 1", value: rounds[1] || 0 },
    { round: "Box 2", value: rounds[2] || 0 },
    { round: "Box 3", value: rounds[3] || 0 },
    { round: "Box 4", value: rounds[4] || 0 },
    {
      round: "Box 5+",
      value: Object.entries(rounds)
        .filter(([k]) => Number(k) > 4)
        .reduce((sum, [, v]) => sum + v, 0),
    },
  ] : []

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Nutzerinfo */}
      <Card>
        <CardHeader>
          <CardTitle>Willkommen, {user?.name ?? "User"} 👋</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user?.image ?? ""} />
              <AvatarFallback>{user?.name?.[0] ?? "U"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Karteikasten Fortschritt */}
      {rounds && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Karteikasten-Fortschritt
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
                </HoverCardTrigger>
                <HoverCardContent className="w-80 text-sm">
                  <p className="font-medium mb-1">Was ist das Karteikasten-System?</p>
                  <p>
                    Du beginnst in <strong>Box 0</strong>. Für jede richtig beantwortete Frage steigst du eine Box auf, bis <strong>Box 5+</strong>. Falsch beantwortete Fragen landen wieder in <strong>Box 0</strong>.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roundData}>
                <XAxis dataKey="round" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value">
                  {roundData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={
                        ["#ef4444", "#eab308", "#22c55e", "#16a34a", "#15803d", "#065f46"][index] || "#a3a3a3"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Fortschrittsübersicht */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loadingSummary && (
          <>
            <Skeleton className="h-[200px] w-full" />
            <Skeleton className="h-[200px] w-full" />
          </>
        )}

        {summary &&
          Object.entries(summary).map(([topic, stats]) => {
            const data = [
              { name: "Leicht", value: stats.easy },
              { name: "Mittel", value: stats.medium },
              { name: "Schwer", value: stats.hard },
            ]

            return (
              <Card key={topic}>
                <CardHeader>
                  <CardTitle>{topic}</CardTitle>
                </CardHeader>
                <CardContent className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={60}
                        label
                      >
                        {data.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )
          })}
      </div>
    </main>
  )
}
