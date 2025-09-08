'use client';

import { Fragment } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SolutionTemplate from '../components/SolutionTemplate';
import { PatientChart } from './components/PatientChart';
import { MedicationList } from './components/MedicationList';
import { ClinicalNotes } from './components/ClinicalNotes';
import { LabResults } from './components/LabResults';
import { VitalsWidget } from './components/VitalsWidget';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import Link from 'next/link';
import { Settings } from 'lucide-react';

export default function EHRPage() {
  const patientData = {
    id: 'MRN-123456',
    name: 'John Doe',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    lastVisit: '2023-05-15',
    primaryPhysician: 'Dr. Sarah Johnson',
  };

  return (
    <Fragment>
      <SolutionTemplate
        title="Electronic Health Records (EHR)"
        description="Transform your healthcare practice with our state-of-the-art Electronic Health Records system. Streamline patient data management, improve care coordination, and enhance clinical decision-making with our intuitive, secure, and interoperable EHR solution."
        features={[
          'Comprehensive patient records management',
          'Intuitive charting and documentation',
          'e-Prescribing and medication management',
          'Lab integration and results management',
          'Customizable templates and forms',
          'Secure patient portal integration',
          'Mobile access for on-the-go care',
          'Real-time clinical decision support'
        ]}
        benefits={[
          'Improve clinical workflows and reduce administrative burden',
          'Enhance patient safety with accurate, up-to-date information',
          'Achieve Meaningful Use and MIPS compliance',
          'Reduce medical errors and improve care quality',
          'Enable better care coordination among providers',
          'Access patient records securely from anywhere',
        ]}
        imagePath="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
        imageAlt="EHR Dashboard showing patient records and charts"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Patient Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Electronic Health Records</h1>
              <p className="text-gray-600 mt-2">Viewing record for {patientData.name} (MRN: {patientData.id})</p>
            </div>
            <Link 
              href="/solutions/ehr/practice-management"
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Settings className="h-4 w-4 mr-2" />
              Practice Management
            </Link>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">{patientData.name}</h2>
              <p className="text-gray-600">MRN: {patientData.id} | DOB: {patientData.dateOfBirth} | {patientData.gender}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last Visit: {patientData.lastVisit}</p>
              <p className="text-sm text-gray-500">Primary Care: {patientData.primaryPhysician}</p>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="chart">Patient Chart</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="labs">Lab Results</TabsTrigger>
            <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Vitals</h3>
                <VitalsWidget detailed={false} />
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Medications</h3>
                <MedicationList medications={[]} showFilters={false} showActions={false} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
              <AppointmentScheduler />
            </div>
          </TabsContent>

          <TabsContent value="chart">
            <div className="bg-white rounded-lg shadow-md p-6">
              <PatientChart 
                patientName={patientData.name}
                patientId={patientData.id}
                dateOfBirth={patientData.dateOfBirth}
                gender={patientData.gender}
              />
            </div>
          </TabsContent>

          <TabsContent value="medications">
            <div className="bg-white rounded-lg shadow-md p-6">
              <MedicationList medications={[]} showFilters={true} showActions={true} />
            </div>
          </TabsContent>

          <TabsContent value="appointments">
            <div className="bg-white rounded-lg shadow-md p-6">
              <AppointmentScheduler />
            </div>
          </TabsContent>

          <TabsContent value="labs">
            <div className="bg-white rounded-lg shadow-md p-6">
              <LabResults />
            </div>
          </TabsContent>

          <TabsContent value="notes">
            <div className="bg-white rounded-lg shadow-md p-6">
              <ClinicalNotes />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Fragment>
  );
}
