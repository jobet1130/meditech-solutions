'use client';

import { useState, useEffect } from 'react';
import { VideoCall } from '../ui/VideoCall';
import { ChatPanel } from '../ui/ChatPanel';
import { PatientInfo } from '../ui/PatientInfo';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Phone, MessageSquare, X, Maximize2, Minimize2, User as UserIcon } from 'lucide-react';

interface TelehealthDashboardProps {
  className?: string;
  onEndCall?: () => void;
}

export function TelehealthDashboard({ className, onEndCall }: TelehealthDashboardProps) {
  const [activeTab, setActiveTab] = useState('video');
  const [isPatientInfoOpen, setIsPatientInfoOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  
  // Handle call timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isCallActive]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleStartCall = () => {
    setIsCallActive(true);
    setCallDuration(0);
  };
  
  const handleEndCall = () => {
    setIsCallActive(false);
    onEndCall?.();
  };
  
  const togglePatientInfo = () => {
    setIsPatientInfoOpen(!isPatientInfoOpen);
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className={cn(
      "flex flex-col h-screen bg-gray-100 overflow-hidden",
      isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'relative',
      className
    )}>
      {/* Header */}
      <header className="bg-white border-b flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">Telehealth Consultation</h1>
          {isCallActive && (
            <div className="ml-4 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              {formatTime(callDuration)}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={togglePatientInfo}
            className={cn("hidden md:flex items-center", isPatientInfoOpen ? 'bg-gray-100' : '')}
          >
            <UserIcon className="h-4 w-4 mr-2" />
            {isPatientInfoOpen ? 'Hide Info' : 'Patient Info'}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleFullscreen}
            className="text-gray-500 hover:text-gray-700"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Video/Chat Area */}
        <div className={cn(
          "flex-1 flex flex-col",
          isPatientInfoOpen ? 'md:w-2/3' : 'w-full'
        )}>
          {/* Video/Chat Tabs */}
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col"
          >
            <TabsList className="rounded-none border-b bg-white px-4">
              <TabsTrigger value="video" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Video Call
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </TabsTrigger>
            </TabsList>
            
            <div className="flex-1 overflow-hidden">
              <TabsContent value="video" className="m-0 h-full">
                <div className="h-full bg-gray-900">
                  <VideoCall 
                    onEndCall={handleEndCall}
                    className="h-full"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="chat" className="m-0 h-full">
                <ChatPanel className="h-full" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        {/* Patient Info Sidebar */}
        {isPatientInfoOpen && (
          <div className="w-full md:w-1/3 border-l bg-white overflow-hidden flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="font-medium">Patient Information</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={togglePatientInfo}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <PatientInfo className="flex-1 overflow-auto" />
          </div>
        )}
      </div>
      
      {/* Call Controls (for non-active call) */}
      {!isCallActive && activeTab === 'video' && (
        <div className="bg-white border-t p-4 flex justify-center">
          <Button 
            onClick={handleStartCall}
            className="bg-green-600 hover:bg-green-700 text-white py-6 px-8 rounded-full text-lg font-medium flex items-center"
          >
            <Phone className="h-6 w-6 mr-2" />
            Start Video Call
          </Button>
        </div>
      )}
    </div>
  );
}
