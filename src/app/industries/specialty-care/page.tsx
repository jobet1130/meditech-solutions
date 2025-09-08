'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const SpecialtyCareHero = dynamic(
  () => import('./components/SpecialtyCareHero'),
  { ssr: false }
);

const SpecialtyCareFeatures = dynamic(
  () => import('./components/SpecialtyCareFeatures'),
  { ssr: false }
);

const SpecialtyCareTestimonials = dynamic(
  () => import('./components/SpecialtyCareTestimonials'),
  { ssr: false }
);

const SpecialtyCareCTA = dynamic(
  () => import('./components/SpecialtyCareCTA'),
  { ssr: false }
);

export default function SpecialtyCarePage() {
  return (
    <main className="flex-1">
      <SpecialtyCareHero />
      <SpecialtyCareFeatures />
      <SpecialtyCareTestimonials />
      <SpecialtyCareCTA />
    </main>
  );
}
