import React from 'react';
import HospitalHero from './components/HospitalHero';
import HospitalServices from './components/HospitalServices';
import HospitalFeatures from './components/HospitalFeatures';
import HospitalTestimonials from './components/HospitalTestimonials';
import HospitalStats from './components/HospitalStats';

export default function HospitalsPage() {
  return (
    <div className="bg-white">
      <HospitalHero
        title="Hospital Solutions"
        description="Transforming healthcare delivery with innovative technology solutions designed specifically for modern hospitals."
        imageSrc="/images/hero-hospital.jpg"
      />
      
      <HospitalServices />
      
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Healthcare Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our hospital solutions are designed to improve patient care, streamline operations, and enhance the overall healthcare experience.
            </p>
          </div>

          <div className="mt-12">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="mb-10 lg:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Fast Implementation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get up and running quickly with our easy-to-implement solutions that require minimal training.
                  </p>
                </div>
              </div>
              
              <div className="mb-10 lg:mb-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Secure & Compliant</h3>
                  <p className="mt-2 text-base text-gray-500">
                    HIPAA-compliant solutions with enterprise-grade security to protect sensitive patient data.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Cloud-Based</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Access your hospital&apos;s data securely from anywhere with our cloud-based platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <HospitalFeatures />
      <HospitalStats />
      <HospitalTestimonials />
      
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to transform your hospital?</span>
            <span className="block text-blue-600">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
