"use client"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import React from "react"
import { cn } from "@/lib/utils"

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed z-20 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-4 md:px-6 transition-all duration-300",
            (isScrolled || menuState) && "bg-background/80 max-w-4xl rounded-2xl border backdrop-blur-lg",
          )}
        >
          <div className="relative flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 relative group"
                >
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <ThemeToggle />

              <Button asChild size="sm" className={cn(isScrolled ? "inline-flex" : "hidden")}>
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative p-2 rounded-md hover:bg-muted transition-colors"
                data-state={menuState ? "active" : "inactive"}
              >
                <Menu
                  className={cn("h-6 w-6 transition-all duration-200", menuState && "rotate-180 scale-0 opacity-0")}
                />
                <X
                  className={cn(
                    "absolute inset-2 h-6 w-6 transition-all duration-200",
                    !menuState && "-rotate-180 scale-0 opacity-0",
                  )}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
              menuState ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="py-4 space-y-4 border-t">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMenuState(false)}
                  className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button asChild size="sm" className="w-full">
                  <Link href="#contact" onClick={() => setMenuState(false)}>
                    Let's Talk
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
