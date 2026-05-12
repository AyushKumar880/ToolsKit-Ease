"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { SITE_NAME } from "@/lib/constants"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-4 flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
          <span className="font-bold text-xl">{SITE_NAME}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Home</Link>
            <Link href="/favorites" className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Favorites</Link>
            <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Settings</Link>
          </nav>
          <ThemeToggle />
          <button
            ref={buttonRef}
            className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div ref={menuRef} className="md:hidden" role="dialog" aria-modal="true" aria-label="Main menu">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/favorites" className="block text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-2" onClick={() => setIsMobileMenuOpen(false)}>Favorites</Link>
            <Link href="/settings" className="block text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-2" onClick={() => setIsMobileMenuOpen(false)}>Settings</Link>
          </div>
        </div>
      )}
    </header>
  )
}
