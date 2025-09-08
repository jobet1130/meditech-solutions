import SolutionsHero from './components/SolutionsHero';
import SolutionsGrid from './components/SolutionsGrid';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';

const solutions = [
  {
    title: 'Electronic Health Records',
    description: 'Streamline patient data management with our comprehensive EHR solution designed for modern healthcare providers.',
    href: '/solutions/ehr',
    features: ['Seamless data integration', 'Real-time updates', 'HIPAA compliant', 'Customizable templates']
  },
  {
    title: 'Telehealth Platform',
    description: 'Deliver exceptional virtual care with our secure, user-friendly telehealth solution.',
    href: '/solutions/telehealth',
    features: ['HD video conferencing', 'Secure messaging', 'Virtual waiting room', 'E-prescribing']
  },
  {
    title: 'Healthcare Analytics',
    description: 'Transform data into actionable insights with our advanced analytics platform.',
    href: '/solutions/analytics',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Performance metrics']
  },
  {
    title: 'Patient Portal',
    description: 'Empower patients with secure access to their health information and care team.',
    href: '/solutions/patient-portal',
    features: ['Appointment scheduling', 'Medical records access', 'Secure messaging', 'Bill pay']
  },
  {
    title: 'Hospital Management',
    description: 'Comprehensive solution for managing all aspects of hospital operations.',
    href: '/solutions/hospital-management',
    features: ['Patient flow management', 'Resource allocation', 'Billing & claims', 'Staff scheduling']
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security solutions to protect sensitive healthcare data.',
    href: '/solutions/security',
    features: ['HIPAA compliance', 'Data encryption', 'Access controls', 'Audit logging']
  }
];

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SolutionsHero 
        title="Healthcare Technology Solutions" 
        description="Innovative software solutions designed to transform healthcare delivery, improve patient outcomes, and streamline operations."
      />
      
      <SolutionsGrid solutions={solutions} />
      
      <FeaturesSection />
      
      <CTASection 
        title="Ready to transform your healthcare practice?"
        description="Schedule a demo today to see how our solutions can work for you."
        primaryButton={{ text: 'Request Demo', href: '/contact' }}
        secondaryButton={{ text: 'Contact Sales', href: '/contact' }}
      />
    </main>
  );
}
