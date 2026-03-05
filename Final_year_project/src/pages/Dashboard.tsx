import { LayoutDashboard, BookOpen, Heart, Brain, TrendingUp, Lightbulb } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: Heart, label: "Mood Test", path: "/mood-test" },
    { icon: BookOpen, label: "Journal", path: "/journal" },
    { icon: Brain, label: "Meditation", path: "/meditation" },
    { icon: Lightbulb, label: "Tips", path: "/tips" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex-shrink-0">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold gradient-text">MindCare</span>
          </Link>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-lg flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="text-sm text-muted-foreground hover:text-foreground smooth-transition">
                Logout
              </button>
            </Link>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
              <p className="text-muted-foreground">Here's your mental wellness overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Mood Score</span>
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">8.2</div>
                <div className="flex items-center gap-1 text-sm text-accent">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12% from last week</span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Journal Entries</span>
                  <BookOpen className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">23</div>
                <div className="text-sm text-muted-foreground">This month</div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Meditation Time</span>
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">4.5h</div>
                <div className="text-sm text-muted-foreground">Total this week</div>
              </div>
            </div>

            {/* Mood Trends Chart */}
            <div className="glass-card p-6 rounded-xl animate-fade-in-up">
              <h3 className="text-xl font-semibold mb-6">Mood Trends</h3>
              <div className="h-64 flex items-end justify-between gap-3">
                {[6, 7, 5, 8, 9, 7, 8, 6, 7, 9, 8, 7, 8, 9].map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-primary rounded-t-lg smooth-transition hover:opacity-80 cursor-pointer"
                    style={{ height: `${(value / 10) * 100}%` }}
                    title={`Score: ${value}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                <span>Week 1</span>
                <span>Week 2</span>
              </div>
            </div>

            {/* AI Insights */}
            <div className="glass-card p-6 rounded-xl border border-primary/30 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Today's AI Insight</h3>
                  <p className="text-muted-foreground">
                    Your mood scores show a positive upward trend! Your consistent journaling and
                    meditation practices are making a real difference. Consider adding a short
                    morning meditation session to boost your energy levels even further.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              <Link to="/mood-test" className="glass-card p-6 rounded-xl hover-lift smooth-transition">
                <Heart className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold mb-2">Take Mood Test</h3>
                <p className="text-sm text-muted-foreground">
                  Check in with your emotions and track your progress
                </p>
              </Link>

              <Link to="/journal" className="glass-card p-6 rounded-xl hover-lift smooth-transition">
                <BookOpen className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Write in Journal</h3>
                <p className="text-sm text-muted-foreground">
                  Express your thoughts and feelings in a safe space
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
