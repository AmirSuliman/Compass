import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SocialNetwork from './components/SocialNetwork'
import ElevateBlob from './components/ElevateBlob'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import EngageMinds from './components/EngageMinds'

export default function LandingPage() {
  return (
    <div className='bg-white'>
     <Navbar/>
     <HeroSection/>
     <SocialNetwork/>
     <ElevateBlob/>
     <Features/>
     <HowItWorks/>
     <EngageMinds/>
    </div>
  )
}
