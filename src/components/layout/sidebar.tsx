'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  ChevronDown,
  ChevronRight,
  Home,
  BookOpen,
  Layers,
  BarChart2,
  CheckSquare,
  PenTool,
  GraduationCap,
  Users,
  FileText,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Course {
  id: string
  name: string
}

interface Class {
  id: string
  name: string
}

export function Sidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const [coursesOpen, setCoursesOpen] = useState(true)
  const [classesOpen, setClassesOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  
  const [courses, setCourses] = useState<Course[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  
  // Beim ersten Laden Demo-Daten anzeigen
  useEffect(() => {
    // In einer echten Anwendung würden hier die Daten vom Server geladen werden
    setTimeout(() => {
      setCourses([
        { id: '1', name: 'Python Grundlagen' },
        { id: '2', name: 'Objektorientierte Programmierung' },
        { id: '3', name: 'Backend-Entwicklung' },
        { id: '4', name: 'Webentwicklung mit Flask' },
        { id: '5', name: 'Datenbanken' }
      ])
      
      setClasses([
        { id: '1', name: 'Frontend 2023 Campus Berlin' },
        { id: '2', name: 'Backend 2024 Campus München' }
      ])
      
      setLoading(false)
    }, 1000)
  }, [])
  
  // Navigations-Links
  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/exam-mode', label: 'Prüfungsmodus', icon: CheckSquare },
    { href: '/quiz', label: 'Fragenkatalog', icon: FileText },
    { href: '/statistics', label: 'Statistiken', icon: BarChart2 },
    { href: '/board', label: 'Board', icon: BarChart2 },
  ]
  
  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      
      {/* Sidebar für Mobile mit Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity", 
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />
      
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-card border-r fixed top-0 left-0 z-40 h-full w-64 transition-transform lg:translate-x-0 flex flex-col",
          open ? "max-w-64" : "max-w-16 w-16",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <div className={cn("transition-opacity", !open && "opacity-0 invisible")}>
            <span className="text-lg font-semibold">Lernplattform</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:flex hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            <ChevronRight className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <Link 
                key={i} 
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                <span 
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className={cn("transition-opacity", !open && "hidden lg:opacity-0")}>{item.label}</span>
                </span>
              </Link>
            ))}
            
            {/* Trennlinie */}
            <div className="my-2 border-t border-border" />

            {/* Meine Kurse */}
            <Collapsible 
              open={coursesOpen} 
              onOpenChange={setCoursesOpen}
              className={cn(!open && "hidden")}
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4" />
                    <span>Meine Kurse</span>
                  </div>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", coursesOpen && "rotate-180")} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-8 mt-1">
                {loading ? (
                  // Lade-Zustände für Kurse
                  Array(3).fill(0).map((_, i) => (
                    <div key={i} className="mb-2">
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))
                ) : courses.length > 0 ? (
                  // Kursliste
                  courses.map((course) => (
                    <Link 
                      key={course.id} 
                      href={`/courses/${course.id}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground">
                        <span>{course.name}</span>
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground py-2 px-3">Keine Kurse gefunden</p>
                )}
                <Link 
                  href="/courses" 
                  className="text-sm text-primary hover:underline mt-2 inline-block px-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Alle Kurse anzeigen
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Meine Klassen */}
            <Collapsible 
              open={classesOpen} 
              onOpenChange={setClassesOpen}
              className={cn(!open && "hidden")}
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4" />
                    <span>Meine Klassen</span>
                  </div>
                  <ChevronDown className={cn("h-4 w-4 transition-transform", classesOpen && "rotate-180")} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-8 mt-1">
                {loading ? (
                  // Lade-Zustände für Klassen
                  Array(2).fill(0).map((_, i) => (
                    <div key={i} className="mb-2">
                      <Skeleton className="h-8 w-full" />
                    </div>
                  ))
                ) : classes.length > 0 ? (
                  // Klassenliste
                  classes.map((cls) => (
                    <Link 
                      key={cls.id} 
                      href={`/classes/${cls.id}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground">
                        <span>{cls.name}</span>
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground py-2 px-3">Keine Klassen gefunden</p>
                )}
              </CollapsibleContent>
            </Collapsible>
            
            {/* Admin-Bereich (nur für Admins und Lehrer) */}
            {session?.user?.role === "ADMIN" || session?.user?.role === "TEACHER" ? (
              <>
                <div className="my-2 border-t border-border" />
                <Link 
                  href="/admin" 
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span className={cn("transition-opacity", !open && "hidden lg:opacity-0")}>Admin-Bereich</span>
                  </span>
                </Link>
              </>
            ) : null}
          </nav>
        </ScrollArea>
        
        {/* Nutzerinfo */}
        {session?.user && (
          <div className={cn(
            "border-t p-4", 
            !open && "hidden lg:flex lg:justify-center lg:p-2"
          )}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-medium">
                  {session.user.name?.charAt(0) || session.user.email?.charAt(0) || "U"}
                </span>
              </div>
              <div className={cn("overflow-hidden transition-opacity", !open && "hidden lg:opacity-0")}>
                <p className="text-sm font-medium truncate">
                  {session.user.name || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {session.user.role === "ADMIN" ? "Administrator" : 
                   session.user.role === "TEACHER" ? "Lehrer" : "Student"}
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}