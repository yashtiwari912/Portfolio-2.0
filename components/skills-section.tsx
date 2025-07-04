"use client"
import { useEffect, useRef } from "react"
import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Layers, Code2, Database, Palette, Zap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    color: "text-pink-500",
    skills: [
      { name: "React.js / Next.js", level: 92 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "HTML / CSS / XML", level: 95 },
      { name: "Recoil", level: 80 },
      { name: "EJS", level: 78 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-blue-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB / NoSQL", level: 85 },
      { name: "PostgreSQL / SQL", level: 87 },
      { name: "Prisma ORM", level: 82 },
    ],
  },
  {
    title: "Dev Tools & Version Control",
    icon: Zap,
    color: "text-yellow-500",
    skills: [
      { name: "Git & GitHub", level: 94 },
      { name: "VS Code / Developer Tools", level: 92 },
      { name: "Command Line", level: 85 },
      { name: "Debugging / Profiling", level: 95 },
    ],
  },
  {
    title: "Additional & Programming",
    icon: Layers,
    color: "text-purple-500",
    skills: [
      { name: "C / Java (Core)", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "Browser Compatibility", level: 85 },
      { name: "Design Tools (Figma, Canva)", level: 80 },
    ],
  },
]

const tools = [
  "VS Code",
  "Android Studio",
  "Postman",
  "Figma",
  "Notion",
  "Eclipse",
  "Render",
  "GitHub",
  "Vercel",
  "Firebase",
  "Neondb",
  "Prisma",
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const toolsRef = useRef<HTMLDivElement>(null)

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

      // Skills cards animation
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Progress bars animation
      gsap.fromTo(
        ".progress-bar",
        { width: "0%" },
        {
          width: "var(--progress-width)",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Tools animation
      gsap.fromTo(
        ".tool-badge",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: toolsRef.current,
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
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Code2 className="mr-2 h-4 w-4" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Proficiency</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and expertise across different domains of software
            development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" ref={skillsRef}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-[1px] rounded-2xl bg-background/95 backdrop-blur-sm" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-muted/50">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="progress-bar h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300"
                          style={{ "--progress-width": `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div ref={toolsRef}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Tools & Technologies</h3>
            <p className="text-muted-foreground">Additional tools and technologies I work with on a regular basis.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="tool-badge px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
