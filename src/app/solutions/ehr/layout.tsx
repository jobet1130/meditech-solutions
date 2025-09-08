import { Metadata } from 'next';
import { metadata as ehrMetadata } from './metadata';

export const metadata: Metadata = ehrMetadata;

export default function EHRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
