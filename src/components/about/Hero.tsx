'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Activity, HeartPulse } from 'lucide-react';

const features = [
  {
    name: 'HIPAA Compliant',
    icon: ShieldCheck,
  },
  {
    name: 'Real-time Analytics',
    icon: Activity,
  },
  {
    name: 'Patient-Centric',
    icon: HeartPulse,
  },
];

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:max-w-7xl">
          {/* Content Column */}
          <div className="relative">

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">About Meditech Solutions</span>
                <span className="block text-blue-600">Our Story & Mission</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Pioneering healthcare technology solutions that empower providers and improve patient outcomes through innovation and excellence.
              </motion.p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="rounded-md shadow"
                >
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <Link
                    href="/careers"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Join Our Team
                  </Link>
                </motion.div>
              </div>
              
              {/* Features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 sm:mt-12 grid grid-cols-3 gap-4"
              >
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-2">
                      <feature.icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700">{feature.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </main>
          </div>
          
          {/* Image Column */}
          <div className="mt-10 lg:mt-0 relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative mx-auto w-full max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
            >
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-9 lg:aspect-none">
                <Image
                  className="rounded-lg shadow-xl object-cover object-center"
                  src="/images/19839.jpg"
                  alt="Healthcare professionals working together"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
