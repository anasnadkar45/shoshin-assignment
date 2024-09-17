import React from 'react'

interface matricsDataProps {
    data: {
        title: string,
        total: number,
        action: string
    }
    style?: React.CSSProperties;
}
const Matrics = ({ data , style}: matricsDataProps,) => {
    
    return (
        <div style={style} className='rounded-xl p-4'>
            <h5 className='font-medium text-black'>{data.title}</h5>
            <h2 className='font-bold text-black'>{data.total}</h2>
            <p>{data.action}</p>
        </div>
    )
}

export default Matrics