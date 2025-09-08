'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const caseStudies = [
  {
    id: 1,
    title: 'Regional Hospital Network',
    description: 'How we helped a 5-hospital network improve patient outcomes by 30%',
    category: 'Hospitals',
    image: '/images/case-study-hospital.jpg',
    href: '/case-studies/hospital-network'
  },
  {
    id: 2,
    title: 'Multi-Specialty Clinic',
    description: 'Streamlining operations for a busy urban clinic with 50+ providers',
    category: 'Clinics',
    image: '/images/case-study-clinic.jpg',
    href: '/case-studies/multi-specialty-clinic'
  },
  {
    id: 3,
    title: 'Private Practice',
    description: 'Digital transformation for a growing private cardiology practice',
    category: 'Private Practices',
    image: '/images/case-study-practice.jpg',
    href: '/case-studies/cardiology-practice'
  },
];

export default function IndustryCaseStudies() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Success Stories</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Real Results for Healthcare Organizations
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            See how we&apos;ve helped healthcare providers like you achieve their goals.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 h-48 relative">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{caseStudy.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{caseStudy.description}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href={caseStudy.href}
                      className="text-base font-medium text-blue-600 hover:text-blue-500 inline-flex items-center"
                    >
                      Read case study <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-blue-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to transform your practice?
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                Schedule a personalized demo to see how our solutions can work for your healthcare organization.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                >
                  Request a Demo
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 bg-opacity-60 hover:bg-opacity-70"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
