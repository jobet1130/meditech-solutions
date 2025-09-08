'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  CalendarIcon, 
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  ClockIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

interface FeaturesSectionProps {
  features: string[];
}

const featureIcons = [
  CalendarIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  ClockIcon,
  ShieldCheckIcon
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">Comprehensive Practice Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run your medical practice efficiently, all in one integrated platform
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature: string, index: number) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <motion.div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                custom={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature}</h3>
                <div className="absolute bottom-6 left-8 h-0.5 w-12 bg-blue-100 mt-6 group-hover:bg-blue-200 transition-colors duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">And many more features to help your practice thrive</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Features
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
