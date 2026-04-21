import React from 'react'
import { Stethoscope, Brain, Scissors, Eye, HeartPulse } from 'lucide-react'

const LearningPage = () => {
  const journey = [
    {
      title: "Kayachikitsa",
      desc: "Focused on diagnosing and managing internal diseases using Ayurvedic principles. Learned about diet regulation, lifestyle corrections, and herbal formulations."
    },
    {
      title: "Manasaroga",
      desc: "Gained hands-on exposure in mental health care, including stress, anxiety, and insomnia management using Satvavajaya Chikitsa."
    },
    {
      title: "Shalya",
      desc: "Observed and assisted in minor surgical procedures, understanding traditional Ayurvedic surgical concepts."
    },
    {
      title: "Shalakya",
      desc: "Studied diseases related to ENT and eye care with specialized Ayurvedic diagnostic approaches."
    },
    {
      title: "Prasuti Tantra & Stri Roga",
      desc: "Focused on women’s health, pregnancy care, and gynecological treatments through Ayurveda."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-16 min-h-screen">
      
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          My Learning Journey
        </h1>

        <div className="w-20 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <div className="mt-12 space-y-8">
          
          {journey.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start bg-emerald-50 p-6 rounded-2xl"
            >
              
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-600 text-white">
                {index === 0 && <Stethoscope size={22} />}
                {index === 1 && <Brain size={22} />}
                {index === 2 && <Scissors size={22} />}
                {index === 3 && <Eye size={22} />}
                {index === 4 && <HeartPulse size={22} />}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-emerald-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default LearningPage