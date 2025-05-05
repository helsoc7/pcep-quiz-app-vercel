import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getUserFromToken } from "@/lib/getUserFromToken"

// POST: In einen Kurs einschreiben
export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    
    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 })
    }
    
    const data = await req.json()
    const { courseId } = data
    
    if (!courseId) {
      return NextResponse.json(
        { error: "Kurs-ID ist erforderlich" },
        { status: 400 }
      )
    }
    
    // Prüfe, ob der Kurs existiert
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    })
    
    if (!course) {
      return NextResponse.json(
        { error: "Kurs wurde nicht gefunden" },
        { status: 404 }
      )
    }
    
    // Prüfe, ob der Benutzer bereits eingeschrieben ist
    const existingEnrollment = await prisma.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseId
        }
      }
    })
    
    if (existingEnrollment) {
      return NextResponse.json(
        { error: "Du bist bereits in diesem Kurs eingeschrieben" },
        { status: 400 }
      )
    }
    
    // Benutzer in den Kurs einschreiben
    const enrollment = await prisma.courseEnrollment.create({
      data: {
        userId: user.id,
        courseId: courseId,
        enrolledAt: new Date(),
        progressPercent: 0
      }
    })
    
    return NextResponse.json(enrollment, { status: 201 })
  } catch (error) {
    console.error("Fehler bei der Kurseinschreibung:", error)
    return NextResponse.json(
      { error: "Fehler bei der Kurseinschreibung" },
      { status: 500 }
    )
  }
}

// PUT: Kursfortschritt aktualisieren
export async function PUT(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    
    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 })
    }
    
    const data = await req.json()
    const { courseId, progressPercent, completed } = data
    
    if (!courseId) {
      return NextResponse.json(
        { error: "Kurs-ID ist erforderlich" },
        { status: 400 }
      )
    }
    
    // Prüfe, ob der Benutzer im Kurs eingeschrieben ist
    const enrollment = await prisma.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseId
        }
      }
    })
    
    if (!enrollment) {
      return NextResponse.json(
        { error: "Du bist nicht in diesem Kurs eingeschrieben" },
        { status: 404 }
      )
    }
    
    // Aktualisierungsdaten vorbereiten
    const updateData: any = {}
    
    if (typeof progressPercent === 'number') {
      updateData.progressPercent = Math.min(Math.max(progressPercent, 0), 100)
    }
    
    if (completed === true) {
      updateData.completedAt = new Date()
    } else if (completed === false) {
      updateData.completedAt = null
    }
    
    // Kursfortschritt aktualisieren
    const updatedEnrollment = await prisma.courseEnrollment.update({
      where: {
        id: enrollment.id
      },
      data: updateData
    })
    
    return NextResponse.json(updatedEnrollment)
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Kursfortschritts:", error)
    return NextResponse.json(
      { error: "Fehler beim Aktualisieren des Kursfortschritts" },
      { status: 500 }
    )
  }
}

// DELETE: Aus einem Kurs austragen
export async function DELETE(req: NextRequest) {
  try {
    const user = await getUserFromToken(req)
    
    if (!user) {
      return NextResponse.json({ error: "Nicht authentifiziert" }, { status: 401 })
    }
    
    const searchParams = req.nextUrl.searchParams
    const courseId = searchParams.get('courseId')
    
    if (!courseId) {
      return NextResponse.json(
        { error: "Kurs-ID ist erforderlich" },
        { status: 400 }
      )
    }
    
    // Prüfe, ob der Benutzer im Kurs eingeschrieben ist
    const enrollment = await prisma.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseId
        }
      }
    })
    
    if (!enrollment) {
      return NextResponse.json(
        { error: "Du bist nicht in diesem Kurs eingeschrieben" },
        { status: 404 }
      )
    }
    
    // Prüfe, ob der Benutzer über eine Klasse in dem Kurs ist
    const isEnrolledViaClass = await prisma.classCourse.findFirst({
      where: {
        courseId: courseId,
        class: {
          students: {
            some: {
              id: user.id
            }
          }
        }
      }
    })
    
    if (isEnrolledViaClass) {
      return NextResponse.json(
        { error: "Du kannst dich nicht aus diesem Kurs austragen, da du über eine Klasse eingeschrieben bist" },
        { status: 400 }
      )
    }
    
    // Benutzer aus dem Kurs austragen
    await prisma.courseEnrollment.delete({
      where: {
        id: enrollment.id
      }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Fehler beim Austragen aus dem Kurs:", error)
    return NextResponse.json(
      { error: "Fehler beim Austragen aus dem Kurs" },
      { status: 500 }
    )
  }
}