'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface Solution {
  title: string;
  description: string;
  href: string;
  features: string[];
}

interface SolutionsGridProps {
  solutions: Solution[];
}

export default function SolutionsGrid({ solutions }: SolutionsGridProps) {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      }
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6"
          >
            Comprehensive Healthcare Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Enterprise-grade solutions designed to enhance patient care and streamline healthcare operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              custom={index % 3}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
              variants={cardVariants}
              className="group relative bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-50 hover:border-blue-50 overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  variants={itemVariants}
                >
                  {solution.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  variants={itemVariants}
                >
                  {solution.description}
                </motion.p>
                
                <motion.div 
                  className="mb-6 pt-6 border-t border-gray-100"
                  variants={itemVariants}
                >
                  <motion.h4 
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4"
                    variants={itemVariants}
                  >
                    Key Features
                  </motion.h4>
                  <motion.ul 
                    className="space-y-3"
                    variants={{
                      hidden: { opacity: 1 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {solution.features.slice(0, 3).map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { 
                            opacity: 1, 
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 24
                            }
                          }
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <motion.svg 
                            className="h-4 w-4 text-blue-500" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 500,
                              damping: 30
                            }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </motion.svg>
                        </div>
                        <span className="ml-3 text-gray-600 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  variants={itemVariants}
                >
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <motion.span
                      className="inline-flex items-center"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      Learn more
                      <svg 
                        className="ml-2 h-4 w-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
