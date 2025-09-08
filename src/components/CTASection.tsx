'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CTASection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-12 bg-blue-500 rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-6 bg-blue-400 rounded w-3/4 mx-auto mb-8"></div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="h-12 bg-white rounded-lg w-48 mx-auto sm:mx-0"></div>
              <div className="h-12 bg-transparent border-2 border-white rounded-lg w-36 mx-auto sm:mx-0"></div>
            </div>
            <div className="h-4 bg-blue-400 rounded w-1/2 mx-auto mt-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-blue-600/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-extrabold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Practice?
          </motion.h2>
          <motion.p 
            className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of healthcare providers who trust our platform to deliver exceptional patient care.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/demo" 
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </motion.div>
          <motion.p 
            className="mt-8 text-sm text-blue-100 opacity-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.p>
        </div>
      </div>
    </section>
  );
}
