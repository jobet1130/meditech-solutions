'use client';

import { useState, useRef, useEffect } from 'react';
import { VideoOff, Video, Mic, MicOff, PhoneOff, ScreenShare, MonitorUp, User as UserIcon } from 'lucide-react';

declare global {
  interface MediaDevices {
    getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
  }
  interface Window {
    MediaDevices: {
      prototype: MediaDevices;
      new(): MediaDevices;
    };
  }
}
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VideoCallProps {
  onEndCall?: () => void;
  className?: string;
}

export function VideoCall({ onEndCall, className }: VideoCallProps) {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenShareRef = useRef<HTMLVideoElement>(null);

  // Mock stream for demo purposes
  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: isVideoOn, 
          audio: isAudioOn 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        return () => {
          stream.getTracks().forEach(track => track.stop());
        };
      } catch (err) {
        console.error('Error accessing media devices:', err);
      }
    };

    getMedia();
  }, [isVideoOn, isAudioOn]);

  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      // Stop screen sharing
      setIsScreenSharing(false);
      // Revert to camera
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: true 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } else {
      try {
              const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
          audio: true
        });
        
        if (screenShareRef.current) {
          screenShareRef.current.srcObject = screenStream;
          setIsScreenSharing(true);
        }
      } catch (err) {
        console.error('Error sharing screen:', err);
      }
    }
  };

  return (
    <div className={cn("relative w-full h-full bg-gray-900 rounded-lg overflow-hidden", className)}>
      {/* Video Feed */}
      <div className="relative w-full h-full">
        {isVideoOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center">
              <UserIcon className="w-16 h-16 text-gray-400" />
            </div>
          </div>
        )}

        {/* Screen Share Overlay */}
        {isScreenSharing && (
          <div className="absolute bottom-4 right-4 w-1/3 h-1/3 bg-gray-800 rounded-lg overflow-hidden border-2 border-blue-500">
            <video
              ref={screenShareRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-center space-x-4">
            <Button 
              variant={isVideoOn ? "secondary" : "destructive"} 
              size="icon"
              onClick={toggleVideo}
              className="rounded-full"
            >
              {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant={isAudioOn ? "secondary" : "destructive"} 
              size="icon"
              onClick={toggleAudio}
              className="rounded-full"
            >
              {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant={isScreenSharing ? "default" : "secondary"} 
              size="icon"
              onClick={toggleScreenShare}
              className="rounded-full"
            >
              {isScreenSharing ? <MonitorUp className="h-5 w-5" /> : <ScreenShare className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant="destructive" 
              size="icon"
              onClick={onEndCall}
              className="rounded-full"
            >
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

