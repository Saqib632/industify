import React from 'react';
import { FaHeadset } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { FaFilePdf } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaFileZipper } from "react-icons/fa6";
import { BsFiletypeDocx } from "react-icons/bs";
const Page = () => {
  return (
    <div>
      {/* Top Header Section */}
      <div className="bg-black w-full min-h-[180px] py-5">
        
        {/* Navigation Menu */}
        <div>
          <ul className="text-white flex flex-wrap justify-center md:justify-start md:pl-[350px] text-xs sm:text-sm gap-3 sm:gap-5 font-semibold py-5 cursor-pointer">
            <li>HOME</li>
            <li>PROJECTS</li>
            <li>OUR SERVICES</li>
            <li>PAGES</li>
            <li>BLOG</li>
          </ul>
        </div>
        
        {/* Logo & Right Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo */}
          <div className="cursor-pointer px-4 md:px-12">
            <img src="/logo-light.png" alt="logo" className="h-10 sm:h-12 md:h-auto" />
          </div>
          
          {/* Dropdown + Call Info */}
          <div className="dropdown flex items-center gap-4">
            {/* Language Selector */}
            <div className="bg-black py-2 md:py-4">
              <select className="bg-black font-semibold text-xs sm:text-sm cursor-pointer text-white">
                <option value="ENG">ENG</option>
                <option value="Spa">Spa</option>
                <option value="Rus">Rus</option>
              </select>
            </div>
            
            {/* Call Box (Hidden on small devices) */}
            <div className="hidden xl:flex items-center cursor-pointer">
              <div className="w-0 h-0 border-r-[25px] border-r-[#2e649b] border-t-[75px] border-t-transparent"></div>
              <div className="h-[74px] w-86 bg-[#2e649b] flex items-center px-4">
                <div className="bg-white rounded-full p-2 ml-3">
                  <FaHeadset className="text-[#2e649b] text-lg" />
                </div>
                <div className="text-white flex ml-3">
                  <div className="text-[16px] xl:text-[20px] italic">Toll Free:</div>
                  <div className="text-[16px] xl:text-[20px] italic ml-2">1-800-987-6543</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Text */}
        <div className="mt-4 text-center md:text-left md:px-[345px]">
          <h1 className="text-white font-semibold text-xs sm:text-sm">CONTACT</h1>
        </div>
      </div>

      {/* Breadcrumb + Heading */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 ml-7">
        <h1 className="text-3xl md:text-4xl font-normal mb-2">News & Articles</h1>
        <div className="flex items-center text-sm md:text-base text-gray-600">
          <span className="hover:text-[#d24e1a] cursor-pointer">Home</span>
          <span className="mx-2">
            <MdKeyboardArrowRight className='text-2xl text-[#dddddd]'/>
          </span>
          <span className="text-gray-400">Blog</span>
        </div>
        <div className="space-y-1.5 mt-7">
          <div className="w-38 h-1.5 bg-[#eeeeee] rounded"></div>
          <div className="w-20 h-1.5 bg-[#eeeeee] rounded"></div>
        </div>
      </div>

      {/* First Content Section */}
      <div className="outer-section flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Section */}
        <div className="left-section flex flex-col md:w-2/3 ml-4 md:ml-8 mb-12">
          <div className="relative">
            <Image
              src="/smoke.jpg"
              alt="Smoke image"
              height={1000}
              width={1000}
              className="object-cover w-full rounded-t-lg"
            />

            {/* Date box */}
            <div
              className="absolute top-0 left-0 bg-[#d24e1a] text-white w-14 sm:w-16 md:w-20 flex flex-col items-center justify-center"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
                padding: "10px 8px 16px 8px",
              }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-medium">28</div>
              <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-[#ffc600] my-1"></div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">AUG</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">2021</div>
              <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
            </div>
          </div>

          {/* Card Content */}
          <div className="bg-white shadow-lg rounded-b-lg p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-3">
              By{" "}
              <span className="text-[#d24e1a] font-medium cursor-pointer hover:underline">
                Frenify
              </span>{" "}
              — In Australia
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#14141c] mb-4 leading-snug">
              Laing O'Rourke: Moves, projects and bids
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Seymour Whyte employs 475 people and generated revenue of A$433 million
              in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour
              Whyte is a well-known Australian company operating in the fields of
              civil engineering. Acquisition of 100% of Seymour Whyte's shares 2017
            </p>

            <button className="px-4 py-2 bg-[#081225] text-white rounded hover:bg-[#d24e1a] duration-300 cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section md:w-1/3 flex flex-col self-stretch">
          <div>
            <Image
              src="/plumber.jpg"
              alt="plumber image"
              height={800}
              width={500}
              className="object-cover w-full rounded-t-lg"
            />
          </div>
          <div className="bg-[#d24e1a] text-white p-8 md:p-10 flex flex-col justify-center items-center rounded-b-lg shadow-lg h-full">
            <h1 className="text-xl md:text-2xl font-semibold leading-snug mb-8 text-center">
              Let's get started!<br />
              Contact us for a free<br />
              quote on your next<br />
              home improvement project.
            </h1>
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              REQUEST AN ESTIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="outer-section flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Section */}
        <div className="left-section flex flex-col md:w-2/3 ml-4 md:ml-8 mb-12">
          <div className="relative">
            <Image
              src="/fan.jpg"
              alt="Fan image"
              height={1000}
              width={1000}
              className="object-cover w-full rounded-t-lg"
            />

            {/* Date box */}
            <div
              className="absolute top-0 left-0 bg-[#d24e1a] text-white w-14 sm:w-16 md:w-20 flex flex-col items-center justify-center"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
                padding: "10px 8px 16px 8px",
              }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-medium">27</div>
              <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-[#ffc600] my-1"></div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">AUG</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">2021</div>
              <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
            </div>
          </div>

          {/* Card Content */}
          <div className="bg-white shadow-lg rounded-b-lg p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-3">
              By{" "}
              <span className="text-[#d24e1a] font-medium cursor-pointer hover:underline">
                Frenify
              </span>{" "}
              — In Discussion
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#14141c] mb-4 leading-snug">
              How to turn Victorian gasholders apartments
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte's shares 2017
            </p>

            <button className="px-4 py-2 bg-[#081225] text-white rounded hover:bg-[#d24e1a] duration-300 cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section - Company Presentation (Updated to match image) */}
       {/* Right Section - Company Presentation */}
<div className="right-section md:w-1/3 flex flex-col self-start ml-4 md:ml-0 mt-8" >
  <div className="bg-white p-6 w-full ">
    {/* Title */}
    <h3 className="text-[17px] font-semibold text-[#333] mb-2">Company Presentation</h3>
     <div className="w-10 sm:w-8 md:w-15  bg-[#ffc600] "> <hr /></div>
    {/* Download Links */}
    <div className="space-y-1">
      {/* PDF Link */}
      <div className="flex items-center justify-between p-2 bg-[#111422] mt-1 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-black rounded-full text-white">
            <span className="font-medium"><FaFilePdf /></span>
          </div>
          <span className="text-[14px] text-gray-300 hover:text-white ml-5">Download .PDF</span>
        </div>
        <FaCaretRight className="text-gray-400 text-md" />
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-100 my-1"></div>
      
      {/* ZIP Link */}
      <div className="flex items-center justify-between p-2 bg-[#111422] cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-[#242633] rounded-full">
            <span className="font-medium text-white"><FaFileZipper /> </span>
          </div>
          <span className="text-[14px] text-gray-300 hover:text-white ml-5">Download .ZIP</span>
        </div>
        <FaCaretRight className="text-gray-400 text-md" />
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-100 my-1"></div>
      
      {/* DOC Link */}
      <div className="flex items-center justify-between p-2 bg-[#242633] r cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="bg-[#242633] text-white">
            <span className="font-medium"><BsFiletypeDocx /></span>
          </div>
          <span className="text-[14px] text-gray-300 hover:text-white ml-5">Download .DOC</span>
        </div>
        <FaCaretRight className="text-gray-400 text-mc" />
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Third Content Section */}
      <div className="outer-section flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Left Section */}
        <div className="left-section flex flex-col md:w-2/3 ml-4 md:ml-8 mb-12">
          <div className="relative">
            <Image
              src="/machine.jpg"
              alt="Machine image"
              height={1000}
              width={1000}
              className="object-cover w-full rounded-t-lg"
            />

            {/* Date box */}
            <div
              className="absolute top-0 left-0 bg-[#d24e1a] text-white w-14 sm:w-16 md:w-20 flex flex-col items-center justify-center"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
                padding: "10px 8px 16px 8px",
              }}
            >
              <div className="text-lg sm:text-xl md:text-3xl font-medium">25</div>
              <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-[#ffc600] my-1"></div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">AUG</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">2021</div>
              <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
            </div>
          </div>

          {/* Card Content */}
          <div className="bg-white shadow-lg rounded-b-lg p-6 md:p-8">
            <div className="text-sm text-gray-500 mb-3">
              By{" "}
              <span className="text-[#d24e1a] font-medium cursor-pointer hover:underline">
                Frenify
              </span>{" "}
              — In Industry
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#14141c] mb-4 leading-snug">
              CITB appoints Peter Lauener as new chairman
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Seymour Whyte employs 475 people and generated revenue of A$433 million in the fiscal year ended on 30 June 2017. Founded in 1987, Seymour Whyte is a well-known Australian company operating in the fields of civil engineering. Acquisition of 100% of Seymour Whyte's shares 2017
            </p>

            <button className="px-4 py-2 bg-[#081225] text-white rounded hover:bg-[#d24e1a] duration-300 cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      </div>
       {/* New Content Section Matching Reference Image */}
<div className="outer-section flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8">
  {/* Left Section */}
  <div className="left-section flex flex-col md:w-2/3 ml-4 md:ml-8 mb-12">
    <div className="relative bg-white shadow-lg rounded-b-lg p-6 md:p-8">

      {/* Orange Date box */}
      <div
        className="absolute top-0 left-0 bg-[#d24e1a] text-white w-14 sm:w-16 md:w-20 flex flex-col items-center justify-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
          padding: "10px 8px 16px 8px",
        }}
      >
        <div className="text-lg sm:text-xl md:text-3xl font-medium">25</div>
        <div className="w-6 sm:w-8 md:w-10 h-0.5 bg-[#ffc600] my-1"></div>
        <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">AUG</div>
        <div className="text-[9px] sm:text-[10px] md:text-xs font-medium">2021</div>
        <div className="w-full h-0.5 bg-gray-300 mt-3"></div>
      </div>

      {/* Card Content */}
      <div className="pl-20 sm:pl-24 md:pl-28">
        <div className="text-sm text-gray-500 mb-3">
          By{" "}
          <span className="text-[#d24e1a] font-medium cursor-pointer hover:underline">
            Frenify
          </span>{" "}
          — In Planning
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#14141c] mb-4 leading-snug">
          New Tower in the Centre of Warsaw
        </h2>

        <p className="text-gray-600 text-base leading-relaxed mb-6">
          Seymour Whyte employs 475 people and generated revenue of A$433
          million in the fiscal year ended on 30 June 2017. Founded in 1987,
          Seymour Whyte is a well-known Australian company operating in the
          fields of civil engineering. Acquisition of 100% of Seymour Whyte's
          shares 2017
        </p>

        <button className="bg-[#081225] text-white p-1 cursor-pointer hover:bg-[#d24e1a] duration-300">
          Read More
        </button>
      </div>
    </div>
  </div>
</div>
<div className='ml-5 flex gap-2 items-center'>
    <div className='text-white font-semibold text-lg bg-[#d24e1a] h-9 w-10 text-center'>1</div>
     <div className='text-white font-semibold text-lg hover:bg-[#d24e1a] h-9 w-10 text-center cursor-pointer bg-gray-400 '>2</div>
     <div className='text-[#7e7a7c] font-semibold ml-3'>Viewing page 1 of 2</div>
  </div>
  <br /> <br /> <br /> <br />

    </div>
  );
};

export default Page;