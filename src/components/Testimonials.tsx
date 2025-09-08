'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    content: "Elite Legal Associates saved my business during a complex merger. Their expertise in corporate law is unmatched. Sarah Mitchell and her team were professional, thorough, and delivered exceptional results.",
    author: "David Thompson",
    role: "CEO, Thompson Industries",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    content: "When I was facing serious criminal charges, Michael Rodriguez fought tirelessly for my rights. His dedication and expertise resulted in all charges being dropped. I can't thank him enough.",
    author: "Jennifer Martinez",
    role: "Small Business Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    content: "The immigration process seemed impossible until I found Emily Chen. She guided me through every step with patience and expertise. I'm now a proud U.S. citizen thanks to her help.",
    author: "Ahmed Hassan",
    role: "Software Engineer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 4,
    content: "During my difficult divorce, the team at Elite Legal provided not just legal expertise but emotional support. They protected my interests and helped me start a new chapter in my life.",
    author: "Lisa Rodriguez",
    role: "Marketing Director",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 5,
    content: "After my car accident, I was overwhelmed by medical bills and insurance claims. Elite Legal fought for me and secured a settlement that covered all my expenses and more.",
    author: "Robert Kim",
    role: "Teacher",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    content: "The estate planning services were comprehensive and thoughtful. They helped me protect my family's future and gave me peace of mind knowing everything is properly arranged.",
    author: "Margaret Wilson",
    role: "Retired Nurse",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
            What Our Clients Say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our satisfied clients have to say about our legal services.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-gold-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-900 mb-6">
                  <p className="text-sm leading-6">"{testimonial.content}"</p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-200 pt-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">AV</div>
                  <div className="text-sm text-gray-600">Martindale-Hubbell</div>
                  <div className="text-xs text-gray-500">Highest Rating</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">★★★★★</div>
                  <div className="text-sm text-gray-600">Avvo Rating</div>
                  <div className="text-xs text-gray-500">Superb Lawyer</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">BBB</div>
                  <div className="text-sm text-gray-600">Better Business</div>
                  <div className="text-xs text-gray-500">A+ Rating</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">SL</div>
                  <div className="text-sm text-gray-600">Super Lawyers</div>
                  <div className="text-xs text-gray-500">Rising Stars</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
