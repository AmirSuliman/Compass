import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialNetwork from './components/SocialNetwork';
import ElevateBlob from './components/ElevateBlob';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import EngageMinds from './components/EngageMinds';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Testimonals from './components/Testimonals';

export default function LandingPage() {
  return (
    <div className='bg-white overflow-x-hidden'> 
      <Navbar />
      <HeroSection />
      <SocialNetwork />
      <ElevateBlob />
      <Features />
      <HowItWorks />
      <EngageMinds />
      <Testimonals />
      <ContactForm />
      <Footer />
    </div>
  );
}
