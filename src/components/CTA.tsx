import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  className = '' 
}: CTAProps) {
  return (
    <div className={`bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-blue-600">{description}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              {buttonText}
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
