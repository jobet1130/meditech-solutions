'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Comprehensive Solutions',
    description: 'End-to-end healthcare technology solutions tailored to your specific needs and workflows.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Regulatory Compliance',
    description: 'Stay compliant with healthcare regulations including HIPAA, GDPR, and other industry standards.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Improved Efficiency',
    description: 'Streamline operations and reduce administrative burden with our intuitive platforms.',
    icon: ClockIcon,
  },
  {
    name: 'Patient-Centered Care',
    description: 'Enhance patient engagement and outcomes with our patient-focused solutions.',
    icon: UserGroupIcon,
  },
];

const industries = [
  {
    name: 'Hospitals',
    description: 'Comprehensive solutions for large healthcare systems and hospitals.',
    href: '/industries/hospitals',
  },
  {
    name: 'Clinics',
    description: 'Efficient practice management for multi-specialty clinics.',
    href: '/industries/clinics',
  },
  {
    name: 'Private Practices',
    description: 'Tailored solutions for independent healthcare providers.',
    href: '/industries/private-practices',
  },
  {
    name: 'Specialty Care',
    description: 'Specialized tools for various medical specialties.',
    href: '/industries/specialty-care',
  },
];

export default function IndustryFeatures() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industries</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solutions for Every Healthcare Setting
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our healthcare technology solutions are designed to meet the unique needs of various healthcare providers.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
                <p className="text-lg text-gray-500">
                  We understand that each healthcare setting has unique challenges. Our approach combines deep industry knowledge with cutting-edge technology to deliver solutions that drive results.
                </p>
                
                <div className="mt-8 space-y-6">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex items-start">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-900">{feature.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Explore by Industry</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <motion.div
                      key={industry.name}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="px-6 py-5">
                        <h3 className="text-lg font-medium text-gray-900">{industry.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{industry.description}</p>
                        <div className="mt-4">
                          <a
                            href={industry.href}
                            className="text-blue-600 hover:text-blue-500 text-sm font-medium inline-flex items-center"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
