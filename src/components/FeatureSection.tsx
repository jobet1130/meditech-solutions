'use client';

import { motion } from 'framer-motion';
import { HeartPulse, ShieldCheck, Activity, Brain, Stethoscope, LineChart } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    title: 'Patient-Centric Care',
    description: 'Our platform prioritizes patient well-being with intuitive interfaces and comprehensive health tracking.',
    icon: HeartPulse,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'HIPAA Compliant',
    description: 'Fully compliant with healthcare regulations to ensure patient data security and privacy.',
    icon: ShieldCheck,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Real-time Analytics',
    description: 'Gain valuable insights with our advanced analytics dashboard for better decision-making.',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'AI-Powered Diagnostics',
    description: 'Leverage artificial intelligence for faster and more accurate patient assessments.',
    icon: Brain,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Telemedicine Ready',
    description: 'Seamless virtual consultations with our integrated telemedicine solutions.',
    icon: Stethoscope,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Performance Tracking',
    description: 'Monitor and improve healthcare outcomes with detailed performance metrics.',
    icon: LineChart,
    color: 'bg-amber-50 text-amber-600',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="h-14 w-14 bg-gray-200 rounded-2xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to deliver exceptional patient care and streamline your practice
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${feature.color}`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
