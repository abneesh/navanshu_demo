'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  legalMatter: string
  message: string
}

const contactInfo = [
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    icon: PhoneIcon,
    href: 'tel:+15551234567',
  },
  {
    name: 'Email',
    value: 'info@elitelegal.com',
    icon: EnvelopeIcon,
    href: 'mailto:info@elitelegal.com',
  },
  {
    name: 'Address',
    value: '123 Legal Plaza, Suite 500\nDowntown, NY 10001',
    icon: MapPinIcon,
    href: 'https://maps.google.com',
  },
  {
    name: 'Hours',
    value: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
    icon: ClockIcon,
    href: null,
  },
]

const legalMatters = [
  'Corporate Law',
  'Criminal Defense',
  'Family Law',
  'Immigration Law',
  'Employment Law',
  'Personal Injury',
  'Estate Planning',
  'Civil Litigation',
  'Other',
]

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Get Your Free Consultation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to discuss your legal matter? Contact us today for a free consultation. 
            We're here to help you navigate your legal challenges with confidence.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
                Get in Touch
              </h3>
              
              <dl className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.name} className="flex">
                    <dt className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    </dt>
                    <dd className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-primary-600 transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-2">
                  Emergency Legal Assistance
                </h4>
                <p className="text-red-700 text-sm mb-3">
                  If you need immediate legal assistance outside of business hours:
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-500"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Emergency Hotline: +1 (555) 123-4567
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your consultation request has been submitted. We'll contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name *
                      </label>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name *
                      </label>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="legalMatter" className="block text-sm font-medium text-gray-700">
                      Type of Legal Matter *
                    </label>
                    <select
                      {...register('legalMatter', { required: 'Please select a legal matter' })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    >
                      <option value="">Select a legal matter</option>
                      {legalMatters.map((matter) => (
                        <option key={matter} value={matter}>
                          {matter}
                        </option>
                      ))}
                    </select>
                    {errors.legalMatter && (
                      <p className="mt-1 text-sm text-red-600">{errors.legalMatter.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      placeholder="Please describe your legal matter..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div>
                    <motion.button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Consultation Request
                    </motion.button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. Your information is confidential and protected by attorney-client privilege.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
