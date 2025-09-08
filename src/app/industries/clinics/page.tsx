'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import components with SSR disabled for better performance
const ClinicHero = dynamic(() => import('./components/ClinicHero'), { ssr: true });
const ClinicFeatures = dynamic(() => import('./components/ClinicFeatures'), { ssr: true });
const ClinicTestimonials = dynamic(() => import('./components/ClinicTestimonials'), { ssr: true });
const ClinicCTA = dynamic(() => import('./components/ClinicCTA'), { ssr: true });

export default function ClinicsPage() {
  return (
    <main className="flex-1">
      <ClinicHero />
      <ClinicFeatures />
      <ClinicTestimonials />
      <ClinicCTA />
    </main>
  );
}
