import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";

const Top = () => {
  return (
    <div className='bg-black h-9 flex items-center  px-4 sm:px-0'>
      <div className='flex items-center'>
        <div className='text-white text-xs sm:text-[14px] ml-2 sm:ml-16 border-r-2 border-gray-500 pr-2 sm:pr-5 font-["Quicksand"]'>
          (0778) 774 - 474 -1
        </div>
        <div className='text-white text-xs sm:text-[14px] ml-2 sm:ml-5 border-r-2 border-gray-500 pr-2 sm:pr-5 font-["Quicksand"]'>
          frenifyteam@gmail.com
        </div>
      </div>
      
      <div className='text-white text-xs sm:text-[14px] flex gap-2 sm:gap-3 ml-3'>
        <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
        <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
        <AiFillInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
        <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4" />
      </div>
    </div>
  )
}

export default Top