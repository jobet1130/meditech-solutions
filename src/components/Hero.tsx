'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PlayCircle, ShieldCheck, Activity, HeartPulse } from 'lucide-react';

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
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Transforming Healthcare</span>
                <span className="block text-blue-600">Through Innovation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Empowering healthcare providers with cutting-edge technology solutions that improve patient outcomes and streamline operations.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="rounded-md shadow"
                >
                  <Link
                    href="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Request a Demo
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Sales
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
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-blue-50 flex items-start pt-12 lg:pt-20">
        <div className="w-full h-full flex items-start justify-center p-8 lg:px-12 lg:pt-8">
          <div className="relative w-full max-w-md">
            <div className="relative aspect-square w-full bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg
                  className="h-32 w-32 text-blue-600 opacity-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-medium text-lg">Healthcare Dashboard</h3>
                <p className="text-blue-100 text-sm">Real-time patient monitoring</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 w-20 h-20 flex items-center justify-center">
              <div className="bg-blue-100 rounded-full p-2">
                <PlayCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
