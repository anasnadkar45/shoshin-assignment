import { RecentActivity } from '@/data/data'
import React from 'react'
import { Button } from '../ui/button'

const Activity = () => {

    return (
        <div className='bg-[#18215d] rounded-xl text-white'>
            <div className='p-4 rounded-t-xl bg-[#191d43]'>
                <h5>Recent Activity</h5>
            </div>
            <div className='p-4'>
                <div>
                    <p className='text-xs text-slate-400'>{RecentActivity.timestamp}</p>
                    <h5 className='font-bold'>{RecentActivity.title}</h5>
                    <p className='text-sm text-slate-400'>{RecentActivity.description}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <h6>Today you makes {RecentActivity.totalActivities} Activity</h6>
                    <Button className='bg-[#FF5151] hover:bg-[#ff6a6a]'>See All Activity</Button>
                </div>
            </div>
        </div>
    )
}

export default Activity