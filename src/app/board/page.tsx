'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { PlusCircle, Book, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// Manuelles Drag-and-Drop ohne react-beautiful-dnd
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Typen für Ihre Datenstrukturen
type Difficulty = 'easy' | 'medium' | 'hard';

type KanbanTask = {
  id: string;
  title: string;
  description: string;
  courseId: string;
  topicId: string;
  subtopicId: string;
  difficulty: Difficulty;
  status: 'backlog' | 'todo' | 'inProgress' | 'review' | 'done';
};

type Course = {
  id: string;
  name: string;
  topics: Topic[];
};

type Topic = {
  id: string;
  name: string;
  subtopics: Subtopic[];
};

type Subtopic = {
  id: string;
  name: string;
  difficulty: Difficulty;
};

// Mock-Daten für die Demo
const mockCourses: Course[] = [
  {
    id: 'course-1',
    name: 'Agile Softwareentwicklung',
    topics: [
      {
        id: 'topic-1',
        name: 'Scrum',
        subtopics: [
          { id: 'subtopic-1', name: 'Scrum Rollen', difficulty: 'easy' },
          { id: 'subtopic-2', name: 'Scrum Artefakte', difficulty: 'medium' },
          { id: 'subtopic-3', name: 'Scrum Events', difficulty: 'medium' },
        ]
      },
      {
        id: 'topic-2',
        name: 'Kanban',
        subtopics: [
          { id: 'subtopic-4', name: 'Kanban-Prinzipien', difficulty: 'easy' },
          { id: 'subtopic-5', name: 'WIP-Limits', difficulty: 'medium' },
        ]
      }
    ]
  },
  {
    id: 'course-2',
    name: 'Web-Entwicklung',
    topics: [
      {
        id: 'topic-3',
        name: 'Frontend',
        subtopics: [
          { id: 'subtopic-6', name: 'HTML Grundlagen', difficulty: 'easy' },
          { id: 'subtopic-7', name: 'CSS Layouts', difficulty: 'medium' },
          { id: 'subtopic-8', name: 'JavaScript DOM', difficulty: 'hard' },
        ]
      },
      {
        id: 'topic-4',
        name: 'Backend',
        subtopics: [
          { id: 'subtopic-9', name: 'Node.js Basics', difficulty: 'medium' },
          { id: 'subtopic-10', name: 'Express Server', difficulty: 'hard' },
        ]
      }
    ]
  }
];

// Initiale Kanban-Tasks
const initialTasks: KanbanTask[] = [
  {
    id: 'task-1',
    title: 'Scrum Rollen verstehen',
    description: 'Product Owner, Scrum Master und Dev Team Verantwortlichkeiten lernen',
    courseId: 'course-1',
    topicId: 'topic-1',
    subtopicId: 'subtopic-1',
    difficulty: 'easy',
    status: 'backlog'
  },
  {
    id: 'task-2',
    title: 'HTML-Struktur erstellen',
    description: 'Semantisches HTML für Portfolio-Seite aufbauen',
    courseId: 'course-2',
    topicId: 'topic-3',
    subtopicId: 'subtopic-6',
    difficulty: 'easy',
    status: 'todo'
  },
  {
    id: 'task-3',
    title: 'CSS Flexbox Layout',
    description: 'Responsive Layout mit Flexbox implementieren',
    courseId: 'course-2',
    topicId: 'topic-3',
    subtopicId: 'subtopic-7',
    difficulty: 'medium',
    status: 'inProgress'
  },
  {
    id: 'task-4',
    title: 'Node.js Server aufsetzen',
    description: 'Einfachen HTTP-Server mit Node.js erstellen',
    courseId: 'course-2',
    topicId: 'topic-4',
    subtopicId: 'subtopic-9',
    difficulty: 'medium',
    status: 'review'
  },
  {
    id: 'task-5',
    title: 'Scrum Artefakte definieren',
    description: 'Product Backlog, Sprint Backlog und Increment verstehen',
    courseId: 'course-1',
    topicId: 'topic-1',
    subtopicId: 'subtopic-2',
    difficulty: 'medium',
    status: 'done'
  }
];

// Board-Spalten
const columns = [
  { id: 'backlog', title: 'Backlog', icon: Book },
  { id: 'todo', title: 'To Do', icon: AlertCircle },
  { id: 'inProgress', title: 'In Progress', icon: Clock },
  { id: 'review', title: 'Review', icon: CheckCircle },
  { id: 'done', title: 'Done', icon: CheckCircle }
];

