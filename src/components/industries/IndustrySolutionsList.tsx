import React from 'react';

interface Solution {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface IndustrySolutionsListProps {
  title: string;
  description: string;
  solutions: Solution[];
}

export default function IndustrySolutionsList({ title, description, solutions }: IndustrySolutionsListProps) {
  return (
    <div id="solutions" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {solutions.map((solution, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {solution.icon}
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{solution.name}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
