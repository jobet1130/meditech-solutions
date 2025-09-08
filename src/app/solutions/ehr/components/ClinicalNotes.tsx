'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, User, Calendar, Search, Pencil } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type NoteType = 'progress' | 'consult' | 'procedure' | 'discharge' | 'other';

interface ClinicalNote {
  id: string;
  type: NoteType;
  title: string;
  content: string;
  author: string;
  date: string;
  status: 'signed' | 'draft' | 'pending_review';
  tags?: string[];
}

interface ClinicalNotesProps {
  notes?: ClinicalNote[];
}

const noteTypeLabels = {
  progress: 'Progress Note',
  consult: 'Consultation',
  procedure: 'Procedure Note',
  discharge: 'Discharge Summary',
  other: 'Other',
};

export function ClinicalNotes({ notes: initialNotes = [] }: ClinicalNotesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState({
    type: 'progress' as NoteType,
    title: '',
    content: '',
  });

  // Mock data - in a real app, this would come from an API
  const mockNotes: ClinicalNote[] = [
    {
      id: '1',
      type: 'progress',
      title: 'Follow-up Visit',
      content: 'Patient reports improvement in symptoms. Blood pressure well controlled on current medication. Continue current treatment plan and follow up in 4 weeks.',
      author: 'Dr. Smith',
      date: '2023-11-15',
      status: 'signed',
      tags: ['hypertension', 'follow-up'],
    },
    {
      id: '2',
      type: 'consult',
      title: 'Cardiology Consultation',
      content: 'Patient referred for evaluation of chest pain. No evidence of acute coronary syndrome. Recommend stress testing and follow up with PCP.',
      author: 'Dr. Johnson, Cardiology',
      date: '2023-11-10',
      status: 'signed',
      tags: ['cardiology', 'consult'],
    },
    {
      id: '3',
      type: 'procedure',
      title: 'Colonoscopy',
      content: 'Procedure performed without complications. Two small polyps removed and sent for pathology. Patient tolerated procedure well.',
      author: 'Dr. Lee, Gastroenterology',
      date: '2023-11-05',
      status: 'signed',
      tags: ['procedure', 'gastroenterology'],
    },
    {
      id: '4',
      type: 'discharge',
      title: 'Hospital Discharge Summary',
      content: 'Patient admitted for community-acquired pneumonia. Treated with IV antibiotics with good response. Discharged on oral antibiotics with follow-up in 1 week.',
      author: 'Dr. Smith',
      date: '2023-10-28',
      status: 'signed',
      tags: ['hospital', 'discharge'],
    },
  ];

  const [notes, setNotes] = useState<ClinicalNote[]>(initialNotes.length > 0 ? initialNotes : mockNotes);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.title.trim() || !newNote.content.trim()) return;
    
    const newNoteData: ClinicalNote = {
      id: Date.now().toString(),
      type: newNote.type,
      title: newNote.title,
      content: newNote.content,
      author: 'Dr. Current User',
      date: new Date().toISOString().split('T')[0],
      status: 'signed',
    };
    
    setNotes([newNoteData, ...notes]);
    setNewNote({ type: 'progress', title: '', content: '' });
    setIsAddingNote(false);
  };

  const getStatusBadge = (status: 'signed' | 'draft' | 'pending_review' | string) => {
    switch (status) {
      case 'signed':
        return <Badge className="bg-green-100 text-green-800">Signed</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      case 'pending_review':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search notes..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button onClick={() => setIsAddingNote(true)}>
          <Plus className="h-4 w-4 mr-2" /> Add Note
        </Button>
      </div>

      {isAddingNote && (
        <Card className="border rounded-lg p-4 mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Note</h3>
          <form onSubmit={handleAddNote} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="note-type" className="mb-1 block text-sm font-medium">Note Type</Label>
                <select
                  id="note-type"
                  className="w-full p-2 border rounded"
                  value={newNote.type}
                  onChange={(e) => setNewNote({...newNote, type: e.target.value as NoteType})}
                >
                  {Object.entries(noteTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="note-title" className="mb-1 block text-sm font-medium">Title</Label>
                <Input
                  id="note-title"
                  placeholder="Note title"
                  value={newNote.title}
                  onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="note-content" className="mb-1 block text-sm font-medium">Content</Label>
              <Textarea
                id="note-content"
                placeholder="Enter note content..."
                rows={4}
                value={newNote.content}
                onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddingNote(false);
                  setNewNote({ type: 'progress', title: '', content: '' });
                }}
              >
                Cancel
              </Button>
              <Button type="submit">
                <FileText className="h-4 w-4 mr-2" /> Save Note
              </Button>
            </div>
          </form>
        </Card>
      )}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
          <p className="text-muted-foreground">No notes found</p>
          <Button 
            variant="ghost" 
            className="mt-2"
            onClick={() => setIsAddingNote(true)}
          >
            <Plus className="h-4 w-4 mr-1" /> Add your first note
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNotes.map((note: ClinicalNote) => (
            <div key={note.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {note.title}
                    <Badge variant="outline">{noteTypeLabels[note.type as keyof typeof noteTypeLabels]}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {note.author}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(note.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {getStatusBadge(note.status)}
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <p className="whitespace-pre-line">{note.content}</p>
                
                {note.tags && note.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {note.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
