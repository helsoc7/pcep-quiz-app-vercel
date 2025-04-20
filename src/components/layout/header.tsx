"use client"

import { Eye, Paperclip, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"
import AuthControl from "@/components/AuthControl"

export default function Header() {
  return (
    <header className="w-full flex justify-center py-6">
      <nav className="flex space-x-8 text-sm text-gray-500 items-center">
        <Link href="exam-mode" className="flex items-center gap-2 hover:text-black transition">
          <Eye className="h-4 w-4" />
          Prüfungsmodus
        </Link>
        <Link href="quiz" className="flex items-center gap-2 hover:text-black transition">
          <Paperclip className="h-4 w-4" />
          Fragenkatalog
        </Link>
        <Link href="/dashboard" className="flex items-center gap-2 hover:text-black transition">
          <FileText className="h-4 w-4" />
          Dashboard
        </Link>
        <Link href="/faq" className="flex items-center gap-2 hover:text-black transition">
          <HelpCircle className="h-4 w-4" />
          FAQ
        </Link>
      </nav>
            {/* Login-Button mit Abstand */}
        <div className="ml-8">
          <AuthControl />
        </div>
    </header>
  )
}
