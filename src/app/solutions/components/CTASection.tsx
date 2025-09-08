'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: ButtonProps;
  secondaryButton: ButtonProps;
}

export default function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="relative bg-blue-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full text-blue-900"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,100 L100,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link
                href={primaryButton.href}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
              >
                {primaryButton.text}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link
                href={secondaryButton.href}
                className="px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-200"
              >
                {secondaryButton.text}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
