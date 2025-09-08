'use client';

import { 
  CalendarIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  CreditCardIcon, 
  ChartBarIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    name: 'Appointment Scheduling',
    description: 'Easily book, reschedule, and manage patient appointments with our intuitive calendar interface that integrates with your existing systems.',
    benefits: [
      'Automated appointment reminders',
      'Customizable scheduling rules',
      'Real-time availability',
      'Multi-location support'
    ],
    icon: CalendarIcon,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    accent: 'ring-blue-500'
  },
  {
    id: 2,
    name: 'Patient Registration',
    description: 'Streamline patient onboarding with digital forms, automated data collection, and secure document management.',
    benefits: [
      'Customizable intake forms',
      'e-Signature support',
      'Insurance verification',
      'Document scanning'
    ],
    icon: UserGroupIcon,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    accent: 'ring-emerald-500'
  },
  {
    id: 3,
    name: 'Clinical Documentation',
    description: 'Create, manage, and store comprehensive patient records with our intuitive, specialty-specific templates.',
    benefits: [
      'Custom templates',
      'Voice-to-text dictation',
      'E/M coding assistance',
      'e-Prescribing'
    ],
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-indigo-600',
    bg: 'bg-purple-50',
    accent: 'ring-purple-500'
  },
  {
    id: 4,
    name: 'Billing & Claims',
    description: 'Maximize revenue with automated claims processing, denial management, and patient billing solutions.',
    benefits: [
      'Claims scrubbing',
      'ERA/EFT processing',
      'Patient payment plans',
      'Denial management'
    ],
    icon: CreditCardIcon,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    accent: 'ring-amber-500'
  },
  {
    id: 5,
    name: 'Analytics & Reporting',
    description: 'Transform data into actionable insights with customizable dashboards and performance metrics.',
    benefits: [
      'Custom report builder',
      'Financial performance',
      'Clinical outcomes',
      'Regulatory compliance'
    ],
    icon: ChartBarIcon,
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    accent: 'ring-rose-500'
  },
];

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-advance the steps when isPlaying is true
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentStep = steps[activeStep];
  const Icon = currentStep.icon;


  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
            <ArrowPathIcon className="w-3.5 h-3.5 mr-1.5" />
            Streamlined Workflow
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Practice Workflow</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize your practice operations with our comprehensive management solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Steps Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-150 text-sm ${
                  activeStep === index
                    ? 'bg-white shadow-sm border-l-3 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeStep === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <div className="ml-3">
                    <h3 className={`font-medium ${
                      activeStep === index ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {step.name}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button 
                onClick={togglePlay}
                className="p-1.5 text-gray-500 hover:text-blue-600 transition-colors"
                aria-label={isPlaying ? 'Pause auto-play' : 'Auto-play workflow'}
              >
                <PlayCircleIcon className={`w-5 h-5 ${isPlaying ? 'text-blue-600' : ''}`} />
              </button>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                Contact Sales
                <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Step Content */}
          <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg ${currentStep.bg} mb-4`}>
                      <Icon className={`h-5 w-5 ${currentStep.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{currentStep.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{currentStep.description}</p>
                  </div>
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                    {activeStep + 1}/{steps.length}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">Key Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStep.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Ready to optimize your workflow?</h4>
                      <p className="text-xs text-gray-500">Schedule a personalized demo today.</p>
                    </div>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center px-4 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      Get Started
                      <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
