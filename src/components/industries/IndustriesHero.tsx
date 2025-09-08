'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function IndustriesHero() {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/healthcare-professionals.jpg"
          alt="Healthcare professionals in a hospital setting"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Healthcare Solutions for Every Setting
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
            Tailored technology solutions designed to meet the unique challenges of healthcare providers across all settings, 
            from large hospital systems to private specialty practices.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
