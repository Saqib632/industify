import React from 'react'

const info = () => {
  return (
    <div className="bg-[#0a0e17] py-12 px-2 sm:px-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="relative border-8 border-white bg-[#0a0e17] p-10 pt-16  flex flex-col justify-between min-h-[350px]">
          {/* Orange tab */}
          <div className="absolute -top-2 left-10 flex items-center">
            <div className="bg-[#e25c1a]  rounded-bl-md px-5 py-6 text-white text-3xl font-normal">01</div>
            <div className="w-0 h-0 border-r-[25px] border-r-transparent border-t-[75px] border-t-[#6c2c13] -mt-[-7px]"></div>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Honesty</h2>
            <p className="text-[#eaeaea] text-lg mb-8">Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
          </div>
          <div className="mt-auto">
            <span className="text-white text-2xl">→</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative border-8 border-white bg-[#0a0e17] p-10 pt-16  flex flex-col justify-between min-h-[350px]">
          <div className="absolute -top-2 left-10 flex items-center">
            <div className="bg-[#e25c1a]  rounded-bl-md px-5 py-6 text-white text-3xl font-normal">02</div>
            <div className="w-0 h-0 border-r-[25px] border-r-transparent border-t-[75px] border-t-[#6c2c13] -mt-[-7px]"></div>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Passion</h2>
            <p className="text-[#eaeaea] text-lg mb-8">Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
          </div>
          <div className="mt-auto">
            <span className="text-white text-2xl">→</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative border-8 border-white bg-[#0a0e17] p-10 pt-16  flex flex-col justify-between min-h-[350px]">
          <div className="absolute -top-2 left-10 flex items-center">
            <div className="bg-[#e25c1a]  rounded-bl-md px-5 py-6 text-white text-3xl font-normal">03</div>
            <div className="w-0 h-0 border-r-[25px] border-r-transparent border-t-[75px] border-t-[#6c2c13] -mt-[-7px]"></div>
          </div>
          <div className="mt-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Quality Work</h2>
            <p className="text-[#eaeaea] text-lg mb-8">We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
          </div>
          <div className="mt-auto">
            <span className="text-white text-2xl">→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default info
