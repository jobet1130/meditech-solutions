'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const PrivatePracticeHero = dynamic(
  () => import('./components/PrivatePracticeHero'),
  { ssr: false }
);

const PrivatePracticeFeatures = dynamic(
  () => import('./components/PrivatePracticeFeatures'),
  { ssr: false }
);

const PrivatePracticeTestimonials = dynamic(
  () => import('./components/PrivatePracticeTestimonials'),
  { ssr: false }
);

const PrivatePracticeCTA = dynamic(
  () => import('./components/PrivatePracticeCTA'),
  { ssr: false }
);

export default function PrivatePracticesPage() {
  return (
    <main className="flex-1">
      <PrivatePracticeHero />
      <PrivatePracticeFeatures />
      <PrivatePracticeTestimonials />
      <PrivatePracticeCTA />
    </main>
  );
}
