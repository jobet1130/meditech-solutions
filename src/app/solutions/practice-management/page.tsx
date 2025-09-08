import type { Metadata } from 'next';
import SolutionTemplate from '../components/SolutionTemplate';
import WorkflowSection from './components/WorkflowSection';
import TestimonialsSection from './components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Practice Management Solution | Meditech Solutions',
  description: 'Streamline your medical practice operations with our comprehensive practice management solution.',
  openGraph: {
    title: 'Practice Management Solution | Meditech Solutions',
    description: 'Streamline your medical practice operations with our comprehensive practice management solution.',
    url: 'https://meditech-solutions.com/solutions/practice-management',
    siteName: 'Meditech Solutions',
    images: [
      {
        url: '/images/og-practice-management.jpg',
        width: 1200,
        height: 630,
        alt: 'Practice Management Solution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practice Management Solution | Meditech Solutions',
    description: 'Streamline your medical practice with our comprehensive practice management solution. Improve efficiency, reduce administrative burden, and enhance patient care.',
    images: ['/images/og-practice-management.jpg'],
  },
  alternates: {
    canonical: 'https://meditech-solutions.com/solutions/practice-management',
  },
  keywords: [
    'medical practice management',
    'healthcare software',
    'medical office management',
    'practice management system',
    'medical office software',
  ],
};

import { ArrowPathIcon, ShieldCheckIcon, DocumentCheckIcon, ChartBarIcon, UserGroupIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';

export default function PracticeManagementPage() {
  const benefits = [
    {
      title: "Streamlined Operations",
      description: "Automate routine tasks and reduce administrative burden with our intelligent workflow solutions.",
      icon: <ArrowPathIcon className="h-6 w-6" />,
      stats: "Up to 40% time savings"
    },
    {
      title: "Compliance & Security",
      description: "Stay compliant with healthcare regulations and protect patient data with enterprise-grade security.",
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      stats: "HIPAA & GDPR compliant"
    },
    {
      title: "Comprehensive Documentation",
      description: "Efficiently manage patient records with customizable templates and easy-to-use interfaces.",
      icon: <DocumentCheckIcon className="h-6 w-6" />
    },
    {
      title: "Actionable Insights",
      description: "Make data-driven decisions with real-time analytics and comprehensive reporting tools.",
      icon: <ChartBarIcon className="h-6 w-6" />,
      stats: "30+ built-in reports"
    },
    {
      title: "Team Collaboration",
      description: "Enhance care coordination with seamless communication and task management features.",
      icon: <UserGroupIcon className="h-6 w-6" />
    },
    {
      title: "Enterprise Security",
      description: "Protect sensitive data with bank-level encryption and advanced access controls.",
      icon: <LockClosedIcon className="h-6 w-6" />
    }
  ];

  return (
    <SolutionTemplate
      title="Practice Management Solution"
      description="Optimize your medical practice operations with our comprehensive practice management solution. From appointment scheduling to billing and reporting, our platform streamlines administrative tasks so you can focus on patient care."
      imagePath="/images/practice-management-hero.jpg"
      imageAlt="Practice Management Dashboard"
    >
      <div className="space-y-12 md:space-y-14">
        <BenefitsSection benefits={benefits} />
        <WorkflowSection />
        <div>
          <PricingSection />
          <div className="mt-2">
            <TestimonialsSection />
          </div>
        </div>
      </div>
    </SolutionTemplate>
  );
}
