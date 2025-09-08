'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ClinicHero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-95"></div>
      
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Healthcare professionals in a modern clinic"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              <span className="block">Advanced Clinic</span>
              <span className="block bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">Management Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-blue-50 max-w-2xl leading-relaxed">
              Transform your practice with our comprehensive healthcare technology platform designed to streamline operations and enhance patient care.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#solutions"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Explore Solutions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-semibold rounded-md text-blue-600 bg-transparent hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Schedule Demo
              </motion.a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-10 w-10 rounded-full border-2 border-white">
                    <Image
                      src={`https://randomuser.me/api/portraits/med/${item % 2 === 0 ? 'men' : 'women'}/${item}0.jpg`}
                      alt="Healthcare professional"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
              <p className="text-blue-50 text-sm font-medium">
                Trusted by <span className="font-bold text-white">500+</span> healthcare providers
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-96 lg:h-auto"
          >
            <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Doctor using digital tablet in clinic"
                fill
                className="object-contain object-center rounded-lg shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
