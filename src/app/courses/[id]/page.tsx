'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  BarChart, 
  CheckCircle2, 
  CircleDashed,
  PlayCircle,
  FileQuestion
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
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
import { Separator } from '@/components/ui/separator'

interface Course {
  id: string
  name: string
  description: string
  categories: string[]
  instructor: string
  totalModules: number
  totalLessons: number
  estimatedHours: number
  enrolled: boolean
  progress: number
  modules: Module[]
}

interface Module {
  id: string
  title: string
  description: string
  lessonCount: number
  completed: boolean
  progress: number
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  type: 'video' | 'quiz' | 'text'
  duration: number
  completed: boolean
}

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string
  
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState<Course | null>(null)
  
  useEffect(() => {
    // In einer echten Anwendung würdest du hier die Daten vom Server laden
    // basierend auf der courseId
    setTimeout(() => {
      const mockCourse: Course = {
        id: courseId,
        name: courseId === '1' ? 'Python Grundlagen' : 
              courseId === '2' ? 'Objektorientierte Programmierung' : 
              courseId === '5' ? 'Datenbanken und SQL' : 'Kursinhalte',
        description: 'Dieser Kurs führt dich durch die Grundlagen der Python-Programmierung. Du lernst die Syntax, Datentypen, Kontrollstrukturen und vieles mehr. Nach Abschluss dieses Kurses bist du in der Lage, einfache Python-Programme zu schreiben.',
        categories: ['Programmierung', 'Python', 'Einsteiger'],
        instructor: 'Max Mustermann',
        totalModules: 4,
        totalLessons: 12,
        estimatedHours: 8,
        enrolled: ['1', '2', '5'].includes(courseId),
        progress: courseId === '1' ? 45 : courseId === '2' ? 12 : courseId === '5' ? 78 : 0,
        modules: [
          {
            id: 'm1',
            title: 'Einführung in Python',
            description: 'Grundlagen der Python-Programmierung',
            lessonCount: 3,
            completed: true,
            progress: 100,
            lessons: [
              { id: 'l1', title: 'Python Installation', type: 'video', duration: 10, completed: true },
              { id: 'l2', title: 'Erste Schritte mit Python', type: 'text', duration: 15, completed: true },
              { id: 'l3', title: 'Kenntnisse testen', type: 'quiz', duration: 10, completed: true }
            ]
          },
          {
            id: 'm2',
            title: 'Variablen und Datentypen',
            description: 'Lernen Sie die verschiedenen Datentypen in Python kennen',
            lessonCount: 4,
            completed: false,
            progress: 75,
            lessons: [
              { id: 'l4', title: 'Zahlen und Strings', type: 'video', duration: 12, completed: true },
              { id: 'l5', title: 'Listen und Tupel', type: 'video', duration: 15, completed: true },
              { id: 'l6', title: 'Dictionaries', type: 'text', duration: 8, completed: true },
              { id: 'l7', title: 'Modultests', type: 'quiz', duration: 15, completed: false }
            ]
          },
          {
            id: 'm3',
            title: 'Kontrollstrukturen',
            description: 'If-Statements, Schleifen und bedingte Ausführung',
            lessonCount: 3,
            completed: false,
            progress: 0,
            lessons: [
              { id: 'l8', title: 'If-Statements', type: 'video', duration: 10, completed: false },
              { id: 'l9', title: 'For und While Schleifen', type: 'video', duration: 12, completed: false },
              { id: 'l10', title: 'Übungen', type: 'quiz', duration: 20, completed: false }
            ]
          },
          {
            id: 'm4',
            title: 'Funktionen',
            description: 'Funktionen definieren und verwenden',
            lessonCount: 2,
            completed: false,
            progress: 0,
            lessons: [
              { id: 'l11', title: 'Funktionen erstellen', type: 'video', duration: 15, completed: false },
              { id: 'l12', title: 'Abschlussprojekt', type: 'quiz', duration: 30, completed: false }
            ]
          }
        ]
      }
      
      setCourse(mockCourse)
      setLoading(false)
    }, 1000)
  }, [courseId])
  
  const handleEnroll = () => {
    if (!course) return
    
    // In einer echten Anwendung würdest du hier einen API-Aufruf machen
    alert(`Du hast dich erfolgreich für den Kurs "${course.name}" eingeschrieben!`)
    
    setCourse({
      ...course,
      enrolled: true
    })
  }
  
  const startLesson = (moduleId: string, lessonId: string) => {
    // In einer echten Anwendung würdest du hier zur Lektion navigieren
    router.push(`/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}`)
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
          <Skeleton className="h-4 w-5/6" />
          
          <div className="flex gap-2 mt-4">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    )
  }
  
  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-xl font-semibold mb-2">Kurs nicht gefunden</h2>
        <p className="text-muted-foreground mb-6">
          Der angeforderte Kurs konnte nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/courses">Zurück zur Kursübersicht</Link>
        </Button>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {/* Zurücknavigation */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/courses">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Zurück</span>
          </Link>
        </Button>
        <span className="text-sm text-muted-foreground">Zurück zur Kursübersicht</span>
      </div>
      
      {/* Kurskopf */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {course.categories.map(category => (
              <Badge key={category} variant="secondary">{category}</Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold">{course.name}</h1>
        </div>
        
        <p className="text-muted-foreground">{course.description}</p>
        
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{course.totalModules} Module, {course.totalLessons} Lektionen</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Etwa {course.estimatedHours} Stunden</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart className="h-4 w-4 text-muted-foreground" />
            <span>
              {course.enrolled ? `${course.progress}% abgeschlossen` : 'Nicht eingeschrieben'}
            </span>
          </div>
        </div>
        
        {/* Fortschrittsbalken oder Einschreiben-Button */}
        {course.enrolled ? (
          <div className="space-y-1">
            <div className="flex justify-between items-center text-sm">
              <span>Dein Fortschritt</span>
              <span className="font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        ) : (
          <Button onClick={handleEnroll} className="mt-2">
            In diesen Kurs einschreiben
          </Button>
        )}
      </div>
      
      <Separator />
      
      {/* Kursinhalt */}
      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Kursinhalt</TabsTrigger>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content" className="space-y-6 mt-6">
          <h2 className="text-xl font-semibold">Module und Lektionen</h2>
          
          <div className="space-y-4">
            {course.modules.map((module, moduleIndex) => (
              <Card key={module.id} className={moduleIndex === 0 || (moduleIndex > 0 && course.modules[moduleIndex-1].completed) ? "" : "opacity-70"}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {module.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <CircleDashed className="h-5 w-5 text-muted-foreground" />
                        )}
                        {module.title}
                      </CardTitle>
                      <CardDescription className="mt-1">{module.description}</CardDescription>
                    </div>
                    <Badge variant={module.completed ? "default" : "outline"}>
                      {module.progress}% abgeschlossen
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-muted">
                        <div className="flex items-center gap-2">
                          {lesson.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : lesson.type === 'video' ? (
                            <PlayCircle className="h-4 w-4 text-blue-500" />
                          ) : lesson.type === 'quiz' ? (
                            <FileQuestion className="h-4 w-4 text-purple-500" />
                          ) : (
                            <BookOpen className="h-4 w-4 text-orange-500" />
                          )}
                          <span>{lesson.title}</span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {lesson.duration} min
                          </Badge>
                        </div>
                        
                        {course.enrolled && (
                          <Button 
                            size="sm" 
                            variant={lesson.completed ? "outline" : "default"}
                            onClick={() => startLesson(module.id, lesson.id)}
                            disabled={moduleIndex > 0 && !course.modules[moduleIndex-1].completed}
                          >
                            {lesson.completed ? "Wiederholen" : "Starten"}
                          </Button>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Über diesen Kurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dieser Kurs ist ideal für Anfänger, die Python lernen möchten. Die Lektionen sind einfach zu verstehen und bauen aufeinander auf.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Was du lernen wirst:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Python-Syntax und Grundlagen</li>
                    <li>Variablen und Datentypen</li>
                    <li>Kontrollstrukturen und Schleifen</li>
                    <li>Funktionen definieren und verwenden</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Kursdetails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Dozent</h4>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Niveau</h4>
                  <p className="text-sm text-muted-foreground">Anfänger</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Voraussetzungen</h4>
                  <p className="text-sm text-muted-foreground">Keine Vorkenntnisse erforderlich</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}