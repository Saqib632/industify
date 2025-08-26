'use client'
import React from 'react'
import Nav from '@/app/components/Navbar'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
  const industries = [
    { image: "/1.jpg", title: "Industify Gas and Oil Organization" },
    { image: "/2.jpg", title: "Chaban Car Industry" },
    { image: "/3.jpg", title: "Odeon Industrial Machinery" },
    { image: "/4.jpg", title: "Meliá Hotel La Défense" },
    { image: "/bg.jpg", title: "Arturo-Merino-Benítez" },
    { image: "/fan.jpg", title: "Femern Tunnel, Germany-Denmark" },
  ]
  const router = useRouter();

  return (
    <div> 
      {/* Navbar */}
      <div className='mb-6 md:mb-25'>
        <Nav bgWhite />
      </div>

      {/* Page Title & Breadcrumb */}
      <div className='mx-4 md:ml-50 mt-30 md:mt-50 mb-6 md:mb-10 md:flex flex-col'>
        <div className='text-3xl md:text-[50px] text-black font-normal'>
          Projects
        </div>

        <div className='flex mt-3'>
          <div
            className='flex items-center text-[#666666] cursor-pointer'
            onClick={() => router.push('/')}
          >
            Home
            <div className='ml-2 md:ml-3 text-[#DDDDDD]'>
              <IoIosArrowForward />
            </div>
          </div>
          <div className='ml-2 md:ml-3 text-[#666666] font-normal'>Projects</div>
        </div>

        {/* Two bars */}
        <div className="mt-4 md:mt-5 space-y-2">
          {/* Top bar */}
          <div className="h-2 w-[100px] md:w-[150px] bg-[#EEEEEE] rounded"></div>

          {/* Bottom bar */}
          <div className="h-2 w-[60px] md:w-[80px] bg-[#EEEEEE] rounded"></div>
        </div>

        <div className="mt-8 flex">
          <button
            className="relative flex items-center justify-between w-[260px] h-[50px] px-6 py-2 rounded-lg bg-[#d24f1b] font-bold text-white text-lg tracking-wide uppercase"
            style={{
              fontFamily: 'serif',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            <span className="z-10">ALL PROJECTS</span>
            <span className="absolute right-6 z-10">
              <IoIosArrowDown size={20} />
            </span>
            <span
              className="absolute right-0 top-0 h-full w-[60px] rounded-lg"
              style={{
                background: 'linear-gradient(120deg, transparent 60%, #e06c3c 100%)',
                pointerEvents: 'none',
              }}
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 px-6 md:px-40 mb-16">
        {industries.map((item, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg w-[90%] mx-auto"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
              <h2 className="text-white text-lg md:text-xl font-medium">
                {item.title}
              </h2>
              <button className="mt-2 text-white font-semibold flex items-center">
                View More <IoIosArrowForward className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page