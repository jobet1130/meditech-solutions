'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Our practice efficiency increased by 40% after implementation. The patient management tools are exceptional and the transition was seamless.",
    author: 'Dr. Sarah Johnson',
    role: 'Practice Owner',
    specialty: 'Dermatology',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: '40% More Efficient',
    rating: 5
  },
  {
    id: 2,
    quote: "The integrated billing system has reduced our claim denials by 65%. The platform's analytics have been invaluable for our practice growth.",
    author: 'Dr. Michael Chen',
    role: 'Medical Director',
    specialty: 'Pediatrics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: '65% Fewer Denials',
    rating: 5
  },
  {
    id: 3,
    quote: "As a solo practitioner, this platform gives me enterprise-level tools without the complexity. The 24/7 support is exceptional.",
    author: 'Dr. Emily Rodriguez',
    role: 'Sole Practitioner',
    specialty: 'Family Medicine',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    stats: '98% Uptime',
    rating: 5
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  },
};

export default function PrivatePracticeTestimonials() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join over 5,000 medical practices that trust our platform
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={item}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
              >
                <div className="mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-blue-600 font-medium">{testimonial.stats}</p>
                </div>
                
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="mt-6 flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
