'use client'

import { useState, useEffect } from 'react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar
} from 'recharts'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// Mock-Daten für die Statistiken
const generateMockActivityData = () => {
  const today = new Date()
  const data = []
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    data.push({
      date: date.toISOString().split('T')[0],
      minutes: Math.floor(Math.random() * 120) + 10,
      questions: Math.floor(Math.random() * 25)
    })
  }
  
  return data
}

const generateMockPerformanceData = () => {
  const categories = ['Python', 'OOP', 'Datenbanken', 'Backend', 'Web']
  
  return categories.map(category => ({
    name: category,
    correct: Math.floor(Math.random() * 80) + 20,
    total: 100,
    topics: [
      { name: 'Grundlagen', score: Math.floor(Math.random() * 100) },
      { name: 'Fortgeschritten', score: Math.floor(Math.random() * 100) },
      { name: 'Spezialisiert', score: Math.floor(Math.random() * 100) }
    ]
  }))
}

const generateMockDistributionData = () => {
  return [
    { name: 'Leicht', value: 45 },
    { name: 'Mittel', value: 35 },
    { name: 'Schwer', value: 20 }
  ]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFF']

export default function StatisticsPage() {
  const [loading, setLoading] = useState(true)
  const [activityData, setActivityData] = useState<any[]>([])
  const [performanceData, setPerformanceData] = useState<any[]>([])
  const [distributionData, setDistributionData] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  useEffect(() => {
    // Simuliere API-Aufruf mit setTimeout
    setTimeout(() => {
      setActivityData(generateMockActivityData())
      setPerformanceData(generateMockPerformanceData())
      setDistributionData(generateMockDistributionData())
      setLoading(false)
    }, 1000)
  }, [])
  
  // Helper für formatierte Datum-Ausgabe
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })
  }
  
  const getTotalMinutes = () => {
    return activityData.reduce((total, day) => total + day.minutes, 0)
  }
  
  const getTotalQuestions = () => {
    return activityData.reduce((total, day) => total + day.questions, 0)
  }
  
  const getAverageCorrectPercentage = () => {
    const total = performanceData.reduce((sum, category) => sum + category.correct, 0)
    return Math.round(total / performanceData.length)
  }
  
  // Berechnet die durchschnittliche Lernzeit pro Tag
  const getAverageMinutesPerDay = () => {
    if (activityData.length === 0) return 0
    return Math.round(getTotalMinutes() / activityData.length)
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Statistiken</h1>
        <p className="text-muted-foreground">Analysiere deinen Lernfortschritt und deine Leistung.</p>
      </div>
      
      {/* Zusammenfassung Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          Array(4).fill(0).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-5 w-20" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gesamt-Lernzeit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getTotalMinutes()} Min</div>
                <p className="text-xs text-muted-foreground">
                  Ø {getAverageMinutesPerDay()} Minuten pro Tag
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Beantwortete Fragen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getTotalQuestions()}</div>
                <p className="text-xs text-muted-foreground">
                  In den letzten 30 Tagen
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Durchschn. Erfolgsrate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getAverageCorrectPercentage()}%</div>
                <p className="text-xs text-muted-foreground">
                  Korrekte Antworten
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aktuelle Strähne</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 Tage</div>
                <p className="text-xs text-muted-foreground">
                  Täglich gelernt
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
      
      {/* Diagramme */}
      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activity">Aktivität</TabsTrigger>
          <TabsTrigger value="performance">Leistung</TabsTrigger>
          <TabsTrigger value="distribution">Verteilung</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Lernaktivität</CardTitle>
              <CardDescription>
                Deine Lernzeit und beantworteten Fragen der letzten 30 Tage.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Lade Daten...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="date" 
                      tickFormatter={formatDate} 
                      tick={{ fontSize: 12 }}
                      interval={Math.ceil(activityData.length / 10)}
                    />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip
                      formatter={(value, name) => {
                        if (name === 'minutes') return [`${value} Min`, 'Lernzeit']
                        if (name === 'questions') return [`${value}`, 'Fragen']
                        return [value, name]
                      }}
                      labelFormatter={(label) => formatDate(label)}
                    />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="minutes"
                      stroke="#8884d8"
                      name="Lernzeit (Min)"
                      strokeWidth={2}
                      dot={{ r: 2 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="questions"
                      stroke="#82ca9d"
                      name="Fragen"
                      strokeWidth={2}
                      dot={{ r: 2 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <CardTitle>Leistung nach Kategorien</CardTitle>
                <CardDescription>
                  Deine Erfolgsquote in verschiedenen Themenbereichen.
                </CardDescription>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {!loading && performanceData.map((category, index) => (
                  <Badge
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.name ? null : category.name
                    )}
                    style={selectedCategory === category.name ? 
                      {backgroundColor: COLORS[index % COLORS.length]} : {}
                    }
                  >
                    {category.name}
                  </Badge>
                ))}
                
                {selectedCategory && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                    className="h-6 px-2 text-xs"
                  >
                    Alle anzeigen
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Lade Daten...</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="flex justify-center items-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart 
                        data={
                          selectedCategory ? 
                            performanceData.filter(c => c.name === selectedCategory) : 
                            performanceData
                        }
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} />
                        <YAxis type="category" dataKey="name" width={100} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Korrekt']} />
                        <Legend />
                        <Bar 
                          dataKey="correct" 
                          name="Korrekt (%)" 
                          radius={[0, 4, 4, 0]}
                        >
                          {performanceData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={COLORS[index % COLORS.length]} 
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    {selectedCategory ? (
                      <div className="space-y-4">
                        <h3 className="font-medium text-lg">Themen in {selectedCategory}</h3>
                        {performanceData
                          .find(c => c.name === selectedCategory)?.topics
                          .map((topic, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{topic.name}</span>
                                <span>{topic.score}%</span>
                              </div>
                              <Progress value={topic.score} className="h-2" />
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Wähle eine Kategorie, um Details zu sehen
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="distribution">
          <Card>
            <CardHeader>
              <CardTitle>Verteilung nach Schwierigkeit</CardTitle>
              <CardDescription>
                Verteilung deiner beantworteten Fragen nach Schwierigkeitsgrad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Lade Daten...</p>
                </div>
              ) : (
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="flex justify-center items-center">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={distributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {distributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Anteil']} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="font-medium text-lg">Details zur Schwierigkeit</h3>
                    <div className="space-y-4">
                      {distributionData.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="flex items-center">
                              <span 
                                className="w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                              />
                              {item.name}
                            </span>
                            <span>{item.value}%</span>
                          </div>
                          <Progress 
                            value={item.value} 
                            className="h-2"
                            style={{ backgroundColor: `${COLORS[index % COLORS.length]}30` }}
                            indicatorColor={COLORS[index % COLORS.length]}
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-md mt-4">
                      <h4 className="font-medium mb-2">Tipps</h4>
                      <p className="text-sm text-muted-foreground">
                        Achte auf eine ausgewogene Verteilung zwischen den Schwierigkeitsgraden, 
                        um sowohl Grundlagen zu festigen als auch dich zu fordern.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}