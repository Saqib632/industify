import React from "react";
import Image from "next/image";
import { FaHeadset } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Page = () => {
  return (
    <div>
      {/* Top Header Section */}
      <div className="bg-white w-full min-h-[180px] py-5">
        {/* Navigation Menu */}
        <div>
          <ul className="text-black flex flex-wrap justify-center md:justify-start md:pl-[350px] text-xs sm:text-sm gap-3 sm:gap-5 font-bold py-5 cursor-pointer ">
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
              <Image
              src="/logo-dark.png"
              alt="logo"
              className="h-10 sm:h-12 md:h-auto"
            />
          </div>

          {/* Dropdown + Call Info */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <select className="appearance-none bg-transparent font-semibold text-xs sm:text-sm cursor-pointer text-gray-700 pr-6">
                <option className="bg-black text-white">ENG</option>
                <option className="bg-black text-white">Spa</option>
                <option className="bg-black text-white">Rus</option>
              </select>
              <MdKeyboardArrowDown className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            </div>

            {/* Call Box */}
            <div className="hidden xl:flex items-center cursor-pointer">
              <div className="w-0 h-0 border-r-[25px] border-r-[#2e649b] border-t-[75px] border-t-transparent"></div>
              <div className="h-[74px] w-86 bg-[#2e649b] flex items-center px-4">
                <div className="bg-white rounded-full p-2 ml-3">
                  <FaHeadset className="text-[#2e649b] text-lg" />
                </div>
                <div className="text-white flex ml-3">
                  <div className="text-[16px] xl:text-[20px] italic">
                    Toll Free:
                  </div>
                  <div className="text-[16px] xl:text-[20px] italic ml-2">
                    1-800-987-6543
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Text */}
        <div className="mt-4 text-center md:text-left md:px-[345px]">
          <h1 className="text-black font-bold text-xs sm:text-sm">CONTACT</h1>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 ml-7">
        <h1 className="text-3xl md:text-4xl font-normal mb-2">Get in Touch</h1>
        <div className="flex items-center text-sm md:text-base text-gray-600">
          <span className="hover:text-[#d24e1a] cursor-pointer">Home</span>
          <span className="mx-2">
            <MdKeyboardArrowRight className="text-2xl text-[#dddddd]" />
          </span>
          <span className="text-gray-400">Contact</span>
        </div>
        <div className="space-y-1.5 mt-7">
          <div className="w-38 h-1.5 bg-[#eeeeee] rounded"></div>
          <div className="w-20 h-1.5 bg-[#eeeeee] rounded"></div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.696955029998!2d-6.26200458416186!3d53.342897979977654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9c69c3d60f%3A0x6b37e9b2af94b1ad!2s1-2%20Adam%20Court%2C%20Sraid%20Grafton%2C%20Dublin%202%2C%20Ireland!5e0!3m2!1sen!2s!4v1677845934678!5m2!1sen!2s"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md border-0"
        ></iframe>
      </div>

      {/* Contact Form + Office Info */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#0d0e12] text-white rounded-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Get in touch with us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-[#1a1b20] rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#1a1b20] rounded focus:outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 bg-[#1a1b20] rounded focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-[#d24e1a] hover:bg-[#b53f12] text-white px-6 py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Washington Office",
                address: "100-120 Ft.Drive NE, Washington, DC 20011",
                phone: "+1 202-415-7234",
                email: "w.industify@gmail.com",
              },
              {
                title: "New-York Office",
                address: "110-115 Ft.Consort NE, New-York, DC 20031",
                phone: "+1 272-436-4524",
                email: "n.industify@gmail.com",
              },
              {
                title: "Boston Office",
                address: "100-120 Ft.Albemarle NE, Boston, DC 20017",
                phone: "+1 252-925-7564",
                email: "b.industify@gmail.com",
              },
            ].map((office, index) => (
              <div key={index} className="bg-[#0d0e12] rounded-md overflow-hidden">
                <div className="flex justify-between items-center bg-[#11131c] px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">{office.title}</h3>
                  <div className="bg-[#d24e1a] p-2 rounded-tl-md rounded-br-md">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                </div>
                <div className="px-4 py-4 text-sm space-y-1 text-gray-300">
                  <p>{office.address}</p>
                  <p>Phone: {office.phone}</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-400 hover:underline"
                    >
                      {office.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Page;
