import React from "react";
import { Brain } from "lucide-react";


export default function KeyFeatures(){

    const key_features = [
        {
            heading : 'AI Mood Analysis',
            paragraph : 'Understand your moments with advanced emotional intelligence',
        }
        ,
        {
            heading : 'Quranic Ayah Suggestions',
            paragraph : 'Find divine guidance effortlessly through AI matching',
        }
        ,
        {
            heading : 'Shareable Posts',
            paragraph : 'Transform inspiration into beautifully designed content',
        }
    ]

    return(
        <section className="key-features bg-[#1a3550] w-full py-20 px-34  ">
            <div className="features">
                {
                    key_features.map((feature) =>
                    (
                        
                    )
                    )
                }
                <div className="mood-analysis flex gap-3 hover:bg-[#0c274295] py-6 px-2 rounded-2xl transition-all duration-500 ">
                    <Brain color="red" size={36} className="self-center" />
                    <div className="mood-heading-details flex-col">
                        <div className="heading text-white text-2xl font-bold">
                            AI Mood Analysis
                        </div>
                        <div className="paragraph text-gray-400 mt-1.5" >
                        Understand your moments with advanced emotional intelligence
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}