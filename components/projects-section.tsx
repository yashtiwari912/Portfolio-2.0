"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Play, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    id: 1,
    title: "QuizJec",
    description: "QuizJec is a secure desktop exam simulator built with ElectronJS, React, Node.js, and C++. It offers real-time scoring, question navigation, system-level restrictions, and separate teacher-student portals. Designed for institutes like JEC with full offline support and anti-cheating measures.",
    image: "/quizjec.png",
    tech: [
      "ElectronJS",
      "React",
      "Node.js",
      "Express.js",
      "C++",
      "TypeScript",
      "MongoDB",
      "JWT",
      "Zod",
      "Tailwind CSS",
      "bcrypt",
      "Axios",
      "Framer Motion"
    ],
    demoUrl: "https://drive.google.com/file/d/1ANyNWmnZAyAw69U-zkfJcVILAzX8GCea/view",
    githubUrl: "",
    featured: false,
    gradient: "from-purple-500/20 to-indigo-500/20",
    showDemo: true,
    showCode: false,
  }

  ,
  {
    id: 2,
    title: "Prescripto",
    description:
      "An intelligent healthcare web app for doctors to generate digital prescriptions with real-time patient management and dynamic medicine suggestions.",
    image: "/prescripto.png",
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    demoUrl: "https://prescripto-frontend-je7v.onrender.com",
    githubUrl: "https://github.com/yashtiwari912/prescripto",
    featured: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    showDemo: true,
    showCode: true,
  },
  {
    id: 3,
    title: "TravelCare",
    description:
      "A travel and tourism management app providing safe route guidance, SOS features, live location sharing, and itinerary planning for solo travelers.",
    image: "/travelcare.png",
    tech: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "GeoPointer"],
    demoUrl: "https://travelcare.onrender.com/",
    githubUrl: "https://github.com/yashtiwari912/TravelCare",
    featured: false,
    gradient: "from-orange-500/20 to-yellow-500/20",
    showDemo: true,
    showCode: true,
  },
  {
    id: 4,
    title: "GitFind",
    description:
      "A minimal GitHub user search tool built with clean UI and seamless GitHub API integration. Provides insights into user repositories and contributions.",
    image: "/gitfind.png",
    tech: ["React.js", "TailwindCSS", "GitHub API"],
    demoUrl: "https://gitfind-9nq7.onrender.com/",
    githubUrl: "https://github.com/yashtiwari912/GitFind",
    featured: false,
    gradient: "from-gray-700/20 to-zinc-800/20",
    showDemo: true,
    showCode: true,
  },
  {
    id: 5,
    title: "Previous Portfolio",
    description:
      "My earlier developer portfolio showcasing my frontend skills and early full-stack projects. Built with basic routing and animations.",
    image: "/oldportfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://portfolio-yashtiwari.onrender.com/",
    githubUrl: "",
    featured: false,
    gradient: "from-slate-500/20 to-neutral-500/20",
    showDemo: true,
    showCode: false,
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description:
      "A collaborative filtering-based recommendation engine using cosine similarity to suggest movies based on user preferences.",
    image: "/movierec.png",
    tech: ["Python", "Pandas", "Sklearn", "Flask"],
    demoUrl: "https://movie-reccomendation-yashtiwari.streamlit.app/",
    githubUrl: "https://github.com/yashtiwari912/Movie-Reccomendation",
    featured: false,
    gradient: "from-red-400/20 to-pink-500/20",
    showDemo: true,
    showCode: true,
  },
  {
    id: 7,
    title: "ChatOn (Android)",
    description:
      "A real-time chat application with user authentication, Firebase Realtime Database support, and a clean Android UI.",
    image: "/chaton.jpg",
    tech: ["Java", "XML", "Firebase"],
    demoUrl: "https://www.linkedin.com/posts/yash-tiwari-237312287_chaton-java-firebase-activity-7144638855403544576-dQzW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWis8sBVhIgYg1cYbI02TXR2OPSeYhULEw",
    githubUrl: "https://github.com/yashtiwari912/ChatOn",
    featured: false,
    gradient: "from-green-500/20 to-lime-500/20",
    showDemo: true,
    showCode: true,
  },
  {
    id: 8,
    title: "StockWalls (Android)",
    description:
      "A beautiful stock wallpaper browsing app using the Pexels API with smooth image rendering and download functionality.",
    image: "/stockwalls.jpg",
    tech: ["Java", "XML", "Pexels API"],
    demoUrl: "",
    githubUrl: "https://github.com/yashtiwari912/StockWalls",
    featured: false,
    gradient: "from-teal-500/20 to-cyan-600/20",
    showDemo: false,
    showCode: true,
  },
  {
    id: 9,
    title: "News App (Android)",
    description:
      "A modern Android app that displays tech news using WebView. Features custom in-app browsing and category filtering.",
    image: "/newsapp.jpeg",
    tech: ["Java", "XML", "WebView"],
    demoUrl: "",
    githubUrl: "https://github.com/yashtiwari912/NewsApp",
    featured: false,
    gradient: "from-indigo-500/20 to-blue-600/20",
    showDemo: false,
    showCode: true,
  },
  {
    id: 10,
    title: "iMusic Player (Android)",
    description:
      "A sleek offline music player app built for Android with audio controls, playlists, and shuffle modes.",
    image: "/imusic.jpg",
    tech: ["Java", "XML"],
    demoUrl: "",
    githubUrl: "https://github.com/yashtiwari912/iMusicPlayer",
    featured: false,
    gradient: "from-pink-400/20 to-fuchsia-500/20",
    showDemo: false,
    showCode: true,
  },
]


const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${project.featured ? "col-span-1 row-span-1 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-transparent to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
      <div className="absolute inset-[1px] rounded-2xl bg-background/95 backdrop-blur-sm" />

      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-3 sm:p-4 md:p-6">
        {/* Project Image */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={project.featured ? 600 : 400}
            height={project.featured ? 400 : 300}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.featured ? "h-48 md:h-64" : "h-32 md:h-48"
              }`}
          />

          {/* Overlay with buttons on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 backdrop-blur-sm"
          >
            {project.showDemo && (
              <Button size="sm" asChild className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Link href={project.demoUrl} target="_blank">
                  <Play className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            )}
            {project.showCode && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h3 className={`font-semibold ${project.featured ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>
              {project.title}
            </h3>
            {project.featured && (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
              </motion.div>
            )}
          </div>

          <p className="mb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1 md:gap-2">
            {project.tech.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-primary/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${80 - i * 20}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
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
    }

    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="projects" className="py-12 sm:py-20 md:py-24 relative overflow-hidden" ref={sectionRef}>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects That Define Excellence</h2>
          </div>

          <div ref={subtitleRef}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of my best work, showcasing innovative solutions and cutting-edge technologies. Each
              project represents a unique challenge solved with creativity and precision.
            </p>
          </div>
        </div>

        {/* Bento Grid - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl border bg-card/50 backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-semibold mb-2">Want to see more?</h3>
              <p className="text-sm text-muted-foreground">
                Check out my GitHub for additional projects and contributions.
              </p>
            </div>
            <Button asChild>
              <Link href="https://github.com/yashtiwari912" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
