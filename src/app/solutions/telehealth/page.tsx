'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Video, MessageSquare, Calendar, Users, Shield, FileText, CheckCircle2, ArrowRight, MonitorSmartphone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: Video,
    title: 'HD Video Consultations',
    description: 'Crystal clear video calls with screen sharing capabilities for better patient engagement.'
  },
  {
    icon: MessageSquare,
    title: 'Secure Messaging',
    description: 'HIPAA-compliant messaging for secure communication between providers and patients.'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Easy-to-use scheduling system with automated reminders and calendar integration.'
  },
  {
    icon: Users,
    title: 'Virtual Waiting Room',
    description: 'Professional waiting room experience for patients before their appointments.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security and compliance to protect sensitive health information.'
  },
  {
    icon: FileText,
    title: 'E-Prescriptions',
    description: 'Send electronic prescriptions directly to pharmacies with just a few clicks.'
  },
  {
    icon: MonitorSmartphone,
    title: 'Cross-Platform',
    description: 'Works seamlessly on desktop, tablet, and mobile devices for both providers and patients.'
  },
  {
    icon: CheckCircle2,
    title: 'Easy to Use',
    description: 'Intuitive interface designed for healthcare professionals and patients of all tech levels.'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Family Physician',
    content: 'The telehealth platform has transformed how I deliver care. My patients love the convenience, and I appreciate how easy it is to use.',
    avatar: '/images/testimonials/doctor-1.jpg'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Patient',
    content: 'As someone with mobility issues, being able to see my doctor from home has been life-changing. The video quality is excellent!',
    avatar: '/images/testimonials/patient-1.jpg'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Specialist',
    content: 'The integration with our EMR system is seamless, and the remote monitoring features have been invaluable for chronic care management.',
    avatar: '/images/testimonials/doctor-2.jpg'
  }
];

const faqs = [
  {
    question: 'Is the platform HIPAA compliant?',
    answer: 'Yes, our platform is fully HIPAA compliant with end-to-end encryption, secure data storage, and BAA agreements available.'
  },
  {
    question: 'Do patients need to download any software?',
    answer: 'No, patients can join video consultations directly from their web browser without any downloads. We also offer mobile apps for a better experience.'
  },
  {
    question: 'Can I integrate with my existing EMR/EHR system?',
    answer: 'Yes, we offer integration with most major EMR/EHR systems. Contact our support team to discuss your specific requirements.'
  },
  {
    question: 'What are the technical requirements?',
    answer: 'You just need a computer or mobile device with a webcam, microphone, and internet connection. We recommend using the latest version of Chrome, Firefox, or Safari.'
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up for an account, complete the verification process, and you can start seeing patients in minutes. Our team is available 24/7 to assist with onboarding.'
  }
];

export default function TelehealthPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Modern Telehealth Solutions for Healthcare Providers
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Deliver exceptional virtual care with our secure, user-friendly telehealth platform. Connect with patients through high-quality video, chat, and remote monitoring tools.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-semibold shadow-lg"
                onClick={() => router.push('/solutions/telehealth/consultation')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.1))]" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Virtual Care</h2>
            <p className="text-lg text-gray-600">Our comprehensive telehealth platform includes all the tools you need to deliver exceptional virtual care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/50 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get started with our telehealth platform in just a few simple steps.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Schedule an Appointment',
                description: 'Patients can easily book appointments through your online calendar or your staff can schedule on their behalf.'
              },
              {
                step: '2',
                title: 'Join the Consultation',
                description: 'Both provider and patient receive reminders and can join the video call with a single click at the scheduled time.'
              },
              {
                step: '3',
                title: 'Provide Care & Follow Up',
                description: 'Conduct the virtual visit, share prescriptions, and schedule follow-ups—all within the platform.'
              }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-6 rounded-full text-lg font-semibold"
              onClick={() => router.push('/solutions/telehealth/consultation')}
            >
              Try It Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-lg text-gray-600">See what our users say about our telehealth platform.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(testimonial.name) + '&background=random';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our telehealth platform.</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border-gray-200 hover:border-blue-200 transition-colors duration-200 overflow-hidden">
                  <Tabs defaultValue={index === 0 ? 'item-0' : undefined} className="w-full">
                    <TabsList className="w-full h-auto p-0 bg-transparent">
                      <TabsTrigger 
                        value={`item-${index}`}
                        className="w-full justify-between p-6 text-left font-normal text-base data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
                      >
                        <span>{faq.question}</span>
                        <svg 
                          className="w-5 h-5 ml-2 text-gray-400 transition-transform duration-200 group-data-[state=active]/trigger:rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value={`item-${index}`} className="px-6 pb-6 -mt-2 text-gray-600">
                      {faq.answer}
                    </TabsContent>
                  </Tabs>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg mb-6">Still have questions? Our team is here to help.</p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg font-semibold"
              onClick={() => router.push('/contact')}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Join thousands of healthcare providers delivering exceptional virtual care with our telehealth platform.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-semibold shadow-lg"
              onClick={() => router.push('/solutions/telehealth/consultation')}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => router.push('/demo')}
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
