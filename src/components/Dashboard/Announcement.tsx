'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { title } from 'process'
import { AnnouncementsData } from '@/data/data'


export default function Announcement() {
    const [filter, setFilter] = useState('')

    const filteredAnnouncements = AnnouncementsData.filter(announcement =>
        announcement.title.toLowerCase().includes(filter.toLowerCase()) ||
        announcement.time.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <div className='flex justify-between'>
                    <CardTitle className="text-lg font-semibold">Announcement</CardTitle>
                    <div className="flex items-center justify-between border p-2 rounded-lg">
                        <div className="flex items-center text-sm text-muted-foreground">
                            Today, 13 Sep 2021
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </div>
                    </div>
                </div>
                <Input
                    type="text"
                    placeholder="Filter by title or time..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mt-2"
                />
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                    {filteredAnnouncements.map((announcement, index) => (
                        <div key={index} className="mb-4 last:mb-0 border p-3 rounded-lg pb-4 last:border-b-0">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">{announcement.title}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="h-2 w-2 rounded-full bg-gray-300" />
                                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{announcement.time}</p>
                        </div>
                    ))}
                </ScrollArea>
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm font-medium text-red-500 hover:underline">
                        See All Announcement
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}