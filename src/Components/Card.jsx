import React from 'react'

const Card = ({title, subtitle}) => {
    return (
        <>
            <div>
                <p className='font-bold text-5xl'>{title}</p>
                <p className='font-light italic'>{subtitle}</p>
            </div>
        </>
    )
}

export default Card