'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const images = ['/image3.jpg', '/image4.jpg', '/image2.jpg', '/image1.jpg']

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative w-full h-[900px] sm:h-[340px] md:h-[500px] lg:h-[710px] overflow-hidden">
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}vw`,
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-screen h-[900px] sm:h-[340px] md:h-[500px] lg:h-[710px]"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Text Overlay */}
            <div className="sm:absolute sm:top-85 sm:right-0 sm:h-120 sm:w-120 sm:p-10 flex flex-col justify-center gap-[20px] sm:-translate-y-1/2 z-20 sm:bg-black/80">
              {index === 0 && (
                <>
                 

                  {/* Desktop text */}
                  <div className="text-white hidden sm:block">
                    CONSTRUCTION
                  </div>
                   {/* Mobile h1 bottom-right */}
                  <h1 className="text-[20px] text-white absolute bottom-4 right-4 sm:static sm:text-[30px]">
                    New Construction
                  </h1>
                  <p className="text-[#AAAAAA] hidden sm:block">
                    Industify was the first company to develop methods and equipment for the successful deep compaction of soil in the 1930s
                  </p>
                </>
              )}

              {index === 1 && (
                <>
                  
                  <div className="text-white hidden sm:block">
                    TECHNOLOGY
                  </div>
                  <h1 className="text-[20px] text-white absolute bottom-4 right-4 sm:static sm:text-[30px]">
                    Leed & Green Building
                  </h1>
                  <p className="text-[#AAAAAA] hidden sm:block">
                    Here at Industify, we take the same approach to green building that we take to every other aspect of our business.
                  </p>
                </>
              )}

              {index === 2 && (
                <>
                  
                  <div className="text-white hidden sm:block">
                    MODERN
                  </div>
                  <h1 className="text-[20px] text-white absolute bottom-4 right-4 sm:static sm:text-[30px]">
                    Small Projects & Maintenance
                  </h1>
                  <p className="text-[#AAAAAA] hidden sm:block">
                    In addition to our large, ground up projects, we accommodate small to modest sized projects for our customers.
                  </p>
                </>
              )}

              {index === 3 && (
                <>
                  
                  <div className="text-white hidden sm:block">
                    INDUSTRY
                  </div>
                  <h1 className="text-[20px] text-white absolute bottom-4 sm:bottom-10 right-4 sm:static sm:text-[30px]">
                    Energy & Commodities
                  </h1>
                  <p className="text-[#AAAAAA] hidden sm:block">
                    Achieving this successfully calls for a vision of what can be and a distinct ability to identify opportunities for salvaging elements.
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-27 right-94  flex gap-1">
        <button
          onClick={prevSlide}
          className="bg-[#2e649b] text-white p-2 sm:p-5 transition-colors"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#2e649b] text-white p-2 sm:p-5 transition-colors"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Hero
