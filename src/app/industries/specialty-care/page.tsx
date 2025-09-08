import React from 'react';
import IndustryHero from '@/components/industries/IndustryHero';
import IndustrySolutionsList from '@/components/industries/IndustrySolutionsList';
import IndustryCaseStudiesList from '@/components/industries/IndustryCaseStudiesList';
import { HeartIcon, EyeIcon, BrainIcon, BoneIcon } from 'lucide-react';

export default function SpecialtyCarePage() {
  const solutions = [
    {
      name: 'Cardiology Suite',
      description: 'Comprehensive cardiac care management and monitoring solutions.',
      icon: <HeartIcon className="h-6 w-6" />,
    },
    {
      name: 'Ophthalmology Tools',
      description: 'Specialized tools for eye care professionals and vision centers.',
      icon: <EyeIcon className="h-6 w-6" />,
    },
    {
      name: 'Neurology Systems',
      description: 'Advanced solutions for neurological assessment and monitoring.',
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      name: 'Orthopedics Platform',
      description: 'Specialized tools for orthopedic practices and rehabilitation.',
      icon: <BoneIcon className="h-6 w-6" />,
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Advanced Cardiac Center',
      description: 'Implementing a specialized cardiac care system for a leading heart center.',
      image: '/images/specialty-case-1.jpg',
      href: '/case-studies/cardiac-center',
    },
    {
      id: 2,
      title: 'Vision Care Network',
      description: 'Digital transformation for a multi-location ophthalmology practice.',
      image: '/images/specialty-case-2.jpg',
      href: '/case-studies/vision-care-network',
    },
  ];

  return (
    <>
      <IndustryHero
        title="Specialized Healthcare"
        description="Tailored technology solutions for specialty care providers to deliver exceptional, focused patient care with the latest medical technology."
        imageSrc="/images/specialty-hero.jpg"
      />
      
      <IndustrySolutionsList
        title="Specialty-Specific Solutions"
        description="Our specialized solutions are designed to meet the unique needs of various medical specialties."
        solutions={solutions}
      />

      <IndustryCaseStudiesList
        title="Specialty Care Success Stories"
        description="Discover how specialty care providers are enhancing patient outcomes with our solutions."
        caseStudies={caseStudies}
      />
    </>
  );
}
