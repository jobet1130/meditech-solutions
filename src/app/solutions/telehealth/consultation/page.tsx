'use client';

import { TelehealthDashboard } from '../components/features/TelehealthDashboard';
import { useRouter } from 'next/navigation';

export default function TelehealthConsultationPage() {
  const router = useRouter();

  const handleEndCall = () => {
    // In a real app, you might want to log the call end event
    console.log('Call ended');
    // Redirect to a post-call survey or summary page
    router.push('/solutions/telehealth/consultation/complete');
  };

  return (
    <div className="h-screen">
      <TelehealthDashboard onEndCall={handleEndCall} />
    </div>
  );
}
