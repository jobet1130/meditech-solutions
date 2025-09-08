'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, easeInOut } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Family Physician',
    practice: 'HealthPlus Medical Group',
    content: 'Since implementing this practice management system, our administrative workload has decreased by 40%, allowing us to focus more on patient care.',
    image: '/images/dr_sarah.jpg',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Pediatrician',
    practice: 'Little Sprouts Pediatrics',
    content: 'The intuitive interface and robust features have transformed how we manage our practice. Highly recommended for any medical practice looking to modernize.',
    image: '/images/dr_chen.jpg',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Dermatologist',
    practice: 'SkinCare Specialists',
    content: 'The reporting tools have given us valuable insights into our practice performance, helping us make data-driven decisions.',
    image: '/images/dr_emily.jpg',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Testimonials</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Trusted by Healthcare Professionals</h2>
          <p className="mt-4 text-xl text-gray-600">
            See what medical professionals are saying about our practice management solution
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              variants={fadeInUp}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <Image
                      className="h-full w-full object-cover"
                      src={testimonial.image}
                      alt={`${testimonial.name} avatar`}
                      width={64}
                      height={64}
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <div className="flex ml-2 text-yellow-400">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <StarIcon key={star} className="h-5 w-5 flex-shrink-0" />
                      ))}
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.practice}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
