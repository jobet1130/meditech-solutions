'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    // This will only run on the client side after hydration
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  const navigation = {
    solutions: [
      { name: 'Electronic Health Records', href: '/solutions/ehr' },
      { name: 'Practice Management', href: '/solutions/practice-management' },
      { name: 'Telehealth', href: '/solutions/telehealth' },
      { name: 'Medical Billing', href: '/solutions/medical-billing' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    support: [
      { name: 'Help Center', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'HIPAA Compliance', href: '/hipaa' },
      { name: 'Cookies', href: '/cookies' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-1.5 xl:col-span-1">
            <Link href="/" className="text-lg font-bold text-white">
              Meditech Solutions
            </Link>
            <p className="text-gray-300 text-xs">
              Empowering healthcare providers with innovative technology solutions for better patient care.
            </p>
            <div className="flex space-x-3 pt-1">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-2 space-y-2">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-2 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-2 space-y-2">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-2 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-3 border-t border-gray-700 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-md p-1.5">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div className="ml-2">
                <h3 className="text-xs font-medium text-white">Call us</h3>
                <p className="mt-0.5 text-xs text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-md p-1.5">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div className="ml-2">
                <h3 className="text-xs font-medium text-white">Email us</h3>
                <p className="mt-0.5 text-xs text-gray-400">info@meditechsolutions.com</p>
              </div>
            </div>
            <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-md p-1.5">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div className="ml-2">
                <h3 className="text-xs font-medium text-white">Visit us</h3>
                <p className="mt-0.5 text-xs text-gray-400">123 Healthcare Ave, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-3 pt-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {currentYear || new Date().getFullYear()} Meditech Solutions, Inc. All rights reserved.
            </p>
            <div className="mt-1 md:mt-0">
              <p className="text-xs text-gray-500 flex flex-wrap justify-center gap-x-2 gap-y-0">
                <span>HIPAA Compliant</span>
                <span className="hidden md:inline">•</span>
                <span>SOC 2 Type II Certified</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
