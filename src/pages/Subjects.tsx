import { subjects, teachers } from "@/data/timetableData";
import { Card } from "@/components/ui/card";
import { BookOpen, User, Mail, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Subjects = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-foreground">
            Subjects & Teachers
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our courses and meet the faculty
          </p>
        </div>

        <Tabs defaultValue="subjects" className="w-full">
          <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="space-y-6">
            {subjects.map((subject, index) => (
              <Card
                key={subject.code}
                className="p-6 shadow-card hover:shadow-card-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {subject.name}
                      </h3>
                      <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                        {subject.code} • {subject.credits} credits
                      </span>
                    </div>
                    <p className="text-muted-foreground">{subject.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="teachers" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teachers.map((teacher, index) => (
              <Card
                key={teacher.email}
                className="p-6 shadow-card hover:shadow-card-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold mb-1 text-foreground">
                      {teacher.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {teacher.department}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-muted-foreground">{teacher.specialization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-accent" />
                        <a
                          href={`mailto:${teacher.email}`}
                          className="text-accent hover:underline"
                        >
                          {teacher.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Subjects;
