import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"

// GET: Alle Kurse abrufen (mit Filter- und Suchoptionen)
export async function GET(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    
    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 })
    }
    
    // Query-Parameter für Filterung und Suche
    const searchParams = req.nextUrl.searchParams
    const search = searchParams.get('search')
    const enrolled = searchParams.get('enrolled')
    
    // Basis-Abfrage
    let whereClause: any = {}
    
    // Suchfilter hinzufügen
    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    // Holen wir alle Kurse
    const allCourses = await prisma.course.findMany({
      where: whereClause,
      include: {
        enrollments: {
          where: {
            userId: user.id
          },
          select: {
            id: true,
            progressPercent: true,
            completedAt: true
          }
        },
        classCourses: {
          where: {
            class: {
              students: {
                some: {
                  id: user.id
                }
              }
            }
          },
          include: {
            class: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })
    
    // Transformiere die Daten für die Frontend-Anzeige
    const transformedCourses = allCourses.map(course => {
      const isEnrolled = course.enrollments.length > 0 || course.classCourses.length > 0
      
      // Wenn nach Einschreibung gefiltert wird
      if (enrolled === 'true' && !isEnrolled) return null
      if (enrolled === 'false' && isEnrolled) return null
      
      return {
        id: course.id,
        name: course.name,
        description: course.description,
        coverImage: course.coverImage,
        createdAt: course.createdAt,
        enrolled: isEnrolled,
        progress: course.enrollments[0]?.progressPercent || 0,
        completed: course.enrollments[0]?.completedAt ? true : false,
        classes: course.classCourses.map(cc => ({
          id: cc.class.id,
          name: cc.class.name
        }))
      }
    })
    
    // Entferne null-Werte (wenn gefiltert wurde)
    const filteredCourses = transformedCourses.filter(Boolean)
    
    return NextResponse.json(filteredCourses)
  } catch (error) {
    console.error("Fehler beim Abrufen der Kurse:", error)
    return NextResponse.json(
      { error: "Fehler beim Abrufen der Kurse" },
      { status: 500 }
    )
  }
}

// POST: Neuen Kurs erstellen (nur für Admins und Lehrer)
export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    
    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 })
    }
    
    // Prüfe, ob der Benutzer Administrator oder Lehrer ist
    if (user.role !== "ADMIN" && user.role !== "TEACHER") {
      return NextResponse.json(
        { error: "Keine Berechtigung zum Erstellen von Kursen" },
        { status: 403 }
      )
    }
    
    const data = await req.json()
    const { name, description, coverImage } = data
    
    // Validierung
    if (!name) {
      return NextResponse.json(
        { error: "Kursname ist erforderlich" },
        { status: 400 }
      )
    }
    
    // Kurs erstellen
    const newCourse = await prisma.course.create({
      data: {
        name,
        description: description || "",
        coverImage: coverImage || null
      }
    })
    
    return NextResponse.json(newCourse, { status: 201 })
  } catch (error) {
    console.error("Fehler beim Erstellen des Kurses:", error)
    return NextResponse.json(
      { error: "Fehler beim Erstellen des Kurses" },
      { status: 500 }
    )
  }
}