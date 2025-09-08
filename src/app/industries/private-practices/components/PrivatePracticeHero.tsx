'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrivatePracticeHero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-95"></div>
      
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
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
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Private Practice</span>
              <span className="block bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">Management Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-blue-50 max-w-2xl leading-relaxed">
              Streamline your private practice with our comprehensive healthcare management platform designed to optimize operations and enhance patient care.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#solutions"
                className="flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-semibold rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                View Solutions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="flex items-center justify-center px-8 py-3 border-2 border-white text-base font-semibold rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Request Demo
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
              <p className="text-blue-100 text-sm">
                Trusted by <span className="font-semibold text-white">1,000+</span> private practitioners
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
                src="https://images.unsplash.com/photo-1551076805-e4c60b6ba7bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
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
