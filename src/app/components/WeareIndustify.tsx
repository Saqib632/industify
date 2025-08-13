import React from 'react'

const Image = () => {
  return (
  <div className="bg-white py-12   flex justify-center items-center min-h-screen  lg:min-h-[900px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center mt-30">
        {/* Left: Text Section */}
        <div className="flex flex-col justify-center items-start px-2 md:px-8">
          <h1 className="text-[#14213d] text-5xl md:text-6xl font-light mb-2">We are<br />Industify</h1>
          <div className="w-32 h-1 bg-[#398ace] mb-8"></div>
          <p className="text-[#14213d] text-lg mb-6 max-w-xl">
            Industify is a pioneer in design-build specializing in engineering, architecture and construction services to both domestic and international customers. Founded in 1960, Industify is a family-owned company headquartered in Lexington, Ky. with offices across the U.S., Canada and Japan.
          </p>
          <p className="text-[#14213d] text-lg mb-8 max-w-xl">
            To provide exceptional services to the insurance industry and their clients, the property owner. We are committed to providing the highest level of professionalism, service response, and quality workmanship.
          </p>
          <div className="mt-4">
            <span className="text-[#14213d] text-xl font-semibold">Alan Michaelis</span><br />
            <span className="text-[#14213d] text-base">Chief Executive</span>
          </div>
        </div>
        {/* Right: Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-full h-full border-10 border-[#46a1e2] z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
              alt="Industify Lab"
              className="relative w-[400px] h-[400px] object-cover shadow-xl z-20"
              
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image

