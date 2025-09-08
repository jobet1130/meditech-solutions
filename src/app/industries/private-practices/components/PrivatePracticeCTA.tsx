'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PrivatePracticeCTA() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl" />
      <div className="absolute -left-48 -bottom-48 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto py-20 px-6 lg:px-8 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to elevate your practice? 
                <span className="block mt-3 text-blue-200">Start your transformation today.</span>
              </h2>
              <p className="mt-6 text-xl leading-8 text-blue-100 max-w-2xl">
                Join over 5,000 healthcare providers who trust our platform to streamline their operations and enhance patient care.
              </p>
              
              {/* Trust indicators */}
              <div className="mt-10">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden relative">
                        <Image
                          src={`https://randomuser.me/api/portraits/med/${item % 2 === 0 ? 'men' : 'women'}/${item}0.jpg`}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-blue-100">
                    <p className="font-semibold text-white">Rated 4.9/5</p>
                    <p>by healthcare professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 lg:col-span-5 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900">Schedule a Personalized Demo</h3>
              <p className="mt-2 text-gray-600">See how our platform can transform your practice in just 30 minutes.</p>
              
              <div className="mt-8 space-y-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  href="#contact"
                  className="flex w-full justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Book a Demo
                </motion.a>
                
                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  href="#pricing"
                  className="flex w-full justify-center items-center px-6 py-4 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-blue-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  View Pricing Plans
                </motion.a>
              </div>
              
              <p className="mt-6 text-xs text-center text-gray-500">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
