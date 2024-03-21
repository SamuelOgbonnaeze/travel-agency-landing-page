import React from 'react'

const Rooms = () => {
    return (
        <div className="mb-10">
            <div className='h-[700px] sm:h-[850px] md:h-[1050px] lg:h-[950px]'>
                <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md: mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
                    <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
                        <h3 className='text-2xl lg:text-3xl font-bold'>Fine Interior Rooms</h3>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet convallis justo duis ac</p>
                    </div>
                    <div className='grid grid-cols-2 col-span-2 gap-2'>
                        <img className='object-cover w-full h-full'
                            src='https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                            alt='/'
                        />
                        <img className='row-span-2 object-cover w-full h-full'
                            src='https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                            alt='/'
                        />
                        <img className='object-cover w-full h-full'
                            src='https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                            alt='/'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
