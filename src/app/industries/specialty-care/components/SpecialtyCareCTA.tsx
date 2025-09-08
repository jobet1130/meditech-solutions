'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SpecialtyCareCTA() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl" />
      <div className="absolute -left-48 -bottom-48 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto py-20 px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your specialty practice?
            </h2>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl">
              Schedule a personalized demo to see how our specialized solutions can streamline your workflow and improve patient care.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-700 hover:bg-blue-50 md:py-4 md:px-10 md:text-lg transition-colors duration-200"
              >
                Request a Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/pricing"
                className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-white hover:bg-opacity-10 md:py-4 md:px-10 md:text-lg transition-colors duration-200"
              >
                View Pricing
              </motion.a>
            </div>
            
            <div className="mt-10">
              <p className="text-sm text-blue-100">Need help deciding?</p>
              <p className="mt-1 text-base text-white font-medium">
                Speak with a specialist: <span className="text-blue-200">(555) 123-4567</span>
              </p>
            </div>
          </div>
          
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/specialty-cta.jpg"
              alt="Healthcare professional using our software"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-700/50" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">See it in action</p>
                  <p className="text-xs text-blue-100">Watch our 2-minute overview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
