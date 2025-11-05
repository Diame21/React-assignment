import React from 'react'
import Card from './card'

const Body = () => {
    return (
        <div className='border-b-8 border-purple-200'>
            <div className=' text-center flex flex-col items-center justify-center h-screen '>
                <h1 className='text-white text-5xl font-bol d text-[40px] md:text-[60px] lg:text-[80px]'>Become a React Dev</h1>
                <p className='text-white text-xl mt-1 font-light'>Find the React job that fits your skill set</p>
            </div>

            <div className='flex flex-col lg:flex-row md:flex-row gap-6 p-10 justify-center border-b-8 bg-white mt-7'>
                <div className='border border-black rounded-lg p-6 mt-1'>
                    <Card title={'For Developers'} subtitle={'Browse our React jobs and start your career today'} />
                </div>
                <div className='border border-black rounded-lg p-6 bg-purple-200 mt-1'>
                    <Card title={'For Employers'} subtitle={'Browse our React jobs and start your career today'} />
                </div>
            </div>
        </div>
    )
}

export default Body