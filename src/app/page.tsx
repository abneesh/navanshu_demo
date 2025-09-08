'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Stats />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}
