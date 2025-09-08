import { Metadata } from 'next';
import Hero from '@/components/about/Hero';
import MissionVision from '@/components/about/MissionVision';
import TeamSection from '@/components/about/TeamSection';
import Stats from '@/components/about/Stats';
import Testimonials from '@/components/about/Testimonials';

export const metadata: Metadata = {
  title: 'About Us - Meditech Solutions',
  description: 'Learn about Meditech Solutions and our commitment to revolutionizing healthcare through technology.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <MissionVision />
      <TeamSection />
      <Stats />
      <Testimonials />
    </div>
  );
}
