'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Activity, Heart, Thermometer, Wind, Droplets, Ruler, Scale, Plus } from 'lucide-react';

interface VitalSign {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  icon: React.ReactNode;
  timestamp: string;
  status: 'high' | 'low' | 'normal';
  trend?: 'up' | 'down' | 'stable';
  range: string;
  lastUpdated: string;
}

interface VitalsWidgetProps {
  detailed?: boolean;
}

export function VitalsWidget({ detailed = false }: VitalsWidgetProps) {
  // Time range state removed as it wasn't being used
  
  // Mock data - in a real app, this would come from an API
  const vitals: VitalSign[] = [
    { 
      id: '1', 
      name: 'Blood Pressure', 
      value: '120/80', 
      unit: 'mmHg', 
      icon: <Activity className="h-5 w-5 text-blue-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'stable',
      range: '90/60 - 120/80',
      lastUpdated: 'Today, 10:30 AM'
    },
    { 
      id: '2', 
      name: 'Heart Rate', 
      value: 72, 
      unit: 'bpm', 
      icon: <Heart className="h-5 w-5 text-red-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'down',
      range: '60-100',
      lastUpdated: 'Today, 10:30 AM'
    },
    { 
      id: '3', 
      name: 'Temperature', 
      value: 98.6, 
      unit: '°F', 
      icon: <Thermometer className="h-5 w-5 text-amber-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'up',
      range: '97-99°F',
      lastUpdated: 'Today, 10:30 AM'
    },
    { 
      id: '4', 
      name: 'Respiratory Rate', 
      value: 16, 
      unit: '/min', 
      icon: <Wind className="h-5 w-5 text-teal-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'stable',
      range: '12-20',
      lastUpdated: 'Today, 10:30 AM'
    },
    { 
      id: '5', 
      name: 'Oxygen Saturation', 
      value: 98, 
      unit: '%', 
      icon: <Droplets className="h-5 w-5 text-cyan-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'up',
      range: '95-100%',
      lastUpdated: 'Today, 10:30 AM'
    },
    { 
      id: '6', 
      name: 'Height', 
      value: 68, 
      unit: 'in', 
      icon: <Ruler className="h-5 w-5 text-indigo-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'stable',
      range: 'N/A',
      lastUpdated: '2 months ago'
    },
    { 
      id: '7', 
      name: 'Weight', 
      value: 165, 
      unit: 'lbs', 
      icon: <Scale className="h-5 w-5 text-purple-500" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'normal',
      trend: 'down',
      range: 'N/A',
      lastUpdated: '1 week ago'
    },
    { 
      id: '8', 
      name: 'BMI', 
      value: 25.1, 
      unit: 'kg/m²', 
      icon: <Activity className="h-5 w-5 text-amber-600" />,
      timestamp: '2023-11-15T10:30:00', 
      status: 'high',
      trend: 'down',
      range: '18.5-24.9',
      lastUpdated: '1 week ago'
    }
  ];

  const handleAddVital = () => {
    console.log('Add new vital clicked');
  };

  return (
    <div className="flex flex-col h-[600px] border border-gray-200 rounded-lg overflow-hidden bg-white">
      <div className="bg-white p-4 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Vital Signs</h3>
            <p className="text-sm text-gray-500">Last updated: {vitals[0]?.lastUpdated || 'N/A'}</p>
          </div>
          <button
            onClick={handleAddVital}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-3.5 w-3.5" />
            New
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-4 space-y-6">
            {vitals.slice(0, detailed ? vitals.length : 6).map((vital) => (
              <div key={vital.id} className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-500">
                    {vital.icon}
                  </div>
                  <div className="text-base font-medium text-gray-900">{vital.name}</div>
                </div>
                <div className="text-sm text-green-600">
                  {vital.status.charAt(0).toUpperCase() + vital.status.slice(1)}
                </div>
                <div className="text-sm text-gray-500">Ref. range: {vital.range}</div>
                <div className="text-lg font-semibold">
                  {vital.value}{vital.unit}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
