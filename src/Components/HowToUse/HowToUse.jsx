import React from "react";
import { UploadCloudIcon, Brain, Share2 } from "lucide-react";

export default function HowToUse() {
  const data = [
    {
      number: "01",
      Icon: UploadCloudIcon,
      heading: "Upload Your Photo",
      paragraph: "Share your moment or express your current mood",
    },
    {
      number: "02",
      Icon: Brain,
      heading: "AI Analysis",
      paragraph: "Our AI matches your mood with relevant Quranic wisdom",
    },
    {
      number: "03",
      Icon: Share2,
      heading: "Share Your Post",
      paragraph: "Get a beautifully designed post ready to share",
    },
  ];
  const Icon = UploadCloudIcon;

  return (
    <section className="how-to-use flex flex-col  bg-[#0C2742] text-white items-center py-20 gap-11">
      <h2 className="main-heading text-4xl md:text-6xl font-bold text-shadow">
        How It Works
      </h2>
      <div
        className="text-lg text-gray-400 font-semibold"
        style={{ wordSpacing: "0.3rem" }}
      >
        Three simple steps to spiritual reflection
      </div>
      <div className="steps flex-col flex xl:flex-row gap-20 justify-center px-2">
        {data.map((step) => {  
          return (
            <div key={step.number} className="feature-of-using">
              <div className="step flex flex-col items-center gap-3.5">
                <h3 className="text-5xl font-bold text-red-400">
                  {step.number}
                </h3>
                <step.Icon size={48} color="red" className="font-semibold" />
                <div className="heading-step text-3xl font-bold text-shadow drop-shadow-sm">
                  {step.heading}
                </div>
                <div className="">{step.paragraph}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
