'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Array of high-quality healthcare-related images
const hospitalImages = [
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
];

interface HospitalHeroProps {
  title: string;
  description: string;
  imageSrc?: string; // Made optional since we'll use our own images
}

export default function HospitalHero({ title, description }: HospitalHeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hospitalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="pt-16 mx-auto max-w-7xl px-4 sm:pt-20 sm:px-6 lg:pt-24 lg:px-8 xl:pt-32">
            <div className="sm:text-center lg:text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">{title}</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-2">
                    Healthcare Solutions
                  </span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 sm:mt-6 sm:text-xl max-w-2xl">
                  {description}
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg shadow-lg"
                  >
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Our Services
                      <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-lg shadow-sm"
                  >
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-4 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-96 w-full lg:h-full">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10 lg:bg-gradient-to-r lg:from-white lg:via-white/60 lg:to-transparent"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 0.5 : 0.7 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute inset-0 z-0"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={hospitalImages[currentImageIndex]}
                  alt="Modern hospital facility with advanced medical equipment"
                  fill
                  className={`object-cover transition-all duration-700 brightness-100 ${isHovered ? 'scale-105 brightness-110' : 'scale-100'}`}
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV !== 'production'}
                  style={{
                    filter: 'contrast(1.05) saturate(1.1)',
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Image navigation dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
              {hospitalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-4 h-1.5 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 translate-y-16 opacity-70 mix-blend-multiply filter blur-xl" />
      <div className="hidden lg:block absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-100 rounded-full opacity-50 mix-blend-multiply filter blur-xl" />
    </div>
  );
}
