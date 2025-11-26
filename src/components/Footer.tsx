import { Calendar, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6" />
              <span className="text-lg font-heading font-bold">EduSchedule</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Simplifying academic scheduling for students and faculty.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-accent transition-smooth">Home</a></li>
              <li><a href="/about" className="hover:text-accent transition-smooth">About</a></li>
              <li><a href="/timetable" className="hover:text-accent transition-smooth">Timetable</a></li>
              <li><a href="/subjects" className="hover:text-accent transition-smooth">Subjects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="/contact" className="flex items-center space-x-2 hover:text-accent transition-smooth">
                <Mail className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-accent transition-smooth">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 EduSchedule. Front-End Development Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
