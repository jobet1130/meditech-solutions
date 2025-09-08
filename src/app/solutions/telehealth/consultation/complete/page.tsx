'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, MessageSquare, Calendar, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ConsultationCompletePage() {
  const router = useRouter();
  
  // Mock consultation data - in a real app, this would come from your backend
  const consultation = {
    id: 'CONS-2023-10-30-001',
    date: new Date().toISOString(),
    duration: '24:35',
    provider: 'Dr. Sarah Chen',
    nextAppointment: '2023-11-27T14:30:00',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle2 className="h-12 w-12 text-green-300" />
          </div>
          <h1 className="text-2xl font-bold text-center">Consultation Complete</h1>
          <p className="text-center text-blue-100 mt-2">
            Thank you for using Meditech Telehealth
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h2 className="font-semibold text-gray-800 mb-3">Consultation Details</h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{consultation.duration} minutes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Provider</p>
                  <p className="font-medium">{consultation.provider}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Appointment</p>
                  <p className="font-medium">
                    {formatDate(consultation.nextAppointment)} at {formatTime(consultation.nextAppointment)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Next Steps
            </h3>
            <ul className="space-y-2 text-sm text-amber-700">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2"></span>
                <span>Your prescription has been sent to your preferred pharmacy.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2"></span>
                <span>Check your email for a summary of this visit.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2"></span>
                <span>Please complete the post-visit survey to help us improve our service.</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <Button 
              variant="outline" 
              className="w-full flex flex-col items-center justify-center h-24"
              asChild
            >
              <Link href="/messages">
                <MessageSquare className="h-6 w-6 mb-2 text-blue-600" />
                <span className="text-sm">Message Provider</span>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex flex-col items-center justify-center h-24"
              asChild
            >
              <Link href="/appointments">
                <Calendar className="h-6 w-6 mb-2 text-blue-600" />
                <span className="text-sm">Schedule Follow-up</span>
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex flex-col items-center justify-center h-24"
              asChild
            >
              <Link href="/medical-records">
                <FileText className="h-6 w-6 mb-2 text-blue-600" />
                <span className="text-sm">View Records</span>
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <p className="text-sm text-center text-gray-500 mb-4">
              How was your experience with this consultation?
            </p>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  className="text-2xl hover:text-yellow-400 focus:outline-none"
                  onClick={() => {
                    // Handle rating submission
                    console.log('Rated:', star);
                  }}
                >
                  {star <= 4 ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => router.push('/dashboard')}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

// Helper components
function User({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function AlertTriangle({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}
