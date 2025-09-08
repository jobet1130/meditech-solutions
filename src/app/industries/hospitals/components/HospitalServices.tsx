'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

// Create a client component wrapper for the animated content
const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <motion.div 
      className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="-mt-6">
        <motion.div 
          className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg"
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 }
          }}
        >
          {service.icon}
        </motion.div>
        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.name}</h3>
        <p className="mt-3 text-base text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    name: 'Hospital Management System',
    description: 'Comprehensive solution for patient records, staff scheduling, and resource management.',
    icon: <ChartBarIcon className="h-8 w-8" />,
  },
  {
    name: 'Emergency Department Solutions',
    description: 'Streamline emergency care with real-time patient tracking and prioritization.',
    icon: <ClockIcon className="h-8 w-8" />,
  },
  {
    name: 'Patient Care Management',
    description: 'Enhance patient experience with our comprehensive care management solutions.',
    icon: <UserGroupIcon className="h-8 w-8" />,
  },
  {
    name: 'Medical Records Security',
    description: 'Secure and compliant medical records management with advanced encryption.',
    icon: <ShieldCheckIcon className="h-8 w-8" />,
  },
];

export default function HospitalServices() {
  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Hospital Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Comprehensive healthcare solutions tailored to your hospital&apos;s needs
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
