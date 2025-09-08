'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOffice2Icon, 
  Square3Stack3DIcon,
  ClockIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '24/7 Emergency Care',
    icon: ClockIcon,
    description: 'Immediate medical attention with our round-the-clock emergency services staffed by experienced specialists.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    name: 'Specialized Departments',
    icon: BuildingOffice2Icon,
    description: 'Comprehensive care across cardiology, neurology, oncology, and more with our expert medical teams.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Advanced Technology',
    icon: DevicePhoneMobileIcon,
    description: 'State-of-the-art diagnostic and treatment equipment for accurate and effective healthcare solutions.',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    name: 'Patient-Centered Care',
    icon: UserGroupIcon,
    description: 'Personalized treatment plans focused on your unique healthcare needs and comfort.',
    color: 'from-amber-500 to-yellow-400',
  },
  {
    name: 'Comfortable Facilities',
    icon: Square3Stack3DIcon,
    description: 'Modern, clean, and comfortable environment designed for optimal patient recovery and care.',
    color: 'from-rose-500 to-pink-400',
  },
  {
    name: 'Convenient Location',
    icon: MapPinIcon,
    description: 'Easily accessible with ample parking and public transport options for your convenience.',
    color: 'from-indigo-500 to-blue-400',
  },
];

import { Variants } from 'framer-motion';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // This is a valid cubic-bezier curve
    },
  },
};

export default function HospitalFeatures() {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Facilities
          </motion.span>
          
          <motion.h2 
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            World-Class Healthcare Facilities
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience healthcare excellence with our state-of-the-art facilities and compassionate care.
          </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="group relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              variants={item}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              <div className={`flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg mb-4`}>
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                Learn more
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Tour
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
