'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScaleIcon } from '@heroicons/react/24/solid'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowUpIcon 
} from '@heroicons/react/24/outline'

const navigation = {
  services: [
    { name: 'Corporate Law', href: '#services' },
    { name: 'Criminal Defense', href: '#services' },
    { name: 'Family Law', href: '#services' },
    { name: 'Immigration Law', href: '#services' },
    { name: 'Employment Law', href: '#services' },
    { name: 'Personal Injury', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Attorney Disclaimer', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
          fillRule="evenodd"
          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <ScaleIcon className="h-8 w-8 text-primary-400" />
              <div>
                <div className="text-xl font-bold text-white font-serif">Elite Legal</div>
                <div className="text-xs text-gray-400 -mt-1">Associates</div>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm leading-6 text-gray-300"
            >
              Providing exceptional legal representation with integrity, dedication, and results. 
              Your trusted legal partner for over 25 years.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <PhoneIcon className="h-4 w-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <EnvelopeIcon className="h-4 w-4 text-primary-400" />
                <span>info@elitelegal.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPinIcon className="h-4 w-4 text-primary-400" />
                <span>123 Legal Plaza, Suite 500<br />Downtown, NY 10001</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Emergency Contact</h3>
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-gray-300">
                    Available 24/7 for urgent legal matters
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Emergency Hotline
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 Elite Legal Associates. All rights reserved. Attorney Advertising.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center text-xs text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              Back to top
            </motion.button>
          </div>
          
          <div className="mt-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Attorney Disclaimer:</strong> The information on this website is for general information purposes only. 
              Nothing on this site should be taken as legal advice for any individual case or situation. This information is not 
              intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
