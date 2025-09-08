'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  UserGroupIcon,
  ClockIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Patient Management',
    description: 'Comprehensive patient records, scheduling, and communication tools to enhance patient care and streamline your workflow.',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-blue-400',
  },
  {
    name: 'Efficient Scheduling',
    description: 'Intuitive calendar system with automated reminders to reduce no-shows and optimize your daily schedule.',
    icon: ClockIcon,
    color: 'from-green-500 to-green-400',
  },
  {
    name: 'Billing & Insurance',
    description: 'Seamless billing, claims processing, and insurance management to maximize your practice\'s revenue.',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-purple-400',
  },
  {
    name: 'Practice Analytics',
    description: 'Powerful reporting tools to track performance, identify trends, and make data-driven decisions.',
    icon: ChartBarIcon,
    color: 'from-amber-500 to-amber-400',
  },
  {
    name: 'HIPAA Compliance',
    description: 'Enterprise-grade security and compliance features to protect patient data and meet regulatory requirements.',
    icon: ShieldCheckIcon,
    color: 'from-emerald-500 to-emerald-400',
  },
  {
    name: 'Mobile Access',
    description: 'Manage your practice on-the-go with our secure mobile application for iOS and Android devices.',
    icon: DevicePhoneMobileIcon,
    color: 'from-rose-500 to-rose-400',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivatePracticeFeatures() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-4 pb-8 sm:pt-6 sm:pb-12 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
            Practice Excellence
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Enterprise-Grade Solutions for <span className="text-blue-600">Healthcare Professionals</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your practice with our comprehensive suite of tools designed to enhance patient care, streamline operations, and drive practice growth.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-lg hover:ring-gray-200"
              >
                <div className="absolute -top-6 right-6 h-14 w-14 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg shadow-blue-100/50 ring-1 ring-gray-900/5 flex items-center justify-center">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Discover more
                    <svg 
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive Practice Management</h3>
              <p className="mt-4 text-gray-600">
                Our platform includes everything you need to run a successful practice, with seamless integration across all features.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {['Secure Messaging', 'Telehealth', 'Analytics', 'E-Prescribing'].map((item) => (
                  <div key={item} className="flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Schedule a Demo
                </a>
                <p className="mt-3 text-sm text-gray-500">
                  See how our platform can transform your practice
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
