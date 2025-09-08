import React from 'react';
import Link from 'next/link';

export default function ClinicCTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to transform your clinic?</span>
          <span className="block">Get started today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          Join thousands of healthcare providers who trust our solutions to power their practices.
        </p>
        <Link
          href="/contact"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Request a Demo
        </Link>
        <div className="mt-6">
          <p className="text-sm text-blue-200">
            Or call us at{' '}
            <a href="tel:+18005551234" className="text-white font-medium hover:text-blue-100">
              (800) 555-1234
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
