import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { BookOpen } from "lucide-react";

const Journal = () => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !entry.trim()) {
      toast({
        title: "Incomplete Entry",
        description: "Please add both a title and content",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Entry Saved!",
      description: "Your journal entry has been recorded successfully.",
    });

    setTitle("");
    setEntry("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-primary" />
              <h1 className="text-4xl font-bold">
                Your <span className="gradient-text">Journal</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Express your thoughts and feelings in a safe, private space
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-lg">
                  Entry Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="What's on your mind today?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Date */}
              <div className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="entry" className="text-lg">
                  Your Thoughts
                </Label>
                <Textarea
                  id="entry"
                  placeholder="Write freely... Let your thoughts flow without judgment."
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  className="min-h-96 text-base leading-relaxed"
                />
                <p className="text-xs text-muted-foreground">
                  {entry.length} characters
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 flex-1"
                >
                  Save Entry
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setTitle("");
                    setEntry("");
                  }}
                >
                  Clear
                </Button>
              </div>
            </form>
          </div>

          {/* Previous Entries Preview */}
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Recent Entries</h2>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl hover-lift smooth-transition cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">Sample Journal Entry {i}</h3>
                  <span className="text-sm text-muted-foreground">
                    {i} day{i > 1 ? "s" : ""} ago
                  </span>
                </div>
                <p className="text-muted-foreground line-clamp-2">
                  This is a preview of a previous journal entry. Click to read more...
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
