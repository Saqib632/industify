import React from 'react'
import Slider from '@/app/components/slider'
import Nav from '@/app/components/Navbar'
import Info from '@/app/components/ThreeCards'
import Image from '@/app/components/WeareIndustify'
import Slider2 from '@/app/components/OurIndustries'
import Last from '@/app/components/ISOcertificate'

const Page = () => {
  return (
    <div>
      <Slider />
      <Nav />
      <Info />
      <Image />
      <Slider2 />
      <Last />
    </div>
  )
}

export default Page
