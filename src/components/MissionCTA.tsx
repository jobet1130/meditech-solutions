'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartPulse, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function MissionCTA({ 
  title = 'Empowering Healthcare Through Innovation', 
  description = 'We are committed to transforming healthcare delivery through cutting-edge technology solutions that improve patient outcomes, streamline operations, and enhance the provider experience.',
  primaryButton = { text: 'Get Started', href: '/contact' },
  secondaryButton = { text: 'Learn More', href: '/about' }
}: CTAProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
          <div className="h-12 bg-blue-600 rounded-lg w-48 mx-auto"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <HeartPulse className="h-10 w-10 text-blue-600" aria-hidden="true" />
            <span className="ml-2 text-sm font-semibold text-blue-600 tracking-wider">
              OUR MISSION
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              {secondaryButton.text}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
