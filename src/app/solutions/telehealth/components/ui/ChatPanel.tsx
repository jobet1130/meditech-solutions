'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, FileText, Image as ImageIcon, File } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  sender: 'user' | 'provider';
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  fileUrl?: string;
  fileName?: string;
}

interface ChatPanelProps {
  className?: string;
  onSendMessage?: (message: string) => void;
}

export function ChatPanel({ className, onSendMessage }: ChatPanelProps) {
  const [message, setMessage] = useState('');
  const [isFileMenuOpen, setIsFileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'provider',
      content: 'Hello! How can I help you today?',
      timestamp: new Date(Date.now() - 3600000),
      type: 'text'
    },
    {
      id: '2',
      sender: 'user',
      content: 'I have a question about my prescription',
      timestamp: new Date(Date.now() - 1800000),
      type: 'text'
    },
    {
      id: '3',
      sender: 'provider',
      content: 'I can help with that. What would you like to know?',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: message,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages([...messages, newMessage]);
    onSendMessage?.(message);
    setMessage('');
  };

  const handleFileUpload = (type: 'image' | 'file') => {
    // In a real app, you would handle file upload here
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'image' ? 'image/*' : '*/*';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      
      // Mock file upload
      const fileUrl = URL.createObjectURL(file);
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: 'user',
        content: type === 'image' ? 'Image sent' : 'File sent',
        timestamp: new Date(),
        type: type,
        fileUrl,
        fileName: file.name
      };
      
      setMessages([...messages, newMessage]);
      setIsFileMenuOpen(false);
    };
    
    input.click();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={cn("flex flex-col h-full bg-white rounded-lg shadow-sm border", className)}>
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex",
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              <div 
                className={cn(
                  "flex max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-2xl rounded-lg px-4 py-2",
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                )}
              >
                <div className="flex-shrink-0 mr-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={msg.sender === 'user' ? '/user-avatar.jpg' : '/doctor-avatar.jpg'} />
                    <AvatarFallback>{msg.sender === 'user' ? 'U' : 'D'}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">
                    {msg.sender === 'user' ? 'You' : 'Dr. Smith'}
                  </div>
                  
                  {msg.type === 'text' && (
                    <p className="text-sm">{msg.content}</p>
                  )}
                  
                  {msg.type === 'image' && msg.fileUrl && (
                    <div className="mt-1 rounded-md overflow-hidden relative w-full h-48">
                      <Image 
                        src={msg.fileUrl} 
                        alt="Shared content" 
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  
                  {msg.type === 'file' && msg.fileUrl && (
                    <a 
                      href={msg.fileUrl} 
                      download={msg.fileName}
                      className="inline-flex items-center mt-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-blue-600"
                    >
                      <File className="h-4 w-4 mr-2" />
                      {msg.fileName || 'Download file'}
                    </a>
                  )}
                  
                  <div className="text-xs mt-1 opacity-70">
                    {formatTime(new Date(msg.timestamp))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="border-t p-3 bg-gray-50">
        <div className="relative">
          <div className="absolute left-2 top-2.5">
            <div className="relative">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                onClick={() => setIsFileMenuOpen(!isFileMenuOpen)}
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              
              {isFileMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <button
                      type="button"
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFileUpload('image')}
                    >
                      <ImageIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Send Image
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => handleFileUpload('file')}
                    >
                      <FileText className="h-4 w-4 mr-2 text-blue-600" />
                      Send File
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <Input
            type="text"
            placeholder="Type a message..."
            className="pl-12 pr-20 py-6 rounded-full border-0 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          
          <Button 
            type="submit" 
            size="sm" 
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
