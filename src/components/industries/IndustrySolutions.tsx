'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, UserGroupIcon, BeakerIcon, HeartIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Hospitals',
    description: 'Comprehensive solutions for large healthcare systems and academic medical centers.',
    icon: BuildingOfficeIcon,
    features: [
      'Enterprise EHR Integration',
      'Revenue Cycle Management',
      'Clinical Decision Support',
      'Interoperability Solutions'
    ],
    href: '/industries/hospitals'
  },
  {
    name: 'Clinics',
    description: 'Streamlined practice management for multi-specialty and primary care clinics.',
    icon: UserGroupIcon,
    features: [
      'Unified Practice Management',
      'Patient Portal',
      'Appointment Scheduling',
      'Billing & Claims'
    ],
    href: '/industries/clinics'
  },
  {
    name: 'Private Practices',
    description: 'Tailored solutions for independent healthcare providers and small practices.',
    icon: HeartIcon,
    features: [
      'EHR/EMR Solutions',
      'Practice Analytics',
      'Patient Engagement',
      'Telehealth Integration'
    ],
    href: '/industries/private-practices'
  },
  {
    name: 'Specialty Care',
    description: 'Specialized tools for cardiology, orthopedics, pediatrics, and more.',
    icon: BeakerIcon,
    features: [
      'Specialty-Specific Templates',
      'Diagnostic Integration',
      'Procedure Documentation',
      'Referral Management'
    ],
    href: '/industries/specialty-care'
  },
];

export default function IndustrySolutions() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tailored Solutions for Every Healthcare Setting
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our comprehensive suite of solutions is designed to address the unique challenges of different healthcare environments.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <solution.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{solution.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{solution.description}</p>
                    <ul className="mt-4 space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href={solution.href}
                        className="text-base font-medium text-blue-600 hover:text-blue-500"
                      >
                        Learn more<span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
