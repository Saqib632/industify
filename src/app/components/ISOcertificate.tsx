import React from 'react'
import Image from "next/image";

const Last = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-30 px-4 sm:px-6 mt-10 sm:mt-7 py-8 sm:py-10 bg-white">
      {/* Left Side */}
      <div className="flex-1 max-w-full sm:max-w-md sm:mt-15">
        <h2 className="text-3xl sm:text-5xl font-light leading-snug sm:leading-tight mb-4">
          Why choose <br className="hidden sm:block" /> our services?
        </h2>
        <div className="w-10 sm:w-12 h-1 bg-orange-600 mb-4 sm:mb-6"></div>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.
        </p>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.
        </p>
        <div className="border flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 w-[200px] sm:w-[220px] rounded bg-gray-50">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#eee"/>
            <path d="M7 8h10M7 12h10M7 16h6" stroke="#ff6600" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-gray-700 text-sm sm:text-base">We have a<br />ISO Certificate.</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 max-w-full sm:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Top Card */}
        <div className="p-6 sm:p-13 pb-0">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-0 border-4 sm:border-8 border-orange-600 overflow-hidden" style={{ height: 'auto', minHeight: '250px' }}>
            <div className="flex-1 p-4 flex flex-col gap-6 sm:gap-20 justify-center text-center sm:text-left">
              <div className="text-sm sm:text-[15px] font-medium">
                World's Leading<br className="hidden sm:block" />Industry <br className="hidden sm:block" />Corporation
              </div>
              <div className="flex items-center sm:items-end justify-center sm:justify-start gap-2">
                <span className="text-4xl sm:text-5xl font-light">47</span>
                <span className="text-[10px] sm:text-xs font-bold text-orange-600 mb-0 sm:mb-2 text-center sm:text-left">
                  YEARS OF<br />EXPERIENCE
                </span>
              </div>
            </div>
            <div className="relative w-40 h-40 sm:w-60 sm:h-60 flex-shrink-0">
              <Image
                src="/image10.jpg"
                alt="Businessman"
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-0 right-2 bg-[#30629a] text-white px-2 sm:px-3 py-2 sm:py-4 flex flex-col items-center shadow-lg text-xs sm:text-base">
                <span className="mb-1 sm:mb-1.5">★★★</span>
                <span className="text-sm sm:text-lg font-bold">9.7</span>
                <span className="text-[8px] sm:text-[10px] text-center">CUSTOMER<br />RATING</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Card */}
        <div className="border-t mt-4 sm:mt-6 p-6 sm:p-13">
          <ul className="space-y-3 sm:space-y-4">
            {[
              "Best talent in the industry business.",
              "One of the most expirienced company.",
              "We have completed over 3000 projects.",
              "Most dedicated and passionate team.",
              "Company has over 2000 workers."
            ].map((text, idx) => (
              <li key={idx} className="flex items-start sm:items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-800">
                <span className="border-2 border-orange-600 rounded w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                  <svg width="14" height="14" fill="none" viewBox="0 0 20 20">
                    <path d="M5 10l3 3 7-7" stroke="#ff6600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Last
