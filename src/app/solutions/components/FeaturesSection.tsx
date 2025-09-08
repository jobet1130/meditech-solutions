'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaSyncAlt, FaUserMd } from 'react-icons/fa';

const features = [
  {
    name: 'Enterprise Security',
    description: 'End-to-end encryption and HIPAA compliance to protect sensitive patient data at all times.',
    icon: FaShieldAlt,
  },
  {
    name: 'Advanced Analytics',
    description: 'Powerful analytics tools to derive actionable insights from your healthcare data.',
    icon: FaChartLine,
  },
  {
    name: 'Seamless Integration',
    description: 'Easily integrates with your existing systems and third-party applications.',
    icon: FaSyncAlt,
  },
  {
    name: 'Clinician Focused',
    description: 'Designed by healthcare professionals to enhance clinical workflows and patient care.',
    icon: FaUserMd,
  },
];

export default function FeaturesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Why Choose Our Solutions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            Our healthcare technology solutions are designed to address the unique challenges of modern healthcare delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:flex-shrink-0 lg:rounded-r-none lg:rounded-l-2xl bg-gradient-to-br from-blue-600 to-blue-800">
              <div className="flow-root">
                <div>
                  <h3 className="text-2xl font-bold text-white">Comprehensive Platform</h3>
                  <p className="mt-4 text-lg text-blue-100">
                    Our integrated platform connects all aspects of healthcare delivery, from patient intake to discharge and beyond.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      'Unified patient records',
                      'Streamlined workflows',
                      'Real-time collaboration',
                      'Regulatory compliance'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <p className="ml-3 text-base text-blue-100">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex items-center bg-white">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Built for Healthcare</h3>
                <p className="mt-4 text-lg text-gray-500">
                  Our solutions are designed specifically for healthcare providers, with features that address the unique needs of the industry.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <FaUserMd className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Clinician Friendly</h4>
                      <p className="mt-1 text-gray-500">Intuitive interfaces designed with clinician input</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <FaShieldAlt className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Secure by Design</h4>
                      <p className="mt-1 text-gray-500">Enterprise-grade security and compliance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
