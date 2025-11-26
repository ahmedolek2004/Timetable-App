import { useState, useMemo } from "react";
import { timetableData } from "@/data/timetableData";
import TimetableCard from "@/components/TimetableCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X } from "lucide-react";

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState<string>("all");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedTeacher, setSelectedTeacher] = useState<string>("all");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const subjects = [...new Set(timetableData.map(c => c.subject))];
  const teachers = [...new Set(timetableData.map(c => c.teacher))];

  const filteredClasses = useMemo(() => {
    return timetableData.filter((classEntry) => {
      const dayMatch = selectedDay === "all" || classEntry.day === selectedDay;
      const subjectMatch = selectedSubject === "all" || classEntry.subject === selectedSubject;
      const teacherMatch = selectedTeacher === "all" || classEntry.teacher === selectedTeacher;
      return dayMatch && subjectMatch && teacherMatch;
    });
  }, [selectedDay, selectedSubject, selectedTeacher]);

  const clearFilters = () => {
    setSelectedDay("all");
    setSelectedSubject("all");
    setSelectedTeacher("all");
  };

  const hasActiveFilters = selectedDay !== "all" || selectedSubject !== "all" || selectedTeacher !== "all";

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-foreground">
            Class Timetable
          </h1>
          <p className="text-xl text-muted-foreground">
            Filter and view your weekly schedule
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-heading font-semibold text-foreground">Filters</h2>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="ml-auto text-accent hover:text-accent/80"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Day</label>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger>
                  <SelectValue placeholder="All Days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Days</SelectItem>
                  {days.map(day => (
                    <SelectItem key={day} value={day}>{day}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Teacher</label>
              <Select value={selectedTeacher} onValueChange={setSelectedTeacher}>
                <SelectTrigger>
                  <SelectValue placeholder="All Teachers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Teachers</SelectItem>
                  {teachers.map(teacher => (
                    <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredClasses.length}</span> classes
          </p>
        </div>

        {/* Timetable Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((classEntry) => (
              <TimetableCard key={classEntry.id} classEntry={classEntry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-lg shadow-card">
            <p className="text-xl text-muted-foreground mb-2">No classes found</p>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timetable;
