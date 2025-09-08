'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ScaleIcon, 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  HeartIcon, 
  GlobeAltIcon, 
  BriefcaseIcon,
  DocumentTextIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Corporate Law',
    description: 'Comprehensive legal services for businesses including contracts, mergers, acquisitions, and corporate governance.',
    icon: BuildingOfficeIcon,
    features: ['Contract Negotiation', 'Mergers & Acquisitions', 'Corporate Governance', 'Compliance'],
  },
  {
    name: 'Criminal Defense',
    description: 'Aggressive defense representation for all criminal charges from misdemeanors to serious felonies.',
    icon: ShieldCheckIcon,
    features: ['DUI Defense', 'White Collar Crimes', 'Drug Charges', 'Violent Crimes'],
  },
  {
    name: 'Family Law',
    description: 'Compassionate legal guidance through divorce, custody, adoption, and other family matters.',
    icon: HeartIcon,
    features: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Domestic Violence'],
  },
  {
    name: 'Immigration Law',
    description: 'Expert assistance with visas, green cards, citizenship, and deportation defense.',
    icon: GlobeAltIcon,
    features: ['Visa Applications', 'Green Card Process', 'Citizenship', 'Deportation Defense'],
  },
  {
    name: 'Employment Law',
    description: 'Protecting workers rights and helping employers navigate complex employment regulations.',
    icon: BriefcaseIcon,
    features: ['Wrongful Termination', 'Discrimination Claims', 'Wage Disputes', 'Employment Contracts'],
  },
  {
    name: 'Personal Injury',
    description: 'Fighting for maximum compensation for accident victims and their families.',
    icon: UserGroupIcon,
    features: ['Car Accidents', 'Medical Malpractice', 'Slip & Fall', 'Product Liability'],
  },
  {
    name: 'Estate Planning',
    description: 'Comprehensive estate planning services to protect your assets and legacy.',
    icon: DocumentTextIcon,
    features: ['Wills & Trusts', 'Probate', 'Asset Protection', 'Tax Planning'],
  },
  {
    name: 'Civil Litigation',
    description: 'Experienced trial attorneys handling complex civil disputes and litigation matters.',
    icon: ScaleIcon,
    features: ['Business Disputes', 'Contract Litigation', 'Property Disputes', 'Appeals'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
            Comprehensive Legal Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide expert legal representation across multiple practice areas, 
            ensuring our clients receive the specialized attention their cases deserve.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary-200"
              >
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-600 text-white mb-6 group-hover:bg-primary-700 transition-colors">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-xl font-semibold leading-7 text-gray-900 font-serif">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Need Legal Assistance?
            </h3>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait to protect your rights. Contact us today for a free consultation 
              and let our experienced attorneys guide you through your legal challenges.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
