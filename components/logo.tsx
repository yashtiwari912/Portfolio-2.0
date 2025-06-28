import Image from 'next/image'
import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <Image
                src="/logo.png"
                alt="Yash Tiwari Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
            />
            <span className="text-lg font-bold tracking-wide text-foreground">
                Yash Tiwari
            </span>
        </div>
    )
}
