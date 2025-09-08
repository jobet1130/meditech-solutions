'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FlaskConical, ArrowUp, ArrowDown, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type LabStatus = 'normal' | 'high' | 'low' | 'critical';

interface LabTest {
  id: string;
  name: string;
  category: string;
  result: string;
  unit: string;
  referenceRange: string;
  status: LabStatus;
  date: string;
  orderedBy: string;
  notes?: string;
}

interface LabResultsProps {
  results?: LabTest[];
}

export function LabResults({ results = [] }: LabResultsProps) {
  // Mock data - in a real app, this would come from an API
  const mockResults: LabTest[] = [
    {
      id: '1',
      name: 'Complete Blood Count (CBC)',
      category: 'Hematology',
      result: 'Normal',
      unit: '',
      referenceRange: 'Normal',
      status: 'normal',
      date: '2023-11-10',
      orderedBy: 'Dr. Smith',
    },
    {
      id: '2',
      name: 'Hemoglobin A1c',
      category: 'Chemistry',
      result: '6.2',
      unit: '%',
      referenceRange: '4.0 - 5.6 %',
      status: 'high',
      date: '2023-11-10',
      orderedBy: 'Dr. Smith',
      notes: 'Follow up in 3 months',
    },
    {
      id: '3',
      name: 'Lipid Panel',
      category: 'Chemistry',
      result: 'See details',
      unit: '',
      referenceRange: '',
      status: 'normal',
      date: '2023-11-10',
      orderedBy: 'Dr. Smith',
    },
    {
      id: '4',
      name: 'Vitamin D',
      category: 'Chemistry',
      result: '18',
      unit: 'ng/mL',
      referenceRange: '30-100 ng/mL',
      status: 'low',
      date: '2023-10-25',
      orderedBy: 'Dr. Johnson',
      notes: 'Vitamin D deficiency noted',
    },
  ];

  const displayResults = results.length > 0 ? results : mockResults;

  const getStatusBadge = (status: LabStatus) => {
    switch (status) {
      case 'high':
        return (
          <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
            <ArrowUp className="h-3 w-3" /> High
          </Badge>
        );
      case 'low':
        return (
          <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
            <ArrowDown className="h-3 w-3" /> Low
          </Badge>
        );
      case 'critical':
        return (
          <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" /> Critical
          </Badge>
        );
      default:
        return (
          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Normal
          </Badge>
        );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-primary" />
          Lab Results
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-primary">
          <Plus className="h-4 w-4 mr-1" /> Order
        </Button>
      </CardHeader>
      <CardContent>
        {displayResults.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            <FlaskConical className="h-10 w-10 mx-auto mb-2 text-gray-300" />
            <p>No lab results found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayResults.map((test) => (
              <div key={test.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{test.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {test.category} • {new Date(test.date).toLocaleDateString()}
                    </div>
                  </div>
                  {getStatusBadge(test.status)}
                </div>

                <div className="mt-3 pt-3 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-xs text-muted-foreground">Result</div>
                      <div className="font-medium">
                        {test.result} {test.unit}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Reference Range</div>
                      <div>{test.referenceRange || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Ordered By</div>
                      <div>{test.orderedBy}</div>
                    </div>
                  </div>

                  {test.notes && (
                    <div className="mt-3 p-3 bg-yellow-50 rounded-md text-sm">
                      <div className="font-medium text-yellow-800">Notes:</div>
                      <div className="text-yellow-700">{test.notes}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
