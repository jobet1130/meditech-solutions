import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />
      <FeatureSection />
      <Testimonials />
      <CTASection />
    </main>
  );
}
