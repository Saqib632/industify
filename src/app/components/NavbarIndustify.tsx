import React from 'react'

const NavbarIndustify = () => {
  return (
    <div className="bg-black w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 gap-4 sm:gap-6 md:gap-40">
      
      {/* Text Section */}
      <div className="text-center md:text-left max-w-[800px]">
        <h1 className="text-white text-base sm:text-xl md:text-3xl">
          We will Make Your Dream Come True
        </h1>
        <h3 className="text-gray-500 text-sm sm:text-lg md:text-lg pt-2">
          We are focused on sustainable business that delivers the best possible project results.
        </h3>
      </div>
      
      {/* Button Section */}
      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <button className="cursor-pointer text-black h-[40px] sm:h-[50px] w-full sm:w-[160px] md:w-[200px] rounded bg-white 
          hover:bg-orange-600 hover:text-white duration-500 ease-in-out">
          OUR RESPONSIBILITY
        </button>
      </div>
    </div>
  )
}

export default NavbarIndustify
