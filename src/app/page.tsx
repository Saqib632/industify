import React from 'react'
import Slider from '@/app/components/slider'
import Nav from '@/app/components/Navbar'
import Info from '@/app/components/ThreeCards'
import Image from '@/app/components/WeareIndustify'
import Slider2 from '@/app/components/OurIndustries'
import Last from '@/app/components/ISOcertificate'
import NavbarIndustify from './components/NavbarIndustify'
import HeroSection from './components/HeroSection'
import Thoughts from './components/Thoughts'
import Latest from './components/Latest'



const Page = () => {
  return (
    <div>
      <Slider />
      <Nav />
      <Info />
      <Image />
      <Slider2 />
      <Last />
     <NavbarIndustify />
     <HeroSection />
     <Latest />
     <Thoughts />
     
    </div>
  )
}

export default Page
