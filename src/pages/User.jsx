import React from 'react'
import Hero from '../components/Home/Hero'
import RediscoverCards from '../components/Home/RediscoverCards'
import Features from '../components/Home/Features'
import DynamicRadioContent from '../components/Home/DynamicRadioContent'
// import TestimonialCarousel from '../components/Home/TestimonialCarousel'

const User = () => {
  return (
    <div className=' overflow-hidden'>
          <Hero />
      <RediscoverCards />
      <Features />
      <DynamicRadioContent />
      
      {/* <TestimonialCarousel /> */}
    </div>
  )
}

export default User