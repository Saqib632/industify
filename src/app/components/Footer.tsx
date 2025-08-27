"use client"
import React from 'react';
import Image from "next/image";
import { FiMail,  } from 'react-icons/fi';
import { FaCaretUp } from "react-icons/fa";
const Footer = () => {
  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[url('/crane.jpg')] bg-cover bg-center w-full font-sans min-h-screen flex flex-col">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Newsletter Section */}
        <div className="py-6 px-4 border-b border-gray-700">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <FiMail className="text-2xl text-white flex-shrink-0" />
              <span className="text-base sm:text-lg text-white font-light leading-snug">
                Newsletter — get updates with latest topics
              </span>
            </div>
            {/* Right */}
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                className="h-12 w-full sm:w-[300px] md:w-[420px] px-4 bg-transparent border border-gray-500 text-white placeholder-gray-400 text-sm focus:outline-none"
                placeholder="Your e-mail address *"
              />
              <button className="h-12 w-full sm:w-32 bg-[#316397] text-sm font-bold uppercase hover:bg-[#d24e1a] text-white cursor-pointer duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex-grow flex items-center py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-white">
            {/* Logo & Description */}
            <div>
              <div className="mb-5 flex justify-center sm:justify-start">
                <Image
                  src="/logo-light.png"
                  alt="Industify Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10"
                />
              </div>
              <p className="text-[#b8bbc0] text-sm sm:text-base leading-6 text-center sm:text-left">
                We are focused on user-driven outcomes, we strive to create meaningful
                connections for users through considered strategy and innovation.
              </p>
            </div>

            {/* Business Hours */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl mb-5 font-normal border-b border-[#284768]  pb-1 inline-block">
                Business Hours
              </h3>
              <ul className="text-sm sm:text-base text-[#d3d4d6] space-y-3">
                <li className="flex flex-col sm:flex-row justify-between border-b border-gray-600 pb-2 gap-1">
                  <span>Monday-Friday:</span>
                  <span>9am to 5pm</span>
                </li>
                <li className="flex flex-col sm:flex-row justify-between border-b border-gray-600 pb-2 gap-1">
                  <span>Saturday:</span>
                  <span>10am to 3pm</span>
                </li>
                <li className="flex flex-col sm:flex-row justify-between gap-1">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="text-center sm:text-left ml-8">
              <h3 className="text-lg sm:text-xl mb-5 font-normal border-b border-[#284768] pb-1 inline-block">
                Helpful Links
              </h3>
              <ul className="grid grid-cols-2 xs:grid-cols-2 gap-y-3 text-sm sm:text-base text-[#d3d4d6]">
                <li><a href="#" className="hover:text-white">Our Services</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">Showcase</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Affiliates</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#081225] border-t border-gray-600 pt-6 sm:pt-10 pb-8 pl-5">
          <div className="max-w-6xl px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-[#b0b2b5] uppercase gap-4">
            {/* Left: Services Links */}
            <div className="flex flex-wrap gap-4 font-semibold">
              <a href="#" className="hover:text-white">SERVICES</a>
              <a href="#" className="hover:text-white">AFFILIATES</a>
              <a href="#" className="hover:text-white">DISCLAIMER</a>
              <a href="#" className="hover:text-white">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white">CAREER</a>
            </div>

            {/* Right: Scroll to Top */}
            <div className="flex flex-col items-center cursor-pointer" onClick={scrollToTop}>
              <FaCaretUp  className="text-lg bg-[#316397] " />
              <span className=" text-[#6b6e74] mt-1">To Top</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="normal-case text-[#848588] text-left mt-4">
            © 1934 – {new Date().getFullYear()} Industify, LCC. All rights reserved. Theme has
            been designed by <span className="font-bold text-[#bcbdbf]">Frenify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
