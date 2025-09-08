"use client";

import { Target, Eye, Shield, Users } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const coreValues = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Mission",
    description: "To revolutionize healthcare delivery through cutting-edge technology that enhances patient outcomes and operational efficiency.",
    color: "blue",
    values: [
      "Advanced medical technology solutions",
      "Streamlined clinical workflows",
      "Data-driven healthcare insights"
    ]
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Our Vision",
    description: "To establish a new standard in healthcare technology, creating a future where quality care is accessible, efficient, and patient-centered.",
    color: "indigo",
    values: [
      "Global healthcare transformation",
      "Seamless care coordination",
      "Personalized patient experiences"
    ]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Our Values",
    description: "Guided by principles that define our commitment to excellence and ethical healthcare solutions.",
    color: "purple",
    values: [
      "Clinical excellence & innovation",
      "Patient-first philosophy",
      "Data security & compliance"
    ]
  }
];

const colorVariants = {
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    iconBg: 'bg-blue-600',
    text: 'text-blue-700',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300',
    accent: 'bg-blue-600',
    gradient: 'from-blue-600 to-blue-700'
  },
  indigo: {
    bg: 'bg-gradient-to-br from-indigo-50 to-white',
    iconBg: 'bg-indigo-600',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-300',
    accent: 'bg-indigo-600',
    gradient: 'from-indigo-600 to-indigo-700'
  },
  purple: {
    bg: 'bg-gradient-to-br from-purple-50 to-white',
    iconBg: 'bg-purple-600',
    text: 'text-purple-700',
    border: 'border-purple-200',
    hover: 'hover:border-purple-300',
    accent: 'bg-purple-600',
    gradient: 'from-purple-600 to-purple-700'
  }
};

interface CardProps {
  item: {
    color: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    values?: string[]; // Optional array of strings for values
  };
  index: number;
  controls: {
    opacity: number;
    y: number;
  };
}

const Card = ({ item, index, controls }: CardProps) => {
  const colors = colorVariants[item.color as keyof typeof colorVariants];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`h-full flex flex-col p-8 rounded-2xl border ${colors.border} ${colors.bg} ${colors.hover} transition-all duration-300 hover:shadow-lg`}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-2xl mb-6`}>
        {item.icon}
      </div>
      <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>{item.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
      <div className="mt-auto space-y-3">
        {item.values?.map((value, i) => (
          <div key={i} className="flex items-start">
            <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors.accent} mt-2.5 mr-3`}></div>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </div>
      <div className={`h-1 mt-6 rounded-full bg-gradient-to-r ${colors.gradient}`} style={{ width: '40px' }}></div>
    </motion.div>
  );
};

export default function MissionVision() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-blue-200 [mask-image:linear-gradient(0deg,white,transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Guiding Principles That Define Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to excellence in healthcare technology, driven by our core principles that shape every solution we create.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((item, index) => (
            <Card 
              key={index} 
              item={item} 
              index={index}
              controls={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 40
              }}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Our commitment to these principles has helped us build lasting relationships with healthcare providers worldwide, 
            delivering solutions that make a real difference in patient care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['HITRUST Certified', 'HIPAA Compliant', 'ISO 27001:2022'].map((badge, i) => (
              <span key={i} className="inline-flex items-center px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-700 border border-gray-200 shadow-sm">
                {badge}
              </span>
            ))}
          </div>
          
          <div className="mt-8 inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Join our mission to transform healthcare</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
