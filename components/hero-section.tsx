"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { HeroHeader } from "./header"
import { TechStackSlider } from "./tech-stack-slider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const transitionVariants = {
  container: {
    visible: {},
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function HeroSection() {
  const heroImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (heroImageRef.current) {
      // Initial animation for the hero image
      gsap.fromTo(
        heroImageRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotateX: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.5,
          delay: 1,
          ease: "power3.out",
        },
      )

      // Parallax scroll effect
      gsap.to(heroImageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(heroImageRef.current, {
          scale: 1.02,
          rotateY: 2,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(heroImageRef.current, {
          scale: 1,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const element = heroImageRef.current
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div aria-hidden className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Modern workspace with code on multiple monitors"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block opacity-20"
                width="3276"
                height="4095"
              />
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                alt="Clean coding workspace"
                className="absolute inset-x-0 top-56 -z-20 lg:top-32 dark:hidden opacity-10"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#contact"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">Available for New Opportunities</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Full-Stack Developer & Creative Problem Solver
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground"
                >
                  I craft exceptional digital experiences through clean code, innovative design, and user-centered
                  thinking. Specializing in modern web technologies and scalable solutions.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: transitionVariants.item,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >

                  <Button key={1} asChild size="lg" className="rounded-xl px-5 text-base">
                    <Link href="#projects">
                      <span className="whitespace-nowrap">View My Work</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild size="lg" variant="ghost" className="rounded-xl px-5 text-base">
                    <Link href="#contact">
                      <Mail className="mr-2 size-4" />
                      <span className="whitespace-nowrap">Get In Touch</span>
                    </Link>
                  </Button>
                  <Button key={3} asChild size="lg" variant="outline" className="rounded-xl px-5 text-base">
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 size-4" />
                      <span className="whitespace-nowrap">Resume</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <div ref={heroImageRef}>
              <div className="relative  mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                    alt="Modern dashboard interface showcasing development work"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
                    alt="Clean development workspace and analytics dashboard"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TechStackSlider />
      </main>
    </>
  )
}
