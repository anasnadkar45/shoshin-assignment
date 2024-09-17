'use client'
import { useState } from 'react';
import { Bell, ChevronDown, MessageSquare, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../theme/ModeToggle";
import { NavLinks } from './Sidebar';
import Image from 'next/image';
import Logo from '../../app/public/icons/Group 2770.svg'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 py-2.5 bg-card border-b">
            {/* Logo*/}
            <div className='sm:hidden flex items-center w-full gap-2 rounded-md'>
                <Image src={Logo} alt="Keepify" height={40} width={30} />
                <span className='text-xl font-extrabold'>Vasitum</span>
            </div>

            {/* Search bar, only visible on large screens */}
            <div className="hidden sm:block flex-1">
                <div className="relative w-[350px]">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        type="search"
                        placeholder="Search"
                        className="pl-8 bg-muted/80 border-none"
                    />
                </div>
            </div>

            {/* Icons for notifications and messages */}
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
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
                    <p className="font-medium hidden md:block">Admirra John</p>
                    <ChevronDown className="h-4 w-4 text-gray-500 hidden lg:block" />
                    <ModeToggle />
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-14 left-0 w-full bg-card p-4 shadow-md lg:hidden">
                    <div className="flex flex-col space-y-2">
                        {NavLinks.map(link => (
                            <a key={link.id} href={link.href} className="flex items-center space-x-2 text-gray-700 hover:bg-muted p-2 rounded-md">
                                <link.icon className="h-5 w-5" />
                                <span>{link.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
