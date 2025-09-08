'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SolutionsHeroProps {
  title: string;
  description: string;
}

export default function SolutionsHero({ title, description }: SolutionsHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Healthcare professionals discussing patient care"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-blue-100"
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#solutions"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
            >
              Explore Solutions
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-200"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative bg-white/10 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '500+', label: 'Healthcare Providers' },
              { value: 'HIPAA', label: 'Compliant' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
