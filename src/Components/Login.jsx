import React from "react";
import { supabase } from "../createClient";



const LoginPage = () => {
  const handleLogin =  (e) =>{
    e.preventDefault();
    const asalLogin = async () =>{
      const {data} = await supabase.auth.signInWithOAuth(
        {
          provider : 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
  
        }
      )
      

    }
    asalLogin();
    
    
    
    
  }
  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log("Error fetching session:", error.message);
    } else {
      console.log("Session:", data.session);
    }
  };
  const nikal = ()=>{
    const real = async () =>{
      console.log('logout')
      const {error} = await supabase.auth.signOut(
        
      )
      console.log(error)
    }
    real();
    
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <button
           onClick={getSession}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Logout
          </button>
          <button
           onClick={nikal}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            real log out
          </button>
      </div>
    </div>
  );
};

export default LoginPage;
