import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react"; // Assuming you are using lucide-react for icons
import { supabase } from "../../createClient";

export default function Header() {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
   
    
    
  };
  const getSession = async () =>{
    const {data} = await supabase.auth.getSession();
    localStorage.setItem('data' , JSON.stringify(data) );
    console.log(data);
  } 
  getSession();
  

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c2742] backdrop-blur-md border-b border-gray-500/10 opacity-90 md:px-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-purple-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-white font-bold text-xl">BarakahBytes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </a>

            {/* Login and Sign Up Buttons */}
            <button
              className="text-red-500 border-2 border-red-500 px-8 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer">
              Sign Up
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-red-400 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
