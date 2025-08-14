import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/bg.jpg')] bg-center bg-cover flex items-center justify-center px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content Box */}
      <div className="relative z-10 border-4 border-[#3f4048] bg-black/40 p-6 sm:p-10 rounded-md 
                      w-full max-w-[1160px]">
        <div className="text-center sm:text-left">
          <h1 className="text-[#cbccce] text-sm sm:text-base md:text-lg leading-relaxed">
            Hiday Motors needed to build a brand new 28,000 sf facility that would both meet our needs and comply 
            with GM’s standards – which seemed daunting, to say the least. Industify alleviated all of our concerns 
            and communicated with us every step of the way. We have received dozens of compliments from our customers, 
            and our employees love the new store!
          </h1>
          <h1 className="text-white pt-4 text-sm sm:text-base md:text-lg font-semibold">
            Steve Lehman
          </h1>
          <h2 className="text-orange-600 text-sm sm:text-base md:text-lg">
            CEO of Hiday Motors.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
