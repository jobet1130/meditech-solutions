'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  HeartPulse,
  Eye,
  Brain,
  Bone,
  Stethoscope,
  Microscope,
} from 'lucide-react';

const features = [
  {
    name: 'Cardiology',
    description: 'Comprehensive cardiac care management, EKG integration, and patient monitoring solutions.',
    icon: HeartPulse,
    color: 'from-red-500 to-pink-500',
  },
  {
    name: 'Ophthalmology',
    description: 'Specialized EHR for eye care, vision testing integration, and imaging management.',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Neurology',
    description: 'Advanced neurological assessment tools, EEG/EMG integration, and treatment tracking.',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Orthopedics',
    description: 'Specialized documentation, surgical planning, and rehabilitation tracking.',
    icon: Bone,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Primary Care',
    description: 'Comprehensive patient management with specialty-specific templates and workflows.',
    icon: Stethoscope,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Pathology',
    description: 'Advanced lab integration, specimen tracking, and diagnostic reporting tools.',
    icon: Microscope,
    color: 'from-indigo-500 to-blue-500',
  },
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SpecialtyCareFeatures() {
  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 sm:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600"
          >
            Tailored for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Your Specialty</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            Specialized tools and workflows designed to meet the unique needs of your medical specialty practice.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-20 max-w-7xl relative"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-8 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl hover:ring-blue-100 hover:bg-white"
              >
                <div className="absolute -top-6 right-6 h-14 w-14 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-100/50 ring-1 ring-gray-900/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-100">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1"
                  >
                    Learn more
                    <svg 
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-24 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="relative max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900">Custom Solutions</h3>
              <p className="mt-4 text-gray-600 text-lg">
                Don&apos;t see your specialty listed? Our team can create custom solutions tailored to your specific needs.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-sm hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Request Custom Solution
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
