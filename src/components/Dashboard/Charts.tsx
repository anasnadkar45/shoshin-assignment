"use client"
import Image from 'next/image';
import React from 'react'
import Chart1 from '../../app/public/Group 4.svg'
import Chart2 from '../../app/public/Group 5.svg'
import { useTheme } from 'next-themes';

interface chartsDataProps {
    data: {
        title: string,
        total: number,
        change: string,
        men: number,
        women: number,
    }
    style?: React.CSSProperties;
}

const Charts = ({ data }: chartsDataProps) => {
    const { theme } = useTheme()
    return (
        <>
            {theme === 'dark'  ? (
                <div className='border-2 rounded-xl p-4 grid grid-cols-2 gap-2 bg-muted'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h5 className='font-mediu'>{data.title}</h5>
                            <h2 className='font-bold'>{data.total}</h2>
                        </div>
                        <div>
                            <p className='text-slate-400 text-xs'>{data.men} Men</p>
                            <p className='text-slate-400 text-xs'>{data.women} Women</p>
                        </div>
                    </div>

                    <div>
                        <Image src={Chart2} alt={data.title} height={50} width={180} />
                        <p className='text-black bg-[#fedfce] hover:bg-[#FFEFE7] transition-all duration-500 cursor-pointer p-2 rounded-md'>
                            {data.change} Past month
                        </p>
                    </div>
                </div>
            ) : (
                <div className='border-2 rounded-xl p-4 grid grid-cols-2 gap-2'>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h5 className='font-medium text-black'>{data.title}</h5>
                            <h2 className='font-bold text-black'>{data.total}</h2>
                        </div >
                        <div>
                            <p className='text-slate-400'>{data.men} Men</p>
                            <p className='text-slate-400'>{data.women} Women</p>
                        </div>
                    </div >

                    <div>
                        <Image src={Chart1} alt={data.title} height={50} width={180} />
                        <p className='text-black bg-[#fedfce] hover:bg-[#FFEFE7] transition-all duration-500 cursor-pointer p-2 rounded-md'>
                            {data.change} Past month
                        </p>
                    </div>
                </div >
            )}
        </>

    )
}

export default Charts