import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "The hospital management system has transformed our operations. Patient care has never been more efficient.",
    author: 'Dr. Sarah Johnson',
    role: 'Chief of Medicine',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=60', // Female doctor
  },
  {
    id: 2,
    quote: "The emergency department solutions helped us reduce patient wait times by 40% while improving care quality.",
    author: 'Michael Chen',
    role: 'ER Director',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=60', // Asian doctor
  },
  {
    id: 3,
    quote: "Our staff is more productive and our patients are happier. The system is intuitive and reliable.",
    author: 'Jennifer Martinez',
    role: 'Nursing Supervisor',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&auto=format&fit=crop&q=60', // Hispanic nurse
  },
];

export default function HospitalTestimonials() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Healthcare Partners Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Trusted by leading healthcare providers worldwide
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600 text-lg leading-7">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.role}</p>
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
