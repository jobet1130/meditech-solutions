'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SpecialtyCareHero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background with medical imagery */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/95"></div>
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Healthcare professionals working with medical technology"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-28 sm:py-36 px-6 lg:px-8 flex flex-col lg:flex-row items-center min-h-[80vh]">
        <div className="max-w-2xl lg:max-w-3xl lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-6">
              Specialized Healthcare Solutions
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforming Specialty Care with <span className="text-blue-300">Innovative Technology</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl">
              Advanced technology solutions tailored to the unique needs of specialty medical practices, enhancing patient care and practice efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#solutions"
                className="flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-700 hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Explore Our Solutions
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Card with Stats */}
        <motion.div 
          className="hidden lg:block relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl mt-12 lg:mt-0 w-full max-w-md"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-600">Medical Support</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
                <p className="text-gray-600">Uptime Guarantee</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Healthcare Partners</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Trusted by leading healthcare providers worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
