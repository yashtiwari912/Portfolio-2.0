import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import FooterSection from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Testimonials />
      <CallToAction />
      <FooterSection />
    </div>
  )
}
