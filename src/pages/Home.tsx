import { Button } from "@/components/ui/button";
import { Calendar, Filter, Smartphone, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Interactive Timetable",
      description: "View your complete weekly schedule at a glance with an intuitive interface.",
    },
    {
      icon: Filter,
      title: "Smart Filtering",
      description: "Filter classes by day, subject, or teacher to find exactly what you need.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Access your schedule anytime, anywhere on any device.",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay informed with instant updates to your class schedule.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Welcome to EduSchedule
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Your smart academic timetable management system. Organize, filter, and access your classes with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/timetable")}
              className="text-lg px-8 py-6"
            >
              View Timetable
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card shadow-card hover:shadow-card-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-block p-4 rounded-full bg-accent/10 mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and faculty using EduSchedule to manage their academic schedules efficiently.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/timetable")}
            className="text-lg px-8 py-6"
          >
            Explore Timetable
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
