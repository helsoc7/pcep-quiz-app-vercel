'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
// import { useToast } from '@/components/ui/use-toast'

interface Course {
  id: string
  name: string
  description: string
  progressPercent?: number
  enrolled?: boolean
  classes?: { id: string; name: string }[]
}

// Komponentenfunktion für eine Kurskarte
function CourseCard({ course }: { course: Course }) {
  // Extrahiere Kategorien aus der Beschreibung (in einer echten Anwendung würdest du eigene Kategorien haben)
  const categories = course.description
    .split(' ')
    .filter(word => word.length > 5)
    .slice(0, 3)
    .map(word => word.replace(/[.,!?]/g, ''))
  
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{course.name}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground">{course.description}</p>
        
        {course.enrolled && typeof course.progressPercent === 'number' && (
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-xs">
              <span>Fortschritt</span>
              <span>{course.progressPercent}%</span>
            </div>
            <Progress value={course.progressPercent} className="h-1" />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        {course.enrolled ? (
          <Button asChild className="w-full">
            <Link href={`/courses/${course.id}`}>Fortsetzen</Link>
          </Button>
        ) : (
          <Button asChild variant="outline" className="w-full">
            <Link href={`/courses/${course.id}`}>Details ansehen</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function CoursesPage() {
//   const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  
  // Daten von der API laden
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true)
      try {
        // Optional: Füge Suchparameter hinzu, wenn ein Suchbegriff eingegeben wurde
        const params = new URLSearchParams()
        if (searchQuery) {
          params.append('search', searchQuery)
        }

        const response = await fetch(`/api/courses?${params.toString()}`)
        
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Kurse')
        }
        
        const data = await response.json()
        setCourses(data)
        setFilteredCourses(data)
      } catch (error) {
        console.error('Fehler beim Laden der Kurse:', error)
        // toast({
        //   title: 'Fehler',
        //   description: 'Die Kurse konnten nicht geladen werden. Bitte versuche es später erneut.',
        //   variant: 'destructive'
        // })
      } finally {
        setLoading(false)
      }
    }
    
    fetchCourses()
  }, [searchQuery])
  
  // Suchfunktion - jetzt direkt über die API, aber wir haben auch eine lokale Filterung
  // für schnellere Benutzererfahrung während des Tippens
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCourses(courses)
      return
    }
    
    const query = searchQuery.toLowerCase()
    const filtered = courses.filter(course => {
      return (
        course.name.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
      )
    })
    
    setFilteredCourses(filtered)
  }, [searchQuery, courses])
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kurse</h1>
          <p className="text-muted-foreground">Entdecke verfügbare Kurse und setze dein Lernen fort.</p>
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Kurse durchsuchen..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Meine Kurse Sektion */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Meine Kurse</h2>
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mt-1" />
                </CardHeader>
                <CardContent className="py-4">
                  <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                    <Skeleton className="h-3 w-1/4" />
                    <Skeleton className="h-3 w-1/4" />
                  </div>
                  <Skeleton className="h-2 w-full mt-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {filteredCourses.filter(c => c.enrolled).length === 0 ? (
              <p className="text-muted-foreground py-8 text-center border rounded-lg">
                Du bist noch in keinem Kurs eingeschrieben oder es wurden keine Kurse gefunden.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => course.enrolled)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            )}
          </>
        )}
      </section>
      
      {/* Verfügbare Kurse Sektion */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Verfügbare Kurse</h2>
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3 mt-1" />
                </CardHeader>
                <CardContent className="py-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5 mt-1" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            {filteredCourses.filter(c => !c.enrolled).length === 0 ? (
              <p className="text-muted-foreground py-8 text-center border rounded-lg">
                Keine weiteren Kurse verfügbar oder es wurden keine Kurse gefunden.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCourses
                  .filter(course => !course.enrolled)
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}