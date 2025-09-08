'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { 
    name: 'Solutions', 
    href: '/solutions',
    children: [
      { name: 'Electronic Health Records', href: '/solutions/ehr' },
      { name: 'Practice Management', href: '/solutions/practice-management' },
      { name: 'Telehealth', href: '/solutions/telehealth' },
      { name: 'Medical Billing', href: '/solutions/medical-billing' },
    ]
  },
  { 
    name: 'Industries', 
    href: '/industries',
    children: [
      { name: 'Hospitals', href: '/industries/hospitals' },
      { name: 'Clinics', href: '/industries/clinics' },
      { name: 'Private Practices', href: '/industries/private-practices' },
      { name: 'Specialty Care', href: '/industries/specialty-care' },
    ]
  },
  { name: 'About Us', href: '/about-us' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MediTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${item.current ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons - Phone number only */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+18005551234" 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">(800) 555-1234</span>
              <span className="lg:hidden">Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${item.current ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <a 
                href="tel:+18005551234" 
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us: (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
