'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { ScaleIcon } from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>info@elitelegal.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Available 24/7 for Emergency Legal Consultation</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <motion.a 
              href="#home" 
              className="-m-1.5 p-1.5 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScaleIcon className="h-8 w-8 text-primary-600" />
              <div>
                <div className="text-xl font-bold text-gray-900 font-serif">Elite Legal</div>
                <div className="text-xs text-gray-600 -mt-1">Associates</div>
              </div>
            </motion.a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="#contact"
              className="rounded-md bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free Consultation
            </motion.a>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <a href="#home" className="-m-1.5 p-1.5 flex items-center space-x-2">
                  <ScaleIcon className="h-8 w-8 text-primary-600" />
                  <div>
                    <div className="text-xl font-bold text-gray-900 font-serif">Elite Legal</div>
                    <div className="text-xs text-gray-600 -mt-1">Associates</div>
                  </div>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="block rounded-md bg-primary-600 px-6 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </header>
    </>
  )
}
