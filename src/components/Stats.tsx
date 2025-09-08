'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Years of Experience', value: 25, suffix: '+' },
  { id: 2, name: 'Cases Successfully Resolved', value: 500, suffix: '+' },
  { id: 3, name: 'Client Satisfaction Rate', value: 98, suffix: '%' },
  { id: 4, name: 'Professional Awards', value: 15, suffix: '+' },
]

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif"
            >
              Proven Track Record of Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-lg leading-8 text-gray-600"
            >
              Our numbers speak for themselves. We deliver results that matter.
            </motion.p>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col bg-gradient-to-br from-primary-50 to-primary-100 p-8 hover:from-primary-100 hover:to-primary-200 transition-all duration-300"
              >
                <dt className="text-sm font-semibold leading-6 text-gray-600 mb-2">
                  {stat.name}
                </dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-primary-600 font-serif">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
