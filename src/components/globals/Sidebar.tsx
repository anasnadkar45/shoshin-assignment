'use client'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import Logo from '../../app/public/icons/Group 2770.svg'
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight, Building, Calendar, UserPlus, Users2 } from "lucide-react"
import { DashboardIcon } from "@radix-ui/react-icons"

export const NavLinks = [
    {
        id: 1,
        href: '/',
        title: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        id: 2,
        href: '/',
        title: 'Recruitment',
        icon: UserPlus,
    },
    {
        id: 3,
        href: '/',
        title: 'Schedule',
        icon: Calendar,
    },
    {
        id: 4,
        href: '/',
        title: 'Employee',
        icon: Users2,
    },
    {
        id: 5,
        href: '/',
        title: 'Department',
        icon: Building,
    },
]

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)
    // const pathname = usePathname()

    return (
        <aside className={`h-full relative hidden sm:flex flex-col bg-background transition-width duration-300 ease-in-out ${isExpanded ? 'w-44' : 'w-fit'} border-r`}>
            {/* Logo */}
            <div className="border-b h-14 flex p-2">
                <div className={`flex items-center w-full py-2 gap-2 border-2 rounded-md ${isExpanded ? "px-1" : "justify-center"}`}>
                    <Image src={Logo} alt="Keepify" height={40} width={30} />
                    <span className={`${isExpanded ? 'block' : 'hidden'} text-xl font-extrabold`}>Vasitum</span>
                </div>
            </div>
            <nav className="flex flex-col gap-2 p-2">
                {/* Navigation Links */}
                <TooltipProvider>
                    {NavLinks.map((link) => {
                        return (
                            <Tooltip key={link.id}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-accent hover:text-foreground 
                      ${link.id === 1 ? 'text-[#FF5151]' : 'text-muted-foreground'}`}
                                    >
                                        <link.icon className="h-6 w-6" />
                                        <span className={`${isExpanded ? 'block' : 'hidden'} font-medium`}>{link.title}</span>
                                    </Link>
                                </TooltipTrigger>
                                {!isExpanded && <TooltipContent side="right">{link.title}</TooltipContent>}
                            </Tooltip>
                        )
                    })}
                </TooltipProvider>

                {/* Toggle Button */}
                <div className="mt-auto absolute flex justify-center bottom-28 -right-[19px]">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center p-1 rounded-md bg-card border transition-transform hover:bg-card"
                    >
                        {isExpanded ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
                    </button>
                </div>
            </nav>
        </aside>
    )
}