"use client"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, Award, GraduationCap } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const experiences = [
  {
    title: "Android Development (Core Team Member)",
    company: "GDSC Jabalpur Engineering College",
    location: "Jabalpur, MP",
    period: "2023 - 2024",
    type: "Club/Community",
    description:
      "Contributed as a core team member focusing on Android development. Helped organize workshops, mentored juniors, and contributed to multiple community tech initiatives.",
    achievements: [
      "Conducted Android development workshops for 50+ students",
      "Built internal apps for event tracking & participation",
      "Assisted juniors in project development and publishing",
      "Contributed to GDSC technical blog content",
    ],
    technologies: ["Java", "XML", "Firebase", "Git", "Android Studio"],
    color: "from-yellow-400/20 to-orange-400/20",
  },
  {
    title: "Hackathon & Project Experience",
    company: "Multiple Platforms (SIH, Devfolio, etc.)",
    location: "Remote / On-site",
    period: "2022 - Present",
    type: "Hackathons & Competitions",
    description:
      "Participated in national and college-level hackathons, focusing on building real-world solutions under tight deadlines. Collaborated in teams and presented prototypes to judges.",
    achievements: [
      "Selected as finalist in 2 major hackathons",
      "Built QuizJec – an exam simulator app using MERN, Electron, and C++",
      "Developed performance dashboard with real-time analytics",
      "Received praise for UI/UX and technical implementation",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Electron", "C++", "Redis"],
    color: "from-cyan-500/20 to-indigo-500/20",
  },
  {
    title: "Independent Full-Stack Developer",
    company: "Personal Projects & Freelance",
    location: "Remote",
    period: "2023 - Present",
    type: "Self-driven",
    description:
      "Designed and developed multiple full-stack projects, focusing on performance, scalability, and user experience. Leveraged modern tools and frameworks to deliver secure, maintainable, and feature-rich applications.",
    achievements: [
      "Built 8+ projects including QuizJec – a desktop-based exam simulator with real-time analytics and system-level control",
      "Integrated secure authentication with JWT, rate limiting with Redis, and Firebase for auth in select cases",
      "Deployed and maintained apps on AWS EC2, Render, and Vercel",
      "Practiced clean architecture, modular code, and Git-based workflows across all projects"
    ],
    technologies: [
      "React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "JavaScript",
      "C", "Java", "HTML", "CSS", "XML", "EJS",
      "MongoDB", "NoSQL", "SQL", "PostgreSQL", "Prisma ORM",
      "Redis", "Firebase", "Docker", "Recoil", "Git", "Canva", "Figma"
    ],
    color: "from-teal-500/20 to-emerald-500/20",
  }
  ,
]


const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "Jabalpur Engineering College (JEC)",
    location: "Jabalpur, Madhya Pradesh",
    period: "2022 - 2026",
    description:
      "Currently pursuing B.Tech with strong focus on backend development, full-stack projects, and system-level engineering.",
    achievements: [
      "Current CGPA: 7.8",
      "Core Member, GDSC",
      "Built 10+ Projects",
      "Hackathon Participant",
    ],
  },
]



const certifications = [
  {
    name: "NCC ‘C’ Certificate",
    issuer: "National Cadet Corps",
    year: "July 2024",
    color: "from-green-600/20 to-green-900/20",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "GeeksForGeeks",
    year: "June 2024",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Web Development Bootcamp",
    issuer: "Dr. Angela Yu (Udemy)",
    year: "October 2024",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    name: "GFG 160 Days DSA Challenge",
    issuer: "GeeksForGeeks",
    year: "March 2025",
    color: "from-yellow-500/20 to-orange-500/20",
  },
]


export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)

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

      // Timeline animation
      gsap.fromTo(
        ".experience-card",
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Timeline line animation
      gsap.fromTo(
        ".timeline-line",
        { height: "0%" },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Education animation
      gsap.fromTo(
        educationRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Certifications animation
      gsap.fromTo(
        ".cert-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certificationsRef.current,
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
    <section id="experience" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" ref={titleRef}>
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Briefcase className="mr-2 h-4 w-4" />
            Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracing my growth from a passionate learner to a skilled developer through key milestones and achievements.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-20" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 w-0.5 bg-border timeline-line" style={{ height: "0%" }} />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card relative flex gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-4 border-background shadow-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 group hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient Background - scoped to individual card */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg`}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-4">
                        {exp.type}
                      </Badge>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16" ref={educationRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              Education
            </h3>
            <p className="text-muted-foreground">Academic background and achievements</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg" />
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-xl text-primary font-semibold">{edu.school}</p>
                      <div className="flex items-center justify-center gap-4 text-muted-foreground mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-muted-foreground mb-6">{edu.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div ref={certificationsRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Certifications
            </h3>
            <p className="text-muted-foreground">Professional certifications and achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="cert-card group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-6 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg`}
                  />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{cert.name}</h4>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
