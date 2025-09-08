'use client';

import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  ShieldCheck, 
  Activity, 
  Brain, 
  Stethoscope, 
  LineChart, 
  ArrowRight,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Patient-Centric Care',
    description: 'Transform patient experiences with our intuitive platform that puts patient well-being at the forefront of healthcare delivery.',
    icon: HeartPulse,
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-gradient-to-br from-pink-50 to-white',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'HIPAA, GDPR, and SOC 2 compliant solutions ensuring the highest standards of data protection and privacy.',
    icon: ShieldCheck,
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
  },
  {
    title: 'Advanced Analytics',
    description: 'Real-time insights and predictive analytics to drive data-informed clinical and operational decisions.',
    icon: Activity,
    color: 'from-purple-500 to-indigo-500',
    bg: 'bg-gradient-to-br from-purple-50 to-white',
  },
  {
    title: 'AI-Enhanced Diagnostics',
    description: 'Cutting-edge artificial intelligence that supports clinicians with faster, more accurate patient assessments.',
    icon: Brain,
    color: 'from-emerald-500 to-teal-500',
    bg: 'bg-gradient-to-br from-emerald-50 to-white',
  },
  {
    title: 'Integrated Telehealth',
    description: 'Seamless virtual care platform connecting patients and providers with enterprise-grade video and messaging.',
    icon: Stethoscope,
    color: 'from-indigo-500 to-violet-500',
    bg: 'bg-gradient-to-br from-indigo-50 to-white',
  },
  {
    title: 'Performance Intelligence',
    description: 'Comprehensive analytics dashboard for monitoring and optimizing healthcare delivery metrics and outcomes.',
    icon: LineChart,
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-gradient-to-br from-amber-50 to-white',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    } 
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2
    }
  }
};

export default function FeatureSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-4 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto mb-6"></div>
            <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-16 w-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-6"></div>
                <div className="h-7 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600 mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Enterprise-Grade Healthcare Solutions
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming Healthcare Through Innovation
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Empowering healthcare providers with cutting-edge technology to deliver exceptional patient care and operational excellence.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/solutions" 
              className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 group transition-colors"
            >
              Explore all features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover="hover"
                className={`${feature.bg} p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden relative group`}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${feature.color}"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-blue-600 mb-6 shadow-sm">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Trusted by Leading Healthcare Providers
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to transform your healthcare practice?
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust our platform to deliver exceptional patient care and streamline their operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/demo" 
                className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-800 group transition-colors"
              >
                Watch Demo
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-100 opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
}
