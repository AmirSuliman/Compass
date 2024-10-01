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
import Testimonials from './components/Testimonials';

export default function LandingPage() {
  return (
    <main className="bg-white overflow-x-hidden max-w-[1750px] mx-auto">
      <Navbar />
      <HeroSection />
      <SocialNetwork />
      <ElevateBlob />
      <Features />
      <HowItWorks />
      <EngageMinds />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