// Drag-and-Drop Komponenten
const TaskCard = ({ task, index, getSubtopicName, getDifficultyColor, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, fromStatus: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div 
      ref={drag} 
      className={`mb-3 ${isDragging ? 'opacity-50' : ''}`}
    >
      <Card className="cursor-grab active:cursor-grabbing">
        <CardHeader className="p-3 pb-0">
          <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-2">
          <p className="text-xs text-gray-500 mb-2">{task.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              {getSubtopicName(task.courseId, task.topicId, task.subtopicId)}
            </Badge>
            <Badge className={`text-xs ${getDifficultyColor(task.difficulty)}`}>
              {task.difficulty}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DropColumn = ({ status, title, icon: Icon, tasks, onDrop, getSubtopicName, getDifficultyColor, moveTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-3 rounded-t-md flex items-center">
        <Icon className="h-5 w-5 mr-2" />
        <h3 className="font-medium">{title}</h3>
        <Badge className="ml-2 bg-gray-200 text-gray-800">{tasks.length}</Badge>
      </div>
      <div 
        ref={drop} 
        className={`bg-gray-50 p-2 rounded-b-md flex-1 min-h-[70vh] overflow-y-auto ${isOver ? 'bg-blue-50' : ''}`}
      >
        {tasks.map((task, index) => (
          <TaskCard 
            key={task.id}
            task={task}
            index={index}
            getSubtopicName={getSubtopicName}
            getDifficultyColor={getDifficultyColor}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<KanbanTask[]>(initialTasks);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<Partial<KanbanTask>>({
    title: '',
    description: '',
    courseId: '',
    topicId: '',
    subtopicId: '',
    difficulty: 'medium',
    status: 'backlog'
  });

  // Effekt zum Zurücksetzen des Topic-Filters, wenn der Kurs wechselt
  useEffect(() => {
    setSelectedTopic('all');
  }, [selectedCourse]);

  // Gefilterte Tasks
  const filteredTasks = tasks.filter(task => {
    if (selectedCourse !== 'all' && task.courseId !== selectedCourse) return false;
    if (selectedTopic !== 'all' && task.topicId !== selectedTopic) return false;
    return true;
  });

  // Verfügbare Topics basierend auf ausgewähltem Kurs
  const availableTopics = selectedCourse === 'all' 
    ? mockCourses.flatMap(course => course.topics)
    : mockCourses.find(course => course.id === selectedCourse)?.topics || [];

  // Handler für Drag & Drop
  const moveTask = (id: string, toStatus: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id 
          ? { ...task, status: toStatus as KanbanTask['status'] }
          : task
      )
    );
    
    // Hier könnte der API-Call zum Update erfolgen
    console.log(`Task ${id} moved to ${toStatus}`);
  };

  // Handler für das Hinzufügen eines neuen Tasks
  const handleAddTask = () => {
    if (!newTask.title || !newTask.courseId || !newTask.topicId || !newTask.subtopicId) {
      return; // Grundlegende Validierung
    }

    const createdTask: KanbanTask = {
      id: `task-${Date.now()}`,
      title: newTask.title || '',
      description: newTask.description || '',
      courseId: newTask.courseId || '',
      topicId: newTask.topicId || '',
      subtopicId: newTask.subtopicId || '',
      difficulty: newTask.difficulty as Difficulty || 'medium',
      status: newTask.status as KanbanTask['status'] || 'backlog'
    };

    setTasks(prevTasks => [...prevTasks, createdTask]);
    setShowAddDialog(false);
    
    // Zurücksetzen des Formulars
    setNewTask({
      title: '',
      description: '',
      courseId: '',
      topicId: '',
      subtopicId: '',
      difficulty: 'medium',
      status: 'backlog'
    });
  };

  // Hilfsfunktion zum Gruppieren der Tasks nach Status
  const getTasksByStatus = (status: KanbanTask['status']) => {
    return filteredTasks.filter(task => task.status === status);
  };

  // Hilfsfunktion zum Abrufen von Subtopic-Namen
  const getSubtopicName = (courseId: string, topicId: string, subtopicId: string) => {
    const course = mockCourses.find(c => c.id === courseId);
    const topic = course?.topics.find(t => t.id === topicId);
    const subtopic = topic?.subtopics.find(s => s.id === subtopicId);
    return subtopic?.name || 'Unbekannt';
  };

  // Hilfsfunktion für Schwierigkeits-Badge-Farbe
  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'medium': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      case 'hard': return 'bg-red-100 text-red-800 hover:bg-red-100';
      default: return '';
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lern-Kanban Board</h1>
          <Button onClick={() => setShowAddDialog(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Aufgabe hinzufügen
          </Button>
        </div>

        {/* Filter-Bereich */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Kurs</label>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger>
                <SelectValue placeholder="Kurs auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Kurse</SelectItem>
                {mockCourses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Thema</label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic} disabled={selectedCourse === 'all'}>
              <SelectTrigger>
                <SelectValue placeholder={selectedCourse === 'all' ? "Erst Kurs auswählen" : "Thema auswählen"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Themen</SelectItem>
                {availableTopics.map((topic) => (
                  <SelectItem key={topic.id} value={topic.id}>
                    {topic.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {columns.map((column) => (
            <DropColumn
              key={column.id}
              status={column.id}
              title={column.title}
              icon={column.icon}
              tasks={getTasksByStatus(column.id as any)}
              onDrop={moveTask}
              getSubtopicName={getSubtopicName}
              getDifficultyColor={getDifficultyColor}
              moveTask={moveTask}
            />
          ))}
        </div>

        {/* Dialog zum Hinzufügen einer Aufgabe */}
        <AlertDialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Neue Lernaufgabe hinzufügen</AlertDialogTitle>
              <AlertDialogDescription>
                Erstellen Sie eine neue Aufgabe für Ihren Lernplan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium mb-1">Titel</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newTask.title || ''}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Beschreibung</label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  value={newTask.description || ''}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Kurs</label>
                <Select 
                  value={newTask.courseId || ''} 
                  onValueChange={(value) => setNewTask({ 
                    ...newTask, 
                    courseId: value,
                    topicId: '', // Reset dependent fields
                    subtopicId: '' 
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Kurs auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCourses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Thema</label>
                <Select 
                  value={newTask.topicId || ''} 
                  onValueChange={(value) => setNewTask({ 
                    ...newTask, 
                    topicId: value,
                    subtopicId: '' // Reset dependent field
                  })}
                  disabled={!newTask.courseId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={!newTask.courseId ? "Erst Kurs auswählen" : "Thema auswählen"} />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCourses
                      .find(c => c.id === newTask.courseId)?.topics
                      .map((topic) => (
                        <SelectItem key={topic.id} value={topic.id}>
                          {topic.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Unterthema</label>
                <Select 
                  value={newTask.subtopicId || ''} 
                  onValueChange={(value) => {
                    const course = mockCourses.find(c => c.id === newTask.courseId);
                    const topic = course?.topics.find(t => t.id === newTask.topicId);
                    const subtopic = topic?.subtopics.find(s => s.id === value);
                    
                    setNewTask({ 
                      ...newTask, 
                      subtopicId: value,
                      difficulty: subtopic?.difficulty || 'medium'
                    });
                  }}
                  disabled={!newTask.topicId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={!newTask.topicId ? "Erst Thema auswählen" : "Unterthema auswählen"} />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCourses
                      .find(c => c.id === newTask.courseId)?.topics
                      .find(t => t.id === newTask.topicId)?.subtopics
                      .map((subtopic) => (
                        <SelectItem key={subtopic.id} value={subtopic.id}>
                          {subtopic.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Schwierigkeit</label>
                <Select 
                  value={newTask.difficulty || 'medium'} 
                  onValueChange={(value: string) => setNewTask({ 
                    ...newTask, 
                    difficulty: value as Difficulty
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Schwierigkeit wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Leicht</SelectItem>
                    <SelectItem value="medium">Mittel</SelectItem>
                    <SelectItem value="hard">Schwer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Select 
                  value={newTask.status || 'backlog'} 
                  onValueChange={(value: string) => setNewTask({ 
                    ...newTask, 
                    status: value as KanbanTask['status']
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {columns.map((column) => (
                      <SelectItem key={column.id} value={column.id}>
                        {column.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <AlertDialogFooter>
              <AlertDialogCancel>Abbrechen</AlertDialogCancel>
              <AlertDialogAction onClick={handleAddTask}>Hinzufügen</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;