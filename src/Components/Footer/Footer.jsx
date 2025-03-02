import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2C] text-white py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">BarakahBytes</h2>
          <p className="text-gray-400 mt-2">Bridging spirituality and technology</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-300">Privacy</Link></li>
            <li><Link to="/support" className="hover:text-gray-300">Support</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Twitter size={24} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Github size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Instagram size={24} /></a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Stay Updated</h3>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="mt-2 p-2 w-full md:w-60 bg-transparent border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Bottom Line & Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400">
        © 2025 BarakahBytes. All rights reserved.
      </div>
    </footer>
  );
}
