'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Users, BookOpen, Clock, ArrowRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'

interface ClassData {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  studentCount: number
  courseCount: number
  progress: number
}

export default function ClassesPage() {
  const [loading, setLoading] = useState(true)
  const [classes, setClasses] = useState<ClassData[]>([])
  
  useEffect(() => {
    // Demo-Daten laden
    setTimeout(() => {
      const mockClasses: ClassData[] = [
        {
          id: '1',
          name: 'Frontend 2023 Campus Berlin',
          description: 'Die Frontend-Klasse lernt HTML, CSS, JavaScript und React.',
          startDate: '2023-09-01',
          endDate: '2024-03-31',
          studentCount: 25,
          courseCount: 6,
          progress: 75
        },
        {
          id: '2',
          name: 'Backend 2024 Campus München',
          description: 'Die Backend-Klasse lernt Python, Datenbanken, APIs und Serverarchitektur.',
          startDate: '2024-01-15',
          endDate: '2024-07-15',
          studentCount: 20,
          courseCount: 5,
          progress: 35
        }
      ]
      
      setClasses(mockClasses)
      setLoading(false)
    }, 1000)
  }, [])
  
  // Hilfsfunktion zum Formatieren von Datum
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Meine Klassen</h1>
        <p className="text-muted-foreground">
          Übersicht deiner Klassengruppen und deren Fortschritt.
        </p>
      </div>
      
      {loading ? (
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-2 w-full mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {classes.length === 0 ? (
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Keine Klassen gefunden</CardTitle>
                <CardDescription>
                  Du bist derzeit in keiner Klasse eingeschrieben.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            classes.map((cls) => (
              <Card key={cls.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{cls.name}</CardTitle>
                  <CardDescription>{cls.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>Zeitraum</span>
                      </div>
                      <p>
                        {formatDate(cls.startDate)} - {formatDate(cls.endDate)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>Teilnehmer</span>
                      </div>
                      <p>{cls.studentCount} Studenten</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <BookOpen className="mr-1 h-4 w-4" />
                        <span>Kurse</span>
                      </div>
                      <p>{cls.courseCount} Kurse</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>Status</span>
                      </div>
                      <p>
                        <Badge variant={
                          new Date(cls.endDate) < new Date() ? "destructive" : 
                          new Date(cls.startDate) > new Date() ? "secondary" : 
                          "default"
                        }>
                          {new Date(cls.endDate) < new Date() ? "Abgeschlossen" : 
                           new Date(cls.startDate) > new Date() ? "Bevorstehend" : 
                           "Laufend"}
                        </Badge>
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Gesamtfortschritt</span>
                      <span>{cls.progress}%</span>
                    </div>
                    <Progress value={cls.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/classes/${cls.id}`}>
                      <span>Details anzeigen</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}