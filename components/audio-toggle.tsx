"use client"
import { Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function AudioToggle() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isMuted, setIsMuted] = useState(true)

    useEffect(() => {
        const audio = audioRef.current
        if (audio) {
            audio.volume = 0.2
            audio.loop = true
        }

        return () => {
            if (audio) {
                audio.pause()
                audio.currentTime = 0
            }
        }
    }, [])

    const toggleAudio = async () => {
        const audio = audioRef.current
        if (!audio) return

        if (audio.paused && isMuted) {
            try {
                await audio.play()
                setIsMuted(false)
            } catch (err) {
                console.error("Audio play failed", err)
            }
        } else {
            audio.pause()
            audio.currentTime = 0
            setIsMuted(true)
        }
    }

    return (
        <>
            <audio ref={audioRef} preload="auto">
                <source src="/music.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
            >
                {/* Ripple Soundwave Effect */}
                {isMuted && (
                    <motion.div
                        className="absolute inset-0 z-0 rounded-full bg-primary/20"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeOut",
                            repeatDelay: 0.4,
                        }}
                    />
                )}

                <motion.button
                    onClick={toggleAudio}
                    className="relative z-10 h-10 w-10 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-md"
                    whileHover={{
                        scale: 1.1,
                        rotate: isMuted ? [0, 3, -3, 0] : 0,
                    }}
                    whileTap={{ scale: 0.9 }}
                    title={isMuted ? "Unmute background music" : "Mute background music"}
                >
                    {/* Speaker On */}
                    <motion.div
                        initial={false}
                        animate={{ scale: isMuted ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Volume2 className="h-4 w-4" />
                    </motion.div>

                    {/* Speaker Off */}
                    <motion.div
                        initial={false}
                        animate={{ scale: isMuted ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <VolumeX className="h-4 w-4" />
                    </motion.div>
                    <span className="sr-only">
                        {isMuted ? "Play background music" : "Pause background music"}
                    </span>
                </motion.button>
            </motion.div>
        </>
    )
}
