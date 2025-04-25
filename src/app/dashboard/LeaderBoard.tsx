import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

type LeaderboardEntry = {
  id: string
  name: string
  totalCorrect: number
  totalAttempts: number
}

const PLACE_COLORS = ["text-yellow-500", "text-gray-400", "text-amber-700"]

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("/api/leaderboard")
        const data = await res.json()

        // Sortiere jetzt einfach nach totalAttempts (XP)
        const sorted = [...data].sort((a, b) => b.totalAttempts - a.totalAttempts)

        setEntries(sorted)
      } catch (err) {
        console.error("Fehler beim Laden des Leaderboards:", err)
      }
    }
    fetchLeaderboard()
  }, [])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        {entries.length === 0 ? (
          <p className="text-sm text-muted-foreground">Keine Daten verfügbar.</p>
        ) : (
          <ul className="divide-y divide-muted">
            {entries.map((entry, index) => {
              const efficiency = entry.totalCorrect / entry.totalAttempts
              return (
                <li key={entry.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${entry.id}`}
                      alt="avatar"
                      className="w-9 h-9 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{entry.name || "Unbekannt"}</p>
                      <p className="text-xs text-muted-foreground">
                        XP: {entry.totalAttempts} | Effizienz: {(efficiency * 100).toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      PLACE_COLORS[index] || "text-gray-700"
                    }`}
                  >
                    #{index + 1}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
