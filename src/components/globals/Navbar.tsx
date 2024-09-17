import { Bell, ChevronDown, MessageSquare, Search, User } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "../theme/ModeToggle"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-4 py-2.5 bg-card border-b">
            <div className="flex-1 max-w-md">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        type="search"
                        placeholder="Search"
                        className="pl-8 bg-muted/80 border-none"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                </Button>
                <div className="flex items-center space-x-2">
                    <div className="bg-[#FF5151] p-1 rounded-full">
                        <User />
                    </div>
                    <span className="font-medium">Admirra John</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}