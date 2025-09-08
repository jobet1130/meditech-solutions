'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, AlertTriangle, Pill, CalendarDays, Clock3, CheckCircle2, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'discontinued' | 'completed';
  prescribedBy: string;
  instructions?: string;
  sideEffects?: string[];
  lastFilled?: string;
  refillsRemaining?: number;
  route?: string;
  category?: string;
  notes?: string;
}

interface MedicationListProps {
  medications: Medication[];
  patientId?: string; // Marked as optional since it's not used
  canEdit?: boolean;
  showFilters?: boolean;
  showActions?: boolean;
  _maxItems?: number; // Marked as internal since it's not used
}

export function MedicationList({ medications = [], canEdit = false, showFilters = false, showActions = false }: MedicationListProps) {
  // Mock data - in a real app, this would come from an API
  const mockMedications: Medication[] = [
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10 mg',
      frequency: 'Once daily',
      startDate: '2023-01-15',
      status: 'active',
      prescribedBy: 'Dr. Smith',
      instructions: 'Take in the morning with food',
      refillsRemaining: 3,
    },
    {
      id: '2',
      name: 'Metformin',
      dosage: '500 mg',
      frequency: 'Twice daily',
      startDate: '2023-03-10',
      status: 'active',
      prescribedBy: 'Dr. Johnson',
      instructions: 'Take with meals',
      refillsRemaining: 2,
    },
    {
      id: '3',
      name: 'Atorvastatin',
      dosage: '20 mg',
      frequency: 'Once daily at bedtime',
      startDate: '2022-11-05',
      endDate: '2023-05-20',
      status: 'completed',
      prescribedBy: 'Dr. Smith',
      instructions: 'Take at bedtime',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [, setShowAddForm] = useState(false);

  const displayMeds = medications.length > 0 ? medications : mockMedications;

  const filteredMeds = displayMeds.filter((med) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active' && med.status === 'active') return true;
    if (activeFilter === 'discontinued' && med.status === 'discontinued') return true;
    if (activeFilter === 'completed' && med.status === 'completed') return true;
    return false;
  }).filter((med) => {
    return med.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const activeCount = displayMeds.filter((med) => med.status === 'active').length;
  const discontinuedCount = displayMeds.filter((med) => med.status === 'discontinued').length;
  const completedCount = displayMeds.filter((med) => med.status === 'completed').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case 'discontinued':
        return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100">Discontinued</Badge>;
      case 'completed':
        return <Badge variant="outline" className="text-gray-600 border-gray-300">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="border border-gray-200 overflow-hidden">
      <CardHeader className="bg-gray-50 px-6 py-4 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Medications</CardTitle>
            <p className="text-sm text-gray-500 mt-1">
              {medications.length} total • {activeCount} active • {discontinuedCount} discontinued • {completedCount} completed
            </p>
          </div>
          {showActions && (
            <div className="mt-3 sm:mt-0 flex items-center space-x-2">
              {showFilters && (
                <div className="flex border border-gray-200 rounded-md overflow-hidden">
                  {[
                    { value: 'active', label: 'Active' },
                    { value: 'all', label: 'All' },
                    { value: 'discontinued', label: 'Discontinued' },
                    { value: 'completed', label: 'Completed' }
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setActiveFilter(filter.value as 'all' | 'active' | 'discontinued' | 'completed')}
                      className={cn(
                        'px-3 py-1.5 text-sm font-medium',
                        activeFilter === filter.value
                          ? 'bg-blue-50 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-50'
                      )}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              )}
              {canEdit && (
                <Button 
                  size="sm" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => setShowAddForm(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
              )}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {showFilters && (
          <div className="px-6 py-3 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Pill className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search medications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
        
        {filteredMeds.length === 0 ? (
          <div className="text-center py-12">
            <Pill className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No medications found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery 
                ? 'Try adjusting your search or filter criteria.'
                : activeFilter === 'active' 
                  ? 'No active medications found.'
                  : `No ${activeFilter} medications found.`}
            </p>
            {canEdit && (
              <div className="mt-4">
                <Button 
                  variant="outline"
                  onClick={() => setShowAddForm(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Medication
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredMeds.map((med) => (
              <div 
                key={med.id} 
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 mr-3">
                        <Pill className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-base font-medium text-gray-900">
                            {med.name}
                          </h4>
                          <span className="ml-2">
                            {getStatusBadge(med.status)}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center text-sm text-gray-500">
                          <span>{med.dosage}</span>
                          {med.route && <span className="mx-1">•</span>}
                          <span>{med.route}</span>
                          <span className="mx-1">•</span>
                          <span>{med.frequency}</span>
                        </div>
                      </div>
                    </div>
                    
                    {(med.instructions || med.notes) && (
                      <div className="mt-3 pl-11">
                        {med.instructions && (
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Instructions:</span> {med.instructions}
                          </p>
                        )}
                        {med.notes && (
                          <p className="text-sm text-gray-500 mt-1">
                            <span className="font-medium">Notes:</span> {med.notes}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="mt-3 pl-11">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1.5 text-gray-400" />
                          <span>Started {new Date(med.startDate).toLocaleDateString()}</span>
                        </div>
                        {med.endDate && (
                          <div className="flex items-center">
                            <Clock3 className="h-4 w-4 mr-1.5 text-gray-400" />
                            <span>Ends {new Date(med.endDate).toLocaleDateString()}</span>
                          </div>
                        )}
                        {med.lastFilled && (
                          <div className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 mr-1.5 text-green-500" />
                            <span>Last filled {new Date(med.lastFilled).toLocaleDateString()}</span>
                          </div>
                        )}
                        {med.refillsRemaining !== undefined && (
                          <div className="flex items-center">
                            <Pill className="h-4 w-4 mr-1.5 text-blue-400" />
                            <span>{med.refillsRemaining} refills remaining</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Prescribed by</p>
                      <p className="text-sm font-medium text-gray-900">{med.prescribedBy}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-2 text-blue-600 hover:text-blue-800">
                      Details <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
                
                {med.sideEffects && med.sideEffects.length > 0 && (
                  <div className="mt-3 pl-11 pt-2 border-t border-gray-100">
                    <div className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 mr-1.5 flex-shrink-0" />
                      <p className="text-sm text-amber-700">
                        <span className="font-medium">Reported side effects:</span> {med.sideEffects.join(', ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
