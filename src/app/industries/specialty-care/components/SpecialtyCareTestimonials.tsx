'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The cardiology-specific features have transformed how we manage our cardiac patients. The integration with our diagnostic equipment is seamless.",
    author: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    specialty: 'Cardiology Associates',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: '40% More Efficient',
    rating: 5
  },
  {
    id: 2,
    quote: "As a neurologist, I need specialized tools for my practice. This platform provides exactly what I need with an intuitive interface.",
    author: 'Dr. Michael Chen',
    role: 'Neurologist',
    specialty: 'NeuroCare Center',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    stats: '35% Time Saved',
    rating: 5
  },
  {
    id: 3,
    quote: "The ophthalmology module has everything we need, from visual field testing to surgical planning. Our practice has never been more efficient.",
    author: 'Dr. Emily Rodriguez',
    role: 'Ophthalmologist',
    specialty: 'Clear Vision Clinic',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    stats: '50% Faster Documentation',
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
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    }
  },
};

export default function SpecialtyCareTestimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-4 sm:pt-8 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Trusted by Healthcare Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear how our solutions are transforming specialty care practices across the country.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={item}
                className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:border-blue-100"
              >
                <div className="absolute -top-4 left-6 h-8 w-8 bg-white rotate-45 transform origin-center border-t border-l border-gray-100"></div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-12 w-12 rounded-full overflow-hidden relative ring-2 ring-white ring-offset-2">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">{testimonial.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-2 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      {testimonial.stats}
                    </p>
                  </div>
                  
                  <blockquote className="relative">
                    <div className="absolute -left-6 top-0 text-5xl text-blue-100 font-serif leading-none">&ldquo;</div>
                    <p className="text-gray-700 pl-2 relative z-10">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-600">Read full story</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-medium text-blue-700 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors duration-200"
            >
              Read more success stories
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
