import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The healthcare management system has transformed how we handle patient records. It's intuitive and saves us hours of paperwork.",
    author: "Dr. James Wilson",
    role: "Chief of Medicine, City Hospital",
    rating: 5
  },
  {
    quote: "As a nurse, I appreciate how the platform streamlines communication between departments. It's made patient care more efficient.",
    author: "Maria Garcia",
    role: "Senior Nurse",
    rating: 5
  },
  {
    quote: "The telemedicine features have been a game-changer for our rural clinic. Our patients now have access to specialists they couldn't reach before.",
    author: "Dr. Robert Chen",
    role: "Clinic Director",
    rating: 4
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from healthcare professionals who trust our solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
