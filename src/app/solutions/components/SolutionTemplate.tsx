import Image from 'next/image';
import { 
  CheckCircleIcon, 
  ArrowPathIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  LockClosedIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';
import CTASection from './CTASection';
import { motion } from 'framer-motion';

interface SolutionTemplateProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  imagePath: string;
  imageAlt: string;
}

export default function SolutionTemplate({
  title,
  description,
  features,
  benefits,
  imagePath,
  imageAlt,
}: SolutionTemplateProps) {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Healthcare Practice</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our EHR solution delivers measurable value to healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const icons = [
                  <ArrowPathIcon key="workflow" className="h-8 w-8 text-blue-600" />,
                  <ShieldCheckIcon key="safety" className="h-8 w-8 text-blue-600" />,
                  <DocumentCheckIcon key="compliance" className="h-8 w-8 text-blue-600" />,
                  <ChartBarIcon key="analytics" className="h-8 w-8 text-blue-600" />,
                  <UserGroupIcon key="coordination" className="h-8 w-8 text-blue-600" />,
                  <LockClosedIcon key="security" className="h-8 w-8 text-blue-600" />
                ];
                
                const titles = [
                  'Streamlined Workflows',
                  'Enhanced Patient Safety',
                  'Regulatory Compliance',
                  'Improved Care Quality',
                  'Better Coordination',
                  'Secure Access'
                ];
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                        {icons[index % icons.length]}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {titles[index % titles.length]}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit}
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center text-blue-600 font-medium">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to transform your healthcare practice?"
        description="Schedule a demo today to see how our solutions can work for you."
        primaryButton={{
          text: "Request a Demo",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/solutions"
        }}
      />
    </main>
  );
}
