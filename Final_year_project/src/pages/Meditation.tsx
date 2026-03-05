import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Pause, Clock } from "lucide-react";
import { useState } from "react";

const sessions = [
  {
    id: 1,
    title: "Morning Mindfulness",
    duration: "10 min",
    description: "Start your day with calm and focus",
    category: "Morning",
  },
  {
    id: 2,
    title: "Stress Relief",
    duration: "15 min",
    description: "Release tension and find peace",
    category: "Stress",
  },
  {
    id: 3,
    title: "Sleep Preparation",
    duration: "20 min",
    description: "Wind down for restful sleep",
    category: "Sleep",
  },
  {
    id: 4,
    title: "Anxiety Management",
    duration: "12 min",
    description: "Calm your mind and ease worries",
    category: "Anxiety",
  },
  {
    id: 5,
    title: "Energy Boost",
    duration: "8 min",
    description: "Refresh and energize your day",
    category: "Energy",
  },
  {
    id: 6,
    title: "Deep Relaxation",
    duration: "25 min",
    description: "Complete body and mind relaxation",
    category: "Relaxation",
  },
];

const Meditation = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">
              Guided <span className="gradient-text">Meditation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find peace and clarity with our curated meditation sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session, index) => (
              <div
                key={session.id}
                className="glass-card p-6 rounded-xl hover-lift smooth-transition animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {session.category}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{session.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                <p className="text-muted-foreground mb-6">{session.description}</p>

                <Button
                  onClick={() => setPlaying(playing === session.id ? null : session.id)}
                  className={`w-full ${
                    playing === session.id
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {playing === session.id ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Start Session
                    </>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Meditation;
