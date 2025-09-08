'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80',
    bio: 'Board-certified physician with 15+ years of experience in healthcare management and patient care.',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@meditech.com'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    bio: 'Technology visionary with expertise in healthcare IT systems and digital transformation.',
    linkedin: '#',
    twitter: '#',
    email: 'michael@meditech.com'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Nursing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    bio: 'Registered nurse with extensive experience in patient care and clinical operations.',
    linkedin: '#',
    twitter: '#',
    email: 'emily@meditech.com'
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=80',
    bio: 'Full-stack developer specializing in healthcare applications and data security.',
    linkedin: '#',
    twitter: '#',
    email: 'david@meditech.com'
  }
];

const useOnScreen = (ref: React.RefObject<HTMLElement | null>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-50px 0px' }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const TeamMember = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isOnScreen, index]);

  return (
    <div 
      ref={ref}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s, box-shadow 0.3s ease`
      }}
    >
      {/* Rest of the team member card */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index < 4}
          quality={90}
          unoptimized={member.image.startsWith('http')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10 bg-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium">{member.role}</p>
          </div>
          <div className="flex space-x-2">
            <a 
              href={member.linkedin} 
              className="text-gray-400 hover:text-blue-600 transition-colors"
              aria-label={`Connect with ${member.name} on LinkedIn`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-red-500 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
          <a 
            href={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 group"
          >
            View profile
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setIsVisible(true);
    }
  }, [isOnScreen]);

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Leadership Team
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            A diverse team of healthcare innovators and technology experts dedicated to transforming patient care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
        
        <div 
          className={`mt-16 text-center transition-all duration-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            transitionDelay: '200ms'
          }}
        >
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team brings together diverse expertise from healthcare, technology, and business to deliver exceptional results.
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Join Our Team
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
