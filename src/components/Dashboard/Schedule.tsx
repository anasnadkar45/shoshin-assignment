'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { UpcomingScheduleData } from '../../data/data' // Import the schedule data

export default function Schedule() {
    const [filter, setFilter] = useState('')

    // Filter the schedule data based on the input value
    const filteredSchedule = UpcomingScheduleData.filter(schedule =>
        schedule.title.toLowerCase().includes(filter.toLowerCase()) ||
        schedule.time.toLowerCase().includes(filter.toLowerCase())
    )

    // Separate the filtered schedules into two groups: priority and non-priority
    const prioritySchedules = filteredSchedule.filter(schedule => schedule.priority)
    const nonPrioritySchedules = filteredSchedule.filter(schedule => !schedule.priority)

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-col space-y-1.5 pb-4">
                <div className='flex justify-between'>
                    <CardTitle className="text-lg font-semibold">Upcoming Schedule</CardTitle>
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
                    {/* Section for Priority Schedules */}
                    <div>
                        <h5 className="font-semibold mb-3">Priority</h5>
                        {prioritySchedules.length > 0 ? (
                            prioritySchedules.map((schedule, index) => (
                                <div key={index} className="mb-4 last:mb-0 border p-3 rounded-lg pb-4 last:border-b-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-red-500">{schedule.title}</p>
                                        <div className="flex items-center space-x-2">
                                            <div className="h-2 w-2 rounded-full bg-red-500" />
                                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">{schedule.time}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground">No priority schedules.</p>
                        )}
                    </div>

                    {/* Section for Non-Priority Schedules */}
                    <div className="mt-6">
                        <h5 className="font-semibold mb-3">Non-Priority</h5>
                        {nonPrioritySchedules.length > 0 ? (
                            nonPrioritySchedules.map((schedule, index) => (
                                <div key={index} className="mb-4 last:mb-0 border p-3 rounded-lg pb-4 last:border-b-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium">{schedule.title}</p>
                                        <div className="flex items-center space-x-2">
                                            <div className="h-2 w-2 rounded-full bg-gray-300" />
                                            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">{schedule.time}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground">No non-priority schedules.</p>
                        )}
                    </div>
                </ScrollArea>
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm font-medium text-red-500 hover:underline">
                        See All Schedule
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}
