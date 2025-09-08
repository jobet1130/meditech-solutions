'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Calendar, FileText, AlertTriangle, Pill, Activity, ClipboardList } from 'lucide-react';

interface VitalSigns {
  bloodPressure: string;
  heartRate: number;
  temperature: number;
  oxygenSaturation: number;
  respiratoryRate: number;
  lastUpdated: string;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  status: 'active' | 'completed' | 'discontinued';
}

interface PatientInfoProps {
  className?: string;
}

export function PatientInfo({ className }: PatientInfoProps) {
  // Mock data - in a real app, this would come from an API
  const patient = {
    name: 'Alex Johnson',
    age: 42,
    gender: 'Male',
    dob: '1981-06-15',
    bloodType: 'A+',
    allergies: ['Penicillin', 'Peanuts'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
    lastVisit: '2023-10-15',
    nextAppointment: '2023-11-20',
    photo: '/patient-avatar.jpg',
  };

  const vitalSigns: VitalSigns = {
    bloodPressure: '120/80',
    heartRate: 72,
    temperature: 98.6,
    oxygenSaturation: 98,
    respiratoryRate: 16,
    lastUpdated: '2023-10-30T14:30:00Z',
  };

  const medications: Medication[] = [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2023-01-15',
      status: 'active',
    },
    {
      id: '2',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: '2023-02-10',
      status: 'active',
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return formatDate(dateString);
  };

  return (
    <div className={cn("h-full flex flex-col", className)}>
      <Tabs defaultValue="overview" className="flex-1 flex flex-col">
        <div className="border-b px-4">
          <TabsList className="bg-transparent p-0 h-auto">
            <TabsTrigger 
              value="overview" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="history" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none"
            >
              History
            </TabsTrigger>
            <TabsTrigger 
              value="documents" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none"
            >
              Documents
            </TabsTrigger>
          </TabsList>
        </div>
        
        <ScrollArea className="flex-1">
          <TabsContent value="overview" className="m-0 p-4">
            <div className="space-y-6">
              {/* Patient Header */}
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={patient.photo} />
                  <AvatarFallback>
                    {patient.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{patient.name}</h3>
                  <div className="text-sm text-gray-500">
                    {patient.age}y • {patient.gender} • {patient.bloodType}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {patient.conditions.map((condition) => (
                      <Badge key={condition} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Allergies */}
              {patient.allergies.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-amber-500" />
                    Allergies
                  </h4>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {patient.allergies.map((allergy) => (
                      <Badge key={allergy} variant="outline" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Vital Signs */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500 flex items-center">
                    <Activity className="h-4 w-4 mr-2 text-blue-500" />
                    Vital Signs
                  </h4>
                  <span className="text-xs text-gray-400">
                    {formatTimeAgo(vitalSigns.lastUpdated)}
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <VitalSignCard 
                    label="BP" 
                    value={vitalSigns.bloodPressure} 
                    unit="mmHg" 
                  />
                  <VitalSignCard 
                    label="HR" 
                    value={vitalSigns.heartRate} 
                    unit="bpm" 
                  />
                  <VitalSignCard 
                    label="Temp" 
                    value={vitalSigns.temperature} 
                    unit="°F" 
                  />
                  <VitalSignCard 
                    label="SpO₂" 
                    value={vitalSigns.oxygenSaturation} 
                    unit="%" 
                  />
                </div>
              </div>

              {/* Medications */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-500 flex items-center">
                    <Pill className="h-4 w-4 mr-2 text-green-500" />
                    Active Medications
                  </h4>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    View All
                  </Button>
                </div>
                <div className="mt-2 space-y-2">
                  {medications.map((med) => (
                    <div key={med.id} className="text-sm p-2 bg-gray-50 rounded-md">
                      <div className="font-medium">{med.name}</div>
                      <div className="text-xs text-gray-500">
                        {med.dosage} • {med.frequency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="m-0 p-4">
            <div className="space-y-4">
              <h3 className="font-medium">Visit History</h3>
              <div className="space-y-2">
                <VisitItem 
                  date="2023-10-15"
                  reason="Follow-up: Hypertension"
                  provider="Dr. Sarah Chen"
                />
                <VisitItem 
                  date="2023-07-22"
                  reason="Annual Physical"
                  provider="Dr. Michael Rodriguez"
                />
                <VisitItem 
                  date="2023-04-05"
                  reason="Diabetes Management"
                  provider="Dr. Sarah Chen"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="documents" className="m-0 p-4">
            <div className="space-y-4">
              <h3 className="font-medium">Medical Documents</h3>
              <div className="space-y-2">
                <DocumentItem 
                  title="Lab Results - Blood Work"
                  type="Lab Results"
                  date="2023-10-10"
                />
                <DocumentItem 
                  title="Prescription - Lisinopril"
                  type="Prescription"
                  date="2023-09-28"
                />
                <DocumentItem 
                  title="Visit Summary - 08/15/2023"
                  type="Visit Summary"
                  date="2023-08-15"
                />
              </div>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
      
      <div className="border-t p-4">
        <Button className="w-full" size="sm">
          <ClipboardList className="h-4 w-4 mr-2" />
          Start SOAP Note
        </Button>
      </div>
    </div>
  );
}

function VitalSignCard({ label, value, unit }: { label: string; value: string | number; unit: string }) {
  return (
    <div className="bg-gray-50 p-2 rounded-md text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-sm font-medium">
        {value} <span className="text-xs text-gray-400">{unit}</span>
      </div>
    </div>
  );
}

function VisitItem({ date, reason, provider }: { date: string; reason: string; provider: string }) {
  return (
    <div className="flex items-start p-2 hover:bg-gray-50 rounded-md">
      <div className="bg-blue-50 p-2 rounded-md mr-3">
        <Calendar className="h-4 w-4 text-blue-600" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium">{reason}</div>
        <div className="text-xs text-gray-500">{provider}</div>
      </div>
      <div className="text-xs text-gray-400">
        {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </div>
    </div>
  );
}

function DocumentItem({ title, type, date }: { title: string; type: string; date: string }) {
  return (
    <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
      <div className="bg-blue-50 p-2 rounded-md mr-3">
        <FileText className="h-4 w-4 text-blue-600" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-gray-500">{type}</div>
      </div>
      <div className="text-xs text-gray-400">
        {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
      </div>
    </div>
  );
}
