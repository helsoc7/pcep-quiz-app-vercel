'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  Users,
  BookOpen,
  Clock,
  User,
  GraduationCap,
  BookMarked,
  MoreHorizontal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ClassData {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  studentCount: number
  students: Student[]
  courses: Course[]
  teacher: {
    id: string
    name: string
    email: string
    avatarUrl?: string
  }
}

interface Student {
  id: string
  name: string
  email: string
  progress: number
  avatarUrl?: string
}

interface Course {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  progress: number
  moduleCount: number
}

export default function ClassDetailPage() {
  const params = useParams()
  const classId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [classData, setClassData] = useState<ClassData | null>(null)
  
  // Demo-Daten laden
  useEffect(() => {
    setTimeout(() => {
      const mockClass: ClassData = {
        id: classId,
        name: classId === '1' ? 'Frontend 2023 Campus Berlin' : 'Backend 2024 Campus München',
        description: classId === '1' 
          ? 'Die Frontend-Klasse lernt HTML, CSS, JavaScript und React.'
          : 'Die Backend-Klasse lernt Python, Datenbanken, APIs und Serverarchitektur.',
        startDate: classId === '1' ? '2023-09-01' : '2024-01-15',
        endDate: classId === '1' ? '2024-03-31' : '2024-07-15',
        studentCount: classId === '1' ? 25 : 20,
        teacher: {
          id: 't1',
          name: 'Dr. Anna Schmidt',
          email: 'a.schmidt@techstarter.de',
          avatarUrl: ''
        },
        students: Array(classId === '1' ? 25 : 20).fill(0).map((_, i) => ({
          id: `s${i+1}`,
          name: `Student ${i+1}`,
          email: `student${i+1}@techstarter.de`,
          progress: Math.floor(Math.random() * 100),
          avatarUrl: ''
        })),
        courses: [
          {
            id: '1',
            name: classId === '1' ? 'HTML & CSS Grundlagen' : 'Python Grundlagen',
            description: classId === '1' 
              ? 'Einführung in HTML und CSS für Webseitenentwicklung'
              : 'Einführung in die Python-Programmierung',
            startDate: classId === '1' ? '2023-09-01' : '2024-01-15',
            endDate: classId === '1' ? '2023-10-15' : '2024-02-28',
            progress: classId === '1' ? 100 : 85,
            moduleCount: 4
          },
          {
            id: '2',
            name: classId === '1' ? 'JavaScript Grundlagen' : 'Datenbanken mit PostgreSQL',
            description: classId === '1' 
              ? 'Einführung in JavaScript zur Implementierung interaktiver Web-Funktionen'
              : 'Relationale Datenbanken mit SQL verstehen und nutzen',
            startDate: classId === '1' ? '2023-10-16' : '2024-03-01',
            endDate: classId === '1' ? '2023-12-15' : '2024-04-15',
            progress: classId === '1' ? 90 : 45,
            moduleCount: 5
          },
          {
            id: '3',
            name: classId === '1' ? 'React Grundlagen' : 'APIs und Webservices',
            description: classId === '1' 
              ? 'Einführung in React zur Erstellung moderner Web-Apps'
              : 'RESTful APIs und Webservices entwickeln und nutzen',
            startDate: classId === '1' ? '2023-12-16' : '2024-04-16',
            endDate: classId === '1' ? '2024-02-15' : '2024-06-15',
            progress: classId === '1' ? 65 : 10,
            moduleCount: 6
          },
          {
            id: '4',
            name: classId === '1' ? 'Frontend Testing' : 'Docker & Deployment',
            description: classId === '1' 
              ? 'Testen von Frontend-Anwendungen'
              : 'Containerisierung und Deployment von Backend-Anwendungen',
            startDate: classId === '1' ? '2024-02-16' : '2024-06-16',
            endDate: classId === '1' ? '2024-03-31' : '2024-07-15',
            progress: classId === '1' ? 20 : 0,
            moduleCount: 3
          }
        ]
      }
      
      setClassData(mockClass)
      setLoading(false)
    }, 1000)
  }, [classId])
  
  // Hilfsfunktion zum Formatieren von Datum
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }
  
  // Berechne Gesamtfortschritt über alle Kurse
  const calculateOverallProgress = (courses: Course[]): number => {
    if (courses.length === 0) return 0
    const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0)
    return Math.round(totalProgress / courses.length)
  }
  
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Skeleton className="h-8 w-1/3" />
        </div>
        
        <div className="space-y-4">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    )
  }
  
  if (!classData) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold mb-2">Klasse nicht gefunden</h2>
        <p className="text-muted-foreground mb-6">
          Die angeforderte Klasse konnte nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/classes">Zurück zur Klassenübersicht</Link>
        </Button>
      </div>
    )
  }
  
  const overallProgress = calculateOverallProgress(classData.courses)
  
  return (
    <div className="space-y-6">
      {/* Zurück-Navigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/classes">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Zurück</span>
          </Link>
        </Button>
        <span className="text-sm text-muted-foreground">Zurück zur Klassenübersicht</span>
      </div>
      
      {/* Klassenkopf */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">{classData.name}</h1>
          <p className="text-muted-foreground mt-1">{classData.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Klasseninfo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>Startdatum</span>
                  </div>
                  <p>{formatDate(classData.startDate)}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>Enddatum</span>
                  </div>
                  <p>{formatDate(classData.endDate)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-1">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>Teilnehmer</span>
                  </div>
                  <p>{classData.studentCount} Studenten</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-muted-foreground">
                    <BookOpen className="mr-1 h-4 w-4" />
                    <span>Kurse</span>
                  </div>
                  <p>{classData.courses.length} Kurse</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <GraduationCap className="mr-1 h-4 w-4" />
                  <span>Dozent</span>
                </div>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={classData.teacher.avatarUrl} alt={classData.teacher.name} />
                    <AvatarFallback>{classData.teacher.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p>{classData.teacher.name}</p>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Status</span>
                </div>
                <p>
                  <Badge variant={
                    new Date(classData.endDate) < new Date() ? "destructive" : 
                    new Date(classData.startDate) > new Date() ? "secondary" : 
                    "default"
                  }>
                    {new Date(classData.endDate) < new Date() ? "Abgeschlossen" : 
                    new Date(classData.startDate) > new Date() ? "Bevorstehend" : 
                    "Laufend"}
                  </Badge>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Fortschritt</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Gesamtfortschritt</span>
                  <span>{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2" />
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <p className="text-sm font-medium">Kursfortschritte</p>
                {classData.courses.map((course) => (
                  <div key={course.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>{course.name}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Tabs für verschiedene Ansichten */}
      <Tabs defaultValue="courses" className="mt-6">
        <TabsList>
          <TabsTrigger value="courses">Kurse</TabsTrigger>
          <TabsTrigger value="students">Teilnehmer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="courses" className="mt-6 space-y-6">
          <h2 className="text-xl font-semibold">Kurse in dieser Klasse</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {classData.courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>Zeitraum</span>
                      </div>
                      <p>
                        {formatDate(course.startDate)} - {formatDate(course.endDate)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <BookMarked className="mr-1 h-4 w-4" />
                        <span>Module</span>
                      </div>
                      <p>{course.moduleCount} Module</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Fortschritt</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>
                      Zum Kurs
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="students" className="mt-6 space-y-6">
          <h2 className="text-xl font-semibold">Teilnehmer ({classData.students.length})</h2>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Fortschritt</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classData.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={student.avatarUrl} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{student.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.progress} className="h-2 w-24" />
                          <span className="text-sm text-muted-foreground">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Menü öffnen</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profil anzeigen</DropdownMenuItem>
                            <DropdownMenuItem>Nachricht senden</DropdownMenuItem>
                            <DropdownMenuItem>Fortschritt anzeigen</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}