"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  RadialBarChart,
  RadialBar,
} from "recharts"
import { Info } from "lucide-react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"

// Dezente Farben (grau + etwas Blau)
const BAR_COLORS = ["#D9ED92", "#B5E48C", "#99D98C", "#76C893", "#52B69A", "#34A0A4"]
const PROGRESS_FILL = "#52B69A"
const PROGRESS_BG = "#DAD7CD"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  console.log(session)
  const [summary, setSummary] = useState<{
    rounds: number[]
    progressByTopic: Record<string, number>
    overallProgress: number
  } | null>(null)

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch("/api/progress/summary")
        if (res.ok) {
          const data = await res.json()
          setSummary(data)
        }
      } finally {
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

  const roundData = summary?.rounds?.map((count: number, i: number) => ({
    round: i < 5 ? `Box ${i}` : "Box 5+",
    value: count,
  })) ?? []

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
      {roundData.length > 0 && (
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
                    Du beginnst in <strong>Box 0</strong>. Falsch beantwortete Fragen landen hier. Richtige Antworten bringen dich Schritt für Schritt bis <strong>Box 5+</strong>.
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
                    <Cell key={index} fill={BAR_COLORS[index] || "#d1d5db"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Fortschrittsübersicht pro Thema */}
      {summary?.progressByTopic && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(summary.progressByTopic).map(([topic, percent]: [string, number]) => (
            <Card key={topic}>
              <CardHeader>
                <CardTitle>{topic}</CardTitle>
              </CardHeader>
              <CardContent className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={[
                      { name: "Max", value: 100, fill: PROGRESS_BG },
                      { name: topic, value: percent, fill: PROGRESS_FILL },
                    ]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      label={({ cx, cy }) => (
                        <text
                          x={cx}
                          y={cy}
                          fill="#111827"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="text-sm"
                        >
                          {`${percent}%`}
                        </text>
                      )}
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                  </RadialBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Gesamtfortschritt */}
      {summary?.overallProgress !== undefined && (
        <Card>
          <CardHeader>
            <CardTitle>Gesamtfortschritt</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                barSize={15}
                data={[
                  { name: "Max", value: 100, fill: PROGRESS_BG },
                  { name: "Gesamt", value: summary.overallProgress, fill: PROGRESS_FILL },
                ]}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  background
                  dataKey="value"
                  label={({ cx, cy }) => (
                    <text
                      x={cx}
                      y={cy}
                      fill="#111827"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm"
                    >
                      {`${summary.overallProgress}%`}
                    </text>
                  )}
                />
                <Tooltip formatter={(value) => `${value}%`} />
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </main>
  )
}
