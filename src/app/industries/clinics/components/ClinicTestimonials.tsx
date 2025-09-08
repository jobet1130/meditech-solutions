import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Our clinic's efficiency has improved by 50% since implementing this system. The patient management tools are exceptional.",
    author: 'Dr. Emily Chen',
    role: 'Pediatric Clinic Owner',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=60',
    clinic: 'Sunshine Pediatrics',
    rating: 5
  },
  {
    id: 2,
    quote: "The billing and insurance features have saved us countless hours of paperwork. Highly recommended for busy practices.",
    author: 'Dr. Robert Johnson',
    role: 'Family Practice',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60',
    clinic: 'Family Health Center',
    rating: 5
  },
  {
    id: 3,
    quote: "Excellent customer support and an intuitive interface. Our staff was able to get up and running with minimal training.",
    author: 'Dr. Maria Garcia',
    role: 'Dental Clinic Director',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60',
    clinic: 'Bright Smile Dental',
    rating: 4
  },
];

export default function ClinicTestimonials() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Clinics Nationwide
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Join thousands of healthcare providers who trust our solutions
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="relative flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 h-8 w-8 text-blue-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600 text-lg leading-7 pl-6">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.clinic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
