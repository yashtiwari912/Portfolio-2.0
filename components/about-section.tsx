"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Coffee, Gamepad2, Music, User, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const codingProfiles = [
  {
    platform: "GeeksForGeeks",
    username: "@yashtiwari912",
    stats: "680+ Problems Solved",
    rank: "College Rank 20",
    color: "from-orange-500 to-yellow-500",
    icon: "🏆",
    url: "https://www.geeksforgeeks.org/user/yashtiwari912/",
  },
  {
    platform: "GitHub",
    username: "@yashtiwari912",
    stats: "10+ Projects • Open Source Contributor",
    rank: "250+ Contributions",
    color: "from-gray-700 to-gray-900",
    icon: "⭐",
    url: "https://github.com/yashtiwari912",
  },
  {
    platform: "LinkedIn",
    username: "Yash Tiwari",
    stats: "900+ Connections • Active Networking",
    rank: "Full-Stack Developer",
    color: "from-sky-600 to-blue-800",
    icon: "💼",
    url: "https://www.linkedin.com/in/yash-tiwari-237312287/",
  },
  {
    platform: "X (Twitter)",
    username: "@Yash_Tiwari912",
    stats: "Tech Threads • Project Demos",
    rank: "Building in Public 🚀",
    color: "from-blue-500 to-gray-700",
    icon: "📣",
    url: "https://x.com/Yash_Tiwari912",
  },
]

const interests = [
  { icon: Code, label: "Clean Code", color: "text-blue-500" },
  { icon: Coffee, label: "Coffee Lover", color: "text-amber-600" },
  { icon: Music, label: "Music Producer", color: "text-purple-500" },
  { icon: Gamepad2, label: "Gaming", color: "text-green-500" },
  { icon: Zap, label: "Innovation", color: "text-yellow-500" },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const profilesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Coding profiles animation
      gsap.fromTo(
        ".coding-profile-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: profilesRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <User className="mr-2 h-4 w-4" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Digital Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with a love for creating innovative solutions and beautiful user
            experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center px-0 md:px-12 lg:px-16" ref={contentRef}>
          {/* Text Content */}
          <div className="space-y-6 pl-0 md:pl-8 lg:pl-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, I'm Yash Tiwari</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in full-stack development, I specialize in building secure, scalable applications using technologies like React, Node.js, and MongoDB.
                My journey began with a deep curiosity for how systems work, which soon evolved into a passion for creating seamless and impactful digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I take pride in writing clean, efficient code and continuously learning modern frameworks and tools.
                Outside of development, I enjoy experimenting with new ideas, building side projects, and helping peers grow through collaboration and mentorship.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-lg font-semibold mb-4">What I Love</h4>
              <div className="flex flex-wrap gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50 border hover:bg-muted hover:scale-105 transition-all duration-200"
                  >
                    <interest.icon className={`h-4 w-4 ${interest.color}`} />
                    <span className="text-sm">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild className="hover-lift">
                <Link href="#contact">Let's Work Together</Link>
              </Button>
              <Button variant="outline" asChild className="hover-lift">
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary/20 hover-lift">
              <Image
                src="/profile.jpg?height=400&width=400"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/40 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/30 rounded-full animate-float" />
          </div>
        </div>

        {/* Coding Profiles */}
        <div ref={profilesRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Profiles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether it's building in public, contributing to GitHub, or sharing insights on LinkedIn and X — here’s where I stay active as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codingProfiles.map((profile, index) => (
              <div
                key={index}
                className="coding-profile-card group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover-lift"
              >
                {/* Enhanced Animated Border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>
                <div className="absolute inset-[1px] rounded-2xl bg-background/95 backdrop-blur-sm" />

                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {profile.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{profile.platform}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{profile.username}</p>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm font-medium">{profile.stats}</p>
                    <p className="text-xs text-muted-foreground">{profile.rank}</p>
                  </div>
                  <Button size="sm" variant="outline" asChild className="w-full hover-lift">
                    <Link href={profile.url} target="_blank">
                      View Profile
                    </Link>
                  </Button>
                </div>

                {/* Enhanced floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-1 w-1 bg-primary/30 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
