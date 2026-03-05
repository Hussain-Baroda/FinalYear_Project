import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import axios from "axios"; // Added axios
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Brain, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate(); // Initialize the redirect function

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      // 1. Send Login Request to Node.js Backend
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // 2. Store user data so the app "remembers" you are logged in
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast({
        title: "Success",
        description: "Logged in successfully!",
      });

      // 3. Redirect to Home/Dashboard
      navigate("/"); 

    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.response?.data?.error || "Invalid email or password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-hero p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Brain className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold gradient-text">MindCare</span>
        </Link>

        {/* Card */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-primary hover:text-accent smooth-transition">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6">
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/signup" className="text-primary hover:text-accent smooth-transition font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Neeche wala CODE PEHLE WALA HAI NEW EDITED CODE RAKHA HAI UPER , CHANGES KAR LENA CHAHIYE TO


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Brain, Mail, Lock } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       toast({
//         title: "Error",
//         description: "Please fill in all fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     toast({
//       title: "Success",
//       description: "Logged in successfully! (Demo mode)",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center gradient-hero p-4">
//       <div className="w-full max-w-md animate-fade-in"> 
//         {/* Logo */}
//         <Link to="/" className="flex items-center justify-center gap-2 mb-8">
//           <Brain className="w-10 h-10 text-primary" />
//           <span className="text-2xl font-bold gradient-text">MindCare</span>
//         </Link>

//         {/* Card */}
//         <div className="glass-card p-8 rounded-2xl">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
//             <p className="text-muted-foreground">Sign in to continue your journey</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="your@email.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="••••••••"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="pl-10"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Forgot Password */}
//             <div className="flex justify-end">
//               <a href="#" className="text-sm text-primary hover:text-accent smooth-transition">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Submit */}
//             <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6">
//               Sign In
//             </Button>
//           </form>

//           {/* Sign Up Link */}
//           <div className="mt-6 text-center text-sm">
//             <span className="text-muted-foreground">Don't have an account? </span>
//             <Link to="/signup" className="text-primary hover:text-accent smooth-transition font-medium">
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

