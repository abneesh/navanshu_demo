'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, ScaleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { TrophyIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Experienced Legal Team',
    description: 'Our attorneys have decades of combined experience across multiple practice areas.',
    icon: UserGroupIcon,
  },
  {
    name: 'Proven Track Record',
    description: 'We have successfully represented clients in over 500 cases with a 98% success rate.',
    icon: TrophyIcon,
  },
  {
    name: 'Client-Focused Approach',
    description: 'Every case receives personalized attention and a tailored legal strategy.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Ethical Practice',
    description: 'We maintain the highest standards of professional ethics and integrity.',
    icon: ScaleIcon,
  },
]

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior Partner',
    specialization: 'Corporate Law & Litigation',
    experience: '15+ years',
    education: 'Harvard Law School',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Managing Partner',
    specialization: 'Criminal Defense & Family Law',
    experience: '20+ years',
    education: 'Stanford Law School',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Emily Chen',
    role: 'Associate Partner',
    specialization: 'Immigration & Employment Law',
    experience: '12+ years',
    education: 'Yale Law School',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* About Section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            About Our Firm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif"
          >
            Excellence in Legal Representation
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Founded in 1998, Elite Legal Associates has been at the forefront of legal excellence, 
            providing comprehensive legal services to individuals, families, and businesses. Our commitment 
            to justice and client satisfaction has made us one of the most trusted law firms in the region.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center mb-16"
          >
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
              Meet Our Legal Team
            </h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced attorneys bring decades of expertise and a passion for justice to every case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    className="h-64 w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 font-serif">{member.name}</h4>
                  <p className="text-primary-600 font-semibold">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.specialization}</p>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                      {member.experience} Experience
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
                      {member.education}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
