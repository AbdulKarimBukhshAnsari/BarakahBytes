import React from "react";
import { Brain, Sparkles, Share2 } from "lucide-react";
import { supabase } from "../../createClient";

export default function KeyFeatures() {
  

  const dataMining = async () =>{

    const {data} = await supabase.from('user').select('*');
    console.log(data);
  }

  dataMining();
  
  const key_features = [
    {
      key: 0,
      heading: "AI Mood Analysis",
      paragraph: "Understand your moments with advanced emotional intelligence",
    },
    {
      key: 1,
      heading: "Quranic Ayah Suggestions",
      paragraph: "Find divine guidance effortlessly through AI matching",
    },
    {
      key: 2,
      heading: "Shareable Posts",
      paragraph: "Transform inspiration into beautifully designed content",
    },
  ];

  const icons = [Brain, Sparkles, Share2];

  return (
    <section className="key-features bg-[#1a3550] w-full py-16 px-9 md:px-16 flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start">
      {/* Features Section */}
      <div className="features flex flex-col gap-6 w-full md:w-[50%]">
        {key_features.map((feature) => {
          const Icon = icons[feature.key];
          return (
            <div
              key={feature.key}
              className="mood-analysis flex gap-4 items-center hover:bg-[#0c274295] py-6 px-4 rounded-2xl transition-all duration-500 w-full"
            >
              <Icon color="red" size={36} />
              <div className="mood-heading-details">
                <div className="heading text-white text-xl md:text-2xl font-bold">
                  {feature.heading}
                </div>
                <div className="paragraph text-gray-400 mt-2 text-sm md:text-base">
                  {feature.paragraph}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Section */}
      <div className="image bg-[#36414A] p-2 relative rounded-3xl w-fit max-w-full self-center">
        <img
          src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="AI Mood Analysis"
          className="max-w-full md:w-[550px] rounded-3xl rotate-6"
        />
      </div>
    </section>
  );
}
