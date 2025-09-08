import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Management Solution | Meditech Solutions',
  description: 'Streamline your medical practice operations with our comprehensive practice management solution. Automate scheduling, billing, and patient management in one platform.',
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
    description: 'Streamline your medical practice operations with our comprehensive practice management solution.',
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
    'healthcare administration',
    'medical billing software',
    'patient management system',
    'medical office software',
  ],
};
