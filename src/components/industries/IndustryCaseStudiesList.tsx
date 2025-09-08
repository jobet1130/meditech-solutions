import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface IndustryCaseStudiesListProps {
  title: string;
  description: string;
  caseStudies: CaseStudy[];
}

export default function IndustryCaseStudiesList({ title, description, caseStudies }: IndustryCaseStudiesListProps) {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Case Studies</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 relative h-48 w-full">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a href={caseStudy.href} className="hover:underline">
                      Read case study
                    </a>
                  </p>
                  <a href={caseStudy.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{caseStudy.title}</p>
                    <p className="mt-3 text-base text-gray-500">{caseStudy.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                      <span>Read full story</span>
                      <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
