'use client';

import React from 'react';
import Image from 'next/image';

const backgroundImage = 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

interface HospitalHeroProps {
  title: string;
  description: string;
  imageSrc?: string; // Made optional since we'll use our own images
}

export default function HospitalHero({ title, description }: HospitalHeroProps) {

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-95"></div>
      
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Modern hospital facility"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              <span className="block">{title}</span>
              <span className="block bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h1>
            <p className="mt-6 text-xl text-blue-50 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Explore Our Services
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-3 border-2 border-white text-base font-semibold rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Contact Us
              </a>
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
          </div>
          
          <div className="relative h-80 lg:h-[32rem] w-full">
            {/* Content placeholder - can be used for additional content or removed */}
          </div>
        </div>
      </div>
    </div>
  );
}
