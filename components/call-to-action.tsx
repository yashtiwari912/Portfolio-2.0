import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function CallToAction() {
    return (
        <section id='contact' className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4">Reach out to collaborate or build something impactful together.</p>

                    <div className="mt-12 flex justify-center">
                        <a
                            href="mailto:contactyashtiwari912@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg">
                                <Mail className="mr-2 h-5 w-5" />
                                Contact Me
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
