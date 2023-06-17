import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* left side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
                <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1605025207886-6a39aa638467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
                <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
                <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
                <img className='row-span-2 object-cover w-full h-full p-2' src='https://images.unsplash.com/photo-1597634285596-01fd1bffe116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='/' />
            </div>
            {/* right side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit in sit?</p>
                <p className='pb-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet convallis justo.
                    Duis ac enim et est finibus aliquam. Quisque sit amet sapien magna
                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl cursor-pointer'>Learn More</button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan