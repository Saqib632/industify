import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Latest = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      {/* Left sticky section */}
      <div className='w-full md:w-[830px] bg-white md:sticky md:top-0 self-start p-6 md:p-0'>
        <p className="text-4xl sm:text-5xl md:text-6xl mt-10 md:mt-20 md:ml-12 font-normal leading-tight">
          Our latest<br />projects.
        </p>
        <hr className="border-t-4 border-[#d24e1a] w-[80px] sm:w-[98px] mt-5 md:mt-7 md:ml-12" />

        <p className='text-[#7b7b7b] mt-6 md:ml-12 text-sm sm:text-base leading-relaxed'>
          At Industify Company, we rely on honesty, discipline and hard work
          and believe our success can be attributed to upholding a simple set
          of core values that date back to the beginning of the company.
        </p>
        <p className='text-[#7b7b7b] mt-6 md:ml-12 text-sm sm:text-base leading-relaxed'>
          Industify is an integrated design-build firm offering engineering,
          architecture and construction services to domestic and international
          customers throughout the U.S. Unique to Industify is the fact that we
          conduct all disciplines in-house in a collaborative environment.
        </p>
        <button className='h-[45px] sm:h-[50px] w-[160px] sm:w-[180px] text-white bg-[#d24e1a] font-medium text-xs sm:text-[15px] tracking-wider uppercase mt-6 md:ml-12 hover:bg-[#45a2df] cursor-pointer duration-300'>
          VIEW ALL PROJECTS
        </button>
        <div className='h-6 md:h-16'></div>
      </div>

      {/* Right section */}
      <div className='w-full bg-[#111724] flex flex-col p-4 sm:p-6 gap-10'>
        
        {[
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className='flex flex-col sm:flex-row bg-[#181e2b] overflow-hidden'
          >
            <div className='h-[220px] sm:h-[350px] w-full sm:w-[390px]'>
              <img
                src={src}
                alt="Industify project"
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col p-4 sm:p-6 w-full sm:w-[300px]'>
              <div className='mb-4'>
                <h1 className='text-white text-xl sm:text-2xl font-medium'>
                  Industify Gas and Oil Organization
                </h1>
                <p className='text-[#7d7e82] mt-4 sm:mt-8 text-xs sm:text-sm leading-relaxed'>
                  We go beyond testing, inspecting and certifying products; we
                  are a Total Quality Assurance provider to industries
                  worldwide....
                </p>
              </div>
              <div className='mt-auto'>
                <hr className='border-[#464b55] my-3' />
                <div className='flex items-center'>
                  <span className='text-white text-base sm:text-lg ml-1'>
                    More Details
                  </span>
                  <IoIosArrowRoundForward className='text-white text-2xl sm:text-3xl ml-1' />
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Latest
