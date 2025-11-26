import { Card } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            About EduSchedule
          </h1>
          <p className="text-xl text-muted-foreground">
            Simplifying academic scheduling through innovative technology
          </p>
        </div>

        <Card className="p-8 mb-8 shadow-card">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            EduSchedule was created as part of a Front-End Development course project to demonstrate 
            the power of modern web technologies in solving real-world academic challenges. Our mission 
            is to provide students and faculty with an intuitive, responsive, and efficient way to 
            manage their class schedules, reducing confusion and improving time management.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth text-center">
            <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">Purpose</h3>
            <p className="text-sm text-muted-foreground">
              Demonstrate front-end development skills while solving real academic scheduling needs
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth text-center">
            <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">Target Users</h3>
            <p className="text-sm text-muted-foreground">
              Students, teachers, and administrators managing academic schedules
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-card-hover transition-smooth text-center">
            <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Modern, responsive design with smart filtering and intuitive user experience
            </p>
          </Card>
        </div>

        <Card className="p-8 mb-8 shadow-card bg-primary text-primary-foreground">
          <h2 className="text-2xl font-heading font-semibold mb-4">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["React", "TypeScript", "Tailwind CSS", "React Router", "Lucide Icons", "shadcn/ui"].map((tech) => (
              <div key={tech} className="bg-primary-foreground/10 rounded-lg p-3 text-center">
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-heading font-semibold mb-4 text-foreground">Project Details</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><strong className="text-foreground">Course:</strong> Front-End Development (Level 1)</p>
            <p><strong className="text-foreground">Project Type:</strong> School Timetable Management System</p>
            <p><strong className="text-foreground">Key Features:</strong> Dynamic filtering, responsive design, interactive UI</p>
            <p><strong className="text-foreground">Development Time:</strong> 2025 Academic Project</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
