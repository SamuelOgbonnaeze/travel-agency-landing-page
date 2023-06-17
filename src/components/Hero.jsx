import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen '>
            <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/' />
            <div className='bg-black/30  absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 '>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In sit amet convallis justo.
                        Duis ac enim et est finibus aliquam.
                    </p>
                    <button className='bg-white text-black cursor-pointer'>Reserve now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero