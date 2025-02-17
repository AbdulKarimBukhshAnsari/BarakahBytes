import React from "react";
import "../../custom.css";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0C2742] to-[#1B344F] min-h-screen flex items-center py-24 px-4">
      {/* Floating Particles (Kept for effect if needed) */}
      <div className="floating-particles" aria-hidden="true"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight mb-6 text-white text-shadow">
          Spiritual Insights,
          <br />
          Powered by AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto opacity-75">
          Upload a photo, uncover a Quranic Ayah, and create meaningful
          reflections in seconds
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
          <button className="bg-red-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-red-700 transition-colors duration-300 cursor-pointer">
            Get Started
          </button>
          <button className="border-2 border-red-600 text-red-600 px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
            How It Works
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80"
            alt="App Interface Preview"
            className="rounded-2xl shadow-2xl mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl custom-bounce"
          />
        </div>
      </div>
    </section>
  );
}
