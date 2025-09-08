'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Calendar as CalendarIcon, Clock, User, MapPin, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  format, 
  addDays, 
  startOfWeek,
  isTomorrow,
  isToday,
  endOfWeek, 
  eachDayOfInterval, 
  isSameDay, 
  isSameMonth,
  addMonths,
  startOfMonth,
  endOfMonth,
  addWeeks,
  startOfDay,
  endOfDay,
  parseISO
} from 'date-fns';

type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'no-show';
type CalendarView = 'day' | 'week' | 'month';

interface Appointment {
  id: string;
  patientName: string;
  provider: string;
  date: string;
  time: string;
  duration: number; // in minutes
  type: string;
  status: AppointmentStatus;
  notes?: string;
  location?: string;
}

interface AppointmentSchedulerProps {
  appointments?: Appointment[];
}

export function AppointmentScheduler({ appointments = [] }: AppointmentSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<CalendarView>('week');
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // New appointment form state
  const [newAppointment, setNewAppointment] = useState<Omit<Appointment, 'id' | 'status'>>({ 
    patientName: '',
    provider: 'Dr. Smith',
    date: format(selectedDate, 'yyyy-MM-dd'),
    time: '09:00',
    duration: 30,
    type: 'Check-up',
    location: 'Exam Room 1',
    notes: ''
  });
  
  const providers = ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee', 'Dr. Wilson'];
  const appointmentTypes = ['Check-up', 'Follow-up', 'New Patient', 'Consultation', 'Procedure'];
  const locations = ['Exam Room 1', 'Exam Room 2', 'Exam Room 3', 'Procedure Room 1', 'Telehealth'];
  const timeSlots = Array.from({ length: 32 }, (_, i) => {
    const hour = 8 + Math.floor(i / 2);
    const minute = (i % 2) * 30;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });

  // Mock data - in a real app, this would come from an API
  const mockAppointments: Appointment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      provider: 'Dr. Smith',
      date: format(new Date(), 'yyyy-MM-dd'),
      time: '09:30',
      duration: 30,
      type: 'Follow-up',
      status: 'scheduled',
      location: 'Exam Room 1',
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      provider: 'Dr. Johnson',
      date: format(new Date(), 'yyyy-MM-dd'),
      time: '10:15',
      duration: 45,
      type: 'New Patient',
      status: 'scheduled',
      location: 'Exam Room 2',
    },
    {
      id: '3',
      patientName: 'Robert Johnson',
      provider: 'Dr. Lee',
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      time: '14:00',
      duration: 60,
      type: 'Consultation',
      status: 'scheduled',
      location: 'Exam Room 3',
    },
    {
      id: '4',
      patientName: 'Emily Davis',
      provider: 'Dr. Smith',
      date: format(addDays(new Date(), 1), 'yyyy-MM-dd'),
      time: '15:30',
      duration: 30,
      type: 'Follow-up',
      status: 'scheduled',
      location: 'Exam Room 1',
    },
  ];

  const displayAppointments = appointments.length > 0 ? appointments : mockAppointments;

  // Removed duplicate days declaration and unused code

  // Get the current date range based on view
  const getDateRange = () => {
    switch (view) {
      case 'day':
        return {
          start: startOfDay(selectedDate),
          end: endOfDay(selectedDate),
          days: [selectedDate],
          title: format(selectedDate, 'MMMM d, yyyy')
        };
      case 'week':
        const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
        const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
        return {
          start: weekStart,
          end: endOfWeek(selectedDate, { weekStartsOn: 1 }),
          days: weekDays,
          title: `${format(weekDays[0], 'MMM d')} - ${format(weekDays[6], 'MMM d, yyyy')}`
        };
      case 'month':
        const monthStart = startOfMonth(selectedDate);
        const monthEnd = endOfMonth(selectedDate);
        const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
        const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
        const monthDays = eachDayOfInterval({ start: startDate, end: endDate });
        return {
          start: monthStart,
          end: monthEnd,
          days: monthDays,
          title: format(selectedDate, 'MMMM yyyy')
        };
    }
  };

  const { start, end, days, title } = getDateRange();

  // Filter appointments for the current view
  const filteredAppointments = displayAppointments.filter(appt => {
    const apptDate = new Date(appt.date);
    return apptDate >= start && apptDate <= end;
  }).filter(appt => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      appt.patientName.toLowerCase().includes(query) ||
      appt.provider.toLowerCase().includes(query) ||
      appt.type.toLowerCase().includes(query)
    );
  });

  // Navigation functions
  const navigateDate = (direction: 'prev' | 'next') => {
    if (view === 'day') {
      setSelectedDate(addDays(selectedDate, direction === 'next' ? 1 : -1));
    } else if (view === 'week') {
      setSelectedDate(addWeeks(selectedDate, direction === 'next' ? 1 : -1));
    } else {
      setSelectedDate(addMonths(selectedDate, direction === 'next' ? 1 : -1));
    }
  };

  const getStatusBadge = (status: AppointmentStatus) => {
    switch (status) {
      case 'scheduled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Scheduled</span>;
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>;
      case 'cancelled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Cancelled</span>;
      case 'no-show':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">No Show</span>;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Appointments
          </CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search appointments..."
                className="pl-8 w-full sm:w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <X 
                  className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                  onClick={() => setSearchQuery('')}
                />
              )}
            </div>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setShowNewAppointment(true)}
            >
              <Plus className="h-4 w-4 mr-1" /> New
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Calendar Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-md">
            {(['day', 'week', 'month'] as CalendarView[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  view === v 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigateDate('prev')}
            className="text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-lg font-medium text-blue-700">
            {title}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigateDate('next')}
            className="text-blue-600 border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        {view === 'month' ? (
          <div className="space-y-2">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Month grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, index) => {
                const dayAppointments = displayAppointments.filter(appt => 
                  isSameDay(new Date(appt.date), day)
                );
                const isCurrentMonth = isSameMonth(day, selectedDate);
                
                return (
                  <div 
                    key={index} 
                    className={`min-h-24 p-2 border rounded-md ${
                      isSameDay(day, selectedDate)
                        ? 'bg-blue-600 text-white'
                        : isCurrentMonth 
                          ? 'bg-white hover:bg-blue-50 text-gray-800'
                          : 'bg-gray-50 text-gray-400'
                    }`}
                    onClick={() => setSelectedDate(day)}
                  >
                    <div className="text-right">
                      <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full ${
                        isToday(day) ? 'bg-blue-100 text-blue-800' : ''
                      }`}>
                        {format(day, 'd')}
                      </span>
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayAppointments.slice(0, 3).map((appt) => (
                        <div 
                          key={appt.id}
                          className="text-xs truncate px-1 rounded bg-blue-100 text-blue-800"
                          title={`${appt.time} - ${appt.patientName}`}
                        >
                          {appt.time} {appt.patientName.split(' ')[0]}
                        </div>
                      ))}
                      {dayAppointments.length > 3 && (
                        <div className="text-xs text-gray-500">+{dayAppointments.length - 3} more</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Week/Day View */
          <div className="space-y-4">
            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {days.map((day, index) => (
                <div 
                  key={index} 
                  className={`text-center p-2 rounded-md ${
                    isSameDay(day, selectedDate) 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-blue-50 text-blue-700'
                  } cursor-pointer`}
                  onClick={() => setSelectedDate(day)}
                >
                  <div className="text-sm font-medium">{format(day, 'EEE')}</div>
                  <div className="text-lg font-bold">{format(day, 'd')}</div>
                </div>
              ))}
            </div>

            {/* Appointments list */}
            <div className="space-y-2">
              {days.filter(day => view === 'day' ? isSameDay(day, selectedDate) : true).map((day) => {
                const dayAppointments = displayAppointments.filter(appt => 
                  isSameDay(new Date(appt.date), day)
                );
                
                return dayAppointments.length > 0 && (
                  <div key={day.toString()} className="border rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-2">
                      {format(day, 'EEEE, MMMM d')}
                    </h3>
                    <div className="space-y-2">
                      {dayAppointments.map((appt) => (
                        <div key={appt.id} className="p-3 border rounded hover:bg-blue-50">
                          <div className="flex justify-between">
                            <span className="font-medium">{appt.time}</span>
                            <span className="text-sm text-gray-500">{appt.duration} min</span>
                          </div>
                          <div className="font-medium">{appt.patientName}</div>
                          <div className="text-sm text-gray-600">{appt.type}</div>
                          <div className="text-sm text-gray-500">with {appt.provider}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Appointments for Selected Day */}
        <div className="border rounded-lg overflow-hidden
        ">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <div className="font-medium flex items-center gap-2">
              {isToday(selectedDate) ? 'Today' : isTomorrow(selectedDate) ? 'Tomorrow' : format(selectedDate, 'EEEE, MMMM d, yyyy')}
              <span className="text-sm font-normal text-muted-foreground">
                ({filteredAppointments.length} {filteredAppointments.length === 1 ? 'appointment' : 'appointments'})
              </span>
            </div>
          </div>
          
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8">
              <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <p className="text-muted-foreground">No appointments found</p>
              <Button 
                variant="ghost" 
                className="mt-2"
                size="sm"
                onClick={() => setShowNewAppointment(true)}
              >
                <Plus className="h-4 w-4 mr-1" /> Schedule an appointment
              </Button>
            </div>
          ) : (
            <div className="divide-y">
              {filteredAppointments.map((appt) => (
                <div key={appt.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-4
                    ">
                      <div className="bg-blue-50 p-2 rounded-md">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{appt.patientName}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <User className="h-3.5 w-3.5" />
                          {appt.provider}
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {appt.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        {format(parseISO(`${appt.date}T${appt.time}`), 'h:mm a')}
                      </div>
                      <div className="text-sm text-muted-foreground">{appt.duration} min</div>
                      <div className="mt-1">{getStatusBadge(appt.status)}</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{appt.type}</span>
                      <div className="flex gap-2">
                        <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Check In</Button>
                        <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Start Visit</Button>
                      </div>
                    </div>
                    
                    {appt.notes && (
                      <div className="mt-2 text-sm text-muted-foreground">
                        {appt.notes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>

      {/* New Appointment Dialog */}
      <Dialog open={showNewAppointment} onOpenChange={setShowNewAppointment}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Schedule New Appointment</DialogTitle>
            <DialogDescription>
              Fill in the details to schedule a new appointment.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="patientName" className="text-right">
                Patient Name
              </Label>
              <Input
                id="patientName"
                value={newAppointment.patientName}
                onChange={(e) => setNewAppointment({...newAppointment, patientName: e.target.value})}
                className="col-span-3"
                placeholder="Enter patient name"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="provider" className="text-right">
                Provider
              </Label>
              <Select 
                value={newAppointment.provider}
                onValueChange={(value) => setNewAppointment({...newAppointment, provider: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  {providers.map(provider => (
                    <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                className="col-span-3"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Select
                value={newAppointment.time}
                onValueChange={(value) => setNewAppointment({...newAppointment, time: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="max-h-[200px] overflow-y-auto">
                  {timeSlots.map(time => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration (min)
              </Label>
              <Select
                value={newAppointment.duration.toString()}
                onValueChange={(value) => setNewAppointment({...newAppointment, duration: parseInt(value)})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="90">90 minutes</SelectItem>
                  <SelectItem value="120">120 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select
                value={newAppointment.type}
                onValueChange={(value) => setNewAppointment({...newAppointment, type: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  {appointmentTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Select
                value={newAppointment.location}
                onValueChange={(value) => setNewAppointment({...newAppointment, location: value})}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="notes" className="text-right mt-2">
                Notes
              </Label>
              <Textarea
                id="notes"
                value={newAppointment.notes}
                onChange={(e) => setNewAppointment({...newAppointment, notes: e.target.value})}
                className="col-span-3 min-h-[100px]"
                placeholder="Enter any additional notes"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowNewAppointment(false)}
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                // In a real app, you would save this to your backend
                const newAppt: Appointment = {
                  ...newAppointment,
                  id: Math.random().toString(36).substr(2, 9), // Generate a random ID
                  status: 'scheduled' as AppointmentStatus
                };
                
                // Add to the mock data
                mockAppointments.push(newAppt);
                
                // Reset the form
                setNewAppointment({
                  patientName: '',
                  provider: 'Dr. Smith',
                  date: format(selectedDate, 'yyyy-MM-dd'),
                  time: '09:00',
                  duration: 30,
                  type: 'Check-up',
                  location: 'Exam Room 1',
                  notes: ''
                });
                
                // Close the dialog
                setShowNewAppointment(false);
                
                // In a real app, you would update the UI state or refetch data
                // For now, we'll just log to console
                console.log('New appointment created:', newAppt);
              }}
              disabled={!newAppointment.patientName}
            >
              Schedule Appointment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

