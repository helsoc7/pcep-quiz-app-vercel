import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'

interface SearchAndFilterProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  topicFilter: string | null
  setTopicFilter: (topic: string | null) => void
  subtopicFilter: string | null
  setSubtopicFilter: (subtopic: string | null) => void
  topics: string[]
  subtopics: string[]
  totalCount: number
  filteredCount: number
  clearFilters: () => void
}

export function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  topicFilter,
  setTopicFilter,
  subtopicFilter,
  setSubtopicFilter,
  topics,
  subtopics,
  totalCount,
  filteredCount,
  clearFilters
}: SearchAndFilterProps) {
  return (
    <div className="space-y-4 mb-6 bg-gray-50 p-4 rounded-md">
      <h2 className="text-sm font-medium">Suchen und Filtern</h2>
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Suchfeld */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Nach Fragetext suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* Topic Filter */}
        <div className="w-full md:w-64">
          <Select
            value={topicFilter || undefined}
            onValueChange={(value) => {
              setTopicFilter(value || null)
              setSubtopicFilter(null) // Reset subtopic when topic changes
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Topic auswählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Topics</SelectItem>
              {topics.map(topic => (
                <SelectItem key={topic} value={topic}>{topic}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Subtopic Filter */}
        <div className="w-full md:w-64">
          <Select
            value={subtopicFilter || undefined}
            onValueChange={(value) => setSubtopicFilter(value || null)}
            disabled={!topicFilter || topicFilter === "all"}
          >
            <SelectTrigger>
              <SelectValue placeholder={!topicFilter || topicFilter === "all" ? "Erst Topic wählen" : "Subtopic auswählen"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Subtopics</SelectItem>
              {subtopics.map(subtopic => (
                <SelectItem key={subtopic} value={subtopic}>{subtopic}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Reset Filter Button */}
        <Button 
          variant="outline" 
          size="icon"
          onClick={clearFilters}
          title="Filter zurücksetzen"
          className="w-10 h-10 shrink-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground">
        {filteredCount} von {totalCount} Fragen werden angezeigt
      </div>
    </div>
  )
}