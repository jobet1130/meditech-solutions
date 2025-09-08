'use client';

import { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ 
  children, 
  title = 'MediTech Solutions - Modern Healthcare Technology',
  description = 'Empowering healthcare providers with innovative technology solutions that improve patient outcomes and streamline clinical operations.'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
