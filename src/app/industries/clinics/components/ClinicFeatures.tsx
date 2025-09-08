import React from 'react';
import { CheckCircleIcon, ClockIcon, UserGroupIcon, ChartBarIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Streamlined Scheduling',
    description: 'Reduce no-shows and optimize your clinic\'s schedule with our intelligent booking system.',
    icon: ClockIcon,
  },
  {
    name: 'Patient Management',
    description: 'Maintain comprehensive patient records and streamline check-in processes.',
    icon: UserGroupIcon,
  },
  {
    name: 'Billing & Insurance',
    description: 'Simplify billing, claims processing, and payment collections.',
    icon: ChartBarIcon,
  },
  {
    name: 'E-Prescriptions',
    description: 'Send prescriptions directly to pharmacies with our e-prescription system.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Secure Data',
    description: 'HIPAA-compliant solutions to protect patient information.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Mobile Access',
    description: 'Manage your clinic on-the-go with our mobile-friendly platform.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function ClinicFeatures() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your clinic efficiently
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive suite of tools is designed to help clinics of all sizes provide better patient care.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
