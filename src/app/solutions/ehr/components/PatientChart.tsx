'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { VitalsWidget } from './VitalsWidget';
import { MedicationList } from './MedicationList';
import { LabResults } from './LabResults';
import { AppointmentScheduler } from './AppointmentScheduler';
import { ClinicalNotes } from './ClinicalNotes';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  FileText, 
  Activity, 
  HeartPulse, 
  Calendar, 
  User, 
  Stethoscope,
  Pill,
  FlaskConical,
  FileSignature,
  ChevronRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type TabType = 'overview' | 'vitals' | 'medications' | 'labs' | 'notes' | 'appointments';

interface PatientChartProps {
  patientName: string;
  patientId: string;
  dateOfBirth: string;
  gender: string;
  primaryPhysician?: string;
  lastVisit?: string;
  nextAppointment?: string;
  allergies?: string[];
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export function PatientChart({ 
  patientName, 
  patientId, 
  dateOfBirth, 
  gender,
  lastVisit = '2023-11-15',
  nextAppointment = '2023-12-10'
}: PatientChartProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const formattedDob = formatDate(dateOfBirth);
  const formattedLastVisit = lastVisit ? formatDate(lastVisit) : 'N/A';
  const formattedNextAppointment = nextAppointment ? formatDate(nextAppointment) : 'Not scheduled';

  return (
    <Card className="w-full overflow-hidden border border-gray-200 shadow-sm">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-gray-100 p-4">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <CardTitle className="text-xl font-semibold text-gray-900">{patientName}</CardTitle>
                <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                  {gender}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                <span>MRN: {patientId}</span>
                <span>DOB: {formattedDob}</span>
                <span>Age: {new Date().getFullYear() - new Date(dateOfBirth).getFullYear()} years</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-3 md:mt-0">
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <FileText className="h-4 w-4 mr-2" /> View Full Chart
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Stethoscope className="h-4 w-4 mr-2" /> Call Doctor
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="h-4 w-4 mr-2" /> New Note
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <Tabs 
        value={activeTab} 
        onValueChange={(value) => setActiveTab(value as TabType)}
        className="w-full bg-gray-50 border-b border-gray-100"
      >
        <div className="px-4">
          <TabsList className="w-full flex justify-start overflow-x-auto py-1 bg-transparent h-auto">
            <TabsTrigger value="overview">
              <Activity className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="vitals">
              <HeartPulse className="h-4 w-4 mr-2" />
              Recent Vitals
            </TabsTrigger>
            <TabsTrigger value="medications">
              <Pill className="h-4 w-4 mr-2" />
              Medications
            </TabsTrigger>
            <TabsTrigger value="labs">
              <FlaskConical className="h-4 w-4 mr-2" />
              Labs
            </TabsTrigger>
            <TabsTrigger value="notes">
              <FileSignature className="h-4 w-4 mr-2" />
              Clinical Notes
            </TabsTrigger>
            <TabsTrigger value="appointments">
              <Calendar className="h-4 w-4 mr-2" />
              Appointments
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-4">
          <TabsContent value="overview">
            <Card className="mb-6">
              <CardHeader className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Patient Summary</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    View Full Summary <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Last Visit</h4>
                    <p className="text-gray-900">{formattedLastVisit}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Next Appointment</h4>
                    <p className="text-gray-900">{formattedNextAppointment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vitals">
            <VitalsWidget detailed />
          </TabsContent>

          <TabsContent value="medications">
            <MedicationList 
              medications={[]}
              canEdit={true}
              showFilters={true}
              showActions={true}
            />
          </TabsContent>

          <TabsContent value="labs">
            <LabResults results={[]} />
          </TabsContent>

          <TabsContent value="notes">
            <ClinicalNotes notes={[]} />
          </TabsContent>

          <TabsContent value="appointments">
            <AppointmentScheduler appointments={[]} />
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
}
