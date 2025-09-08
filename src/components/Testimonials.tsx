'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    content: 'This platform has transformed how we manage patient care. The intuitive interface and robust features have saved us countless hours of administrative work.',
    rating: 5,
    image: '/images/avatar-1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Practice Manager',
    content: 'The analytics dashboard provides insights we never had before. Our patient satisfaction scores have improved by 30% since implementation.',
    rating: 5,
    image: '/images/avatar-2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Amanda Rodriguez',
    role: 'Pediatric Specialist',
    content: 'The telemedicine integration is seamless. Being able to connect with my young patients and their families remotely has been a game-changer.',
    rating: 4,
    image: '/images/avatar-3.jpg'
  }
];

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="h-24 bg-gray-100 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of healthcare providers who trust our platform to deliver exceptional care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <Quote className="h-8 w-8 text-gray-200 mb-4" />
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
