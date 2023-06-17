import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx"

const Rooms = () => {
    const slides = [
        {
            url: "https://images.pexels.com/photos/4344431/pexels-photo-4344431.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lobster",
        },
        {
            url: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Sushi",
        },
        {
            url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Pasta",
        },
        {
            url: "https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Salmon",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=' max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500' />
            {/* Left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 
            hover:bg-black/20 text-white cursor-pointer'>
                <BiLeftArrow size={30} onClick={prevSlide} />
            </div>
            {/* Right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 
            hover:bg-black/20 text-white cursor-pointer'>
                <BiRightArrow size={30} onClick={nextSlide} />
            </div>
            {/* Slides mapping to create dots underneath */}
            <div className='flex justify-center top-4 py-2'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Rooms