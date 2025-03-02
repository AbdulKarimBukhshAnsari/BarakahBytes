import React, { useEffect } from "react";
import { supabase } from "../../createClient";

export default function StartNow() {
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.from("user").select("*");

        if (error) throw error;
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUser();
  }, []); // Runs only once on mount

  



  return (
    <section className="start-now bg-gradient-to-b from-[#1e374f] to-blue-950 text-white flex flex-col items-center justify-center text-center py-20 gap-6 px-3.5">
      <h2 className="start-now-heading text-3xl md:text-5xl lg:text-6xl  font-bold max-w-4xl text-red-500  ">
        Bring Barakah Into Your Everyday Moments
      </h2>
      <div className="mt-4 max-w-md">
        Join thousands of users finding spiritual connection through technology
      </div>
      <button className="bg-red-600 text-white px-6 py-3 mt-6 rounded-lg">
        Start Now - It's Free
      </button>
    </section>
  );
}
