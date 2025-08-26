'use client'
import React, { useState } from 'react'
import { TbBrain } from "react-icons/tb";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { FaHeadset } from "react-icons/fa";
import { useRouter } from 'next/navigation'
const Nav = ({ bgWhite = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const languages = [
    { code: 'ENG', name: 'English' },
    { code: 'SPA', name: 'Spanish' },
    { code: 'RUS', name: 'Russian' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setIsDropdownOpen(false);
  };
   const router = useRouter();
  return (
    <>
      {/* Desktop Navigation */}
      <div className={`absolute top-9 left-0 w-full ${bgWhite ? 'bg-white' : 'bg-black sm:bg-black/30'} h-25 flex items-center justify-between`}>
        <div className='flex items-center ml-10'>
          <div className='-skew-x-8 bg-[#398ace] h-[50px] w-[50px] ml-0 sm:ml-10 rounded-[3px] flex items-center justify-center text-[40px] text-white'>
            <TbBrain />
          </div>
          <div className='ml-3'>
            <div className={`text-[30px] sm:text-[40px] ${bgWhite ? 'text-black' : 'text-white'} italic leading-none`}>Industify</div>
            <div className={`text-[12px] sm:text-[15px] italic uppercase tracking-wider -mt-1 font-bold ${bgWhite ? 'text-black' : 'text-white'}`}>Corporation</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex'>
          <ul className='flex gap-6 xl:gap-10'> 
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`} onClick={()=>router.push("/")}>HOME</li>
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`} onClick={()=>router.push("/components/Project")}>PROJECTS</li>
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`}>OUR SERVICES</li>
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`}>PAGES</li>
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`}>BLOGS</li>
  <li className={`${bgWhite ? 'text-black' : 'text-white'} font-bold text-[13px] hover:text-gray-300 cursor-pointer`}>CONTACT</li>
</ul>
        </div>

        <div className='hidden lg:flex items-center'>
          {/* Language Selector */}
          <div className='relative mr-4'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex items-center gap-2 text-white hover:text-gray-300 transition-colors'
            >
              <span className='text-sm font-medium'>{selectedLanguage}</span>
              <IoIosArrowDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className='absolute top-full right-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]'>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                      selectedLanguage === language.code 
                        ? 'text-gray-400 bg-gray-800' 
                        : 'text-white'
                    }`}
                  >
                    {language.code}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center">
            <div className="w-0 h-0 border-r-[25px] border-r-[#2e649b] border-t-[75px] border-t-transparent"></div>
            <div className='h-[74px] w-86 bg-[#2e649b] flex items-center px-4 '>
              <div className='bg-white rounded-full p-2 ml-3'>
                <FaHeadset className='text-[#2e649b] text-lg' />
              </div>
              <div className='text-white flex ml-3'>
                <div className='text-[18px] xl:text-[20px] italic'>Toll Free:</div>
                <div className='text-[18px] xl:text-[20px] italic ml-2'>1-800-987-6543</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-white text-3xl'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-24 left-0 w-full bg-black/90 z-50 pt-4 pb-6 px-4'>
          <ul className='flex flex-col gap-4'> 
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700'>HOME</li>
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700' onClick={()=>router.push('/components/Projects/Nav')}>PROJECTS</li>
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700'>OUR SERVICES</li>
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700'>PAGES</li>
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700'>BLOGS</li>
            <li className='text-white font-bold text-[16px] hover:text-gray-300 cursor-pointer py-2 border-b border-gray-700'>CONTACT</li>
          </ul>

          {/* Mobile Language Selector */}
          <div className='relative mt-4'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className='flex items-center gap-2 text-white hover:text-gray-300 transition-colors'
            >
              <span className='text-sm font-medium'>Language: {selectedLanguage}</span>
              <IoIosArrowDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className='mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]'>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                      selectedLanguage === language.code 
                        ? 'text-gray-400 bg-gray-800' 
                        : 'text-white'
                    }`}
                  >
                    {language.name} ({language.code})
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Contact Info */}
          <div className='flex items-center mt-4 bg-[#2e649b] p-3 rounded'>

          </div>
            <div className='bg-white rounded-full p-2'>
              <FaHeadset className='text-[#2e649b] text-lg' />
            </div>
            <div className='text-white flex ml-3'>
              <div className='text-[16px] italic'>Toll Free:</div>
              <div className='text-[16px] italic ml-2'>1-800-987-6543</div>
            </div>
          </div>
       
      )}
    </>
  )
}

export default Nav