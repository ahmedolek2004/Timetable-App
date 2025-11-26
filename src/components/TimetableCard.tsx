import { Card } from "./ui/card";
import { Clock, MapPin, User, BookOpen } from "lucide-react";
import { ClassEntry } from "@/data/timetableData";
import { Badge } from "./ui/badge";

interface TimetableCardProps {
  classEntry: ClassEntry;
}

const TimetableCard = ({ classEntry }: TimetableCardProps) => {
  const typeColors = {
    Lecture: "bg-primary text-primary-foreground",
    Lab: "bg-accent text-accent-foreground",
    Tutorial: "bg-success text-success-foreground",
  };

  return (
    <Card className="p-4 shadow-card hover:shadow-card-hover transition-smooth cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-heading font-semibold text-lg text-foreground">{classEntry.subject}</h3>
        <Badge className={typeColors[classEntry.type]}>{classEntry.type}</Badge>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center text-muted-foreground">
          <Clock className="h-4 w-4 mr-2 text-accent" />
          <span>{classEntry.time}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <User className="h-4 w-4 mr-2 text-accent" />
          <span>{classEntry.teacher}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 text-accent" />
          <span>{classEntry.room}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground">
          <BookOpen className="h-4 w-4 mr-2 text-accent" />
          <span>{classEntry.day}</span>
        </div>
      </div>
    </Card>
  );
};

export default TimetableCard;
