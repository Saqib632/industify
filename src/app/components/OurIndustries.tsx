'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const industries = [
  {
    title: 'Construction & Engineering',
    image: '/image6.jpg',
  },
  {
    title: 'Textiles & Apparel',
    image: '/image7.jpg',
  },
  {
    title: 'Housewares & Home Decor',
    image: '/image8.jpg',
  },
  {
    title: 'Medical Devices',
    image: '/image5.jpg',
  },
  {
    title: 'Oil and Gas Industry',
    image: '/image4.jpg',
  },
  {
    title: 'Oil and Gas Industry',
    image: '/image9.jpg',
  },
]

export default function IndustriesSection() {
  const [startIdx, setStartIdx] = useState(0);

  // Responsive visibleCount: 1 for mobile, 4 for md and up
  const [visibleCount, setVisibleCount] = useState(4);

  // Update visibleCount on resize
  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth < 768 ? 1 : 4);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = industries.length;

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  const getVisible = () => {
    let arr = [];
    for (let i = 0; i < visibleCount; i++) {
      arr.push(industries[(startIdx + i) % total]);
    }
    return arr;
  };

  return (
    <section className="bg-[#0d1724] text-white pt-12 w-full">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Heading */}
        <div className="flex items-center justify-between w-full">
          <div className='flex items-center justify-center gap-8'>
            <h2 className="text-3xl font-semibold">Our Industries</h2>
            <p className="text-gray-300 mt-1">
              The automotive industry is the technological trendsetter among manufacturing industries.
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button
            className="bg-orange-600 p-2 rounded hover:bg-orange-700"
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className="bg-orange-600 p-2 rounded hover:bg-orange-700"
            onClick={handleNext}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="overflow-hidden mt-8 w-full">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(0)`,
            transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {getVisible().map((item, index) => (
            <div
              key={startIdx + '-' + index}
              className="relative group overflow-hidden shadow-lg min-w-0"
              style={{
                flex: visibleCount === 1 ? '0 0 100%' : '0 0 25%',
                maxWidth: visibleCount === 1 ? '100%' : '25%',
              }}
            >
              <div className='w-full h-full relative'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  unoptimized
                  className="w-full h-72 md:h-[75vh] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay color */}
                <div className="absolute inset-0 left-0 bg-transparent duration-500 ease-linear group-hover:translate-x-0 group-hover:bg-black/40 -translate-x-full"></div>
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-12">
                  <h3 className="text-4xl ">{item.title}</h3>
                  <button className="border border-white rounded-full py-2 text-sm hover:bg-white hover:text-black transition w-[140px] text-center">
                    VIEW MORE →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
