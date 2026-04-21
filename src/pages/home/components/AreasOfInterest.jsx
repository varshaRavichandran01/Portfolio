import React from 'react'
import { Sparkles, Brain, Leaf, HeartPulse } from 'lucide-react'

const AreasOfInterest = () => {
  const data = [
    {
      title: "Ayurvedic Cosmetology",
      desc: "Exploring natural and holistic approaches to skin and hair care using Ayurvedic principles.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Mental Health & Well-being",
      desc: "Understanding emotional balance through Manasaroga and applying Ayurvedic counseling techniques.",
      icon: <Brain size={32} />
    },
    {
      title: "Preventive Healthcare",
      desc: "Focusing on lifestyle, diet, and daily routines to prevent diseases before they occur.",
      icon: <Leaf size={32} />
    },
    {
      title: "Women’s Health",
      desc: "Learning holistic approaches to support women’s health across different stages of life.",
      icon: <HeartPulse size={32} />
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Areas of Interest
        </h2>

        <div className="w-20 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Focused areas that reflect my passion for holistic healing, preventive care, and patient well-being.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          
          {data.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-center border border-gray-100"
            >
              
              {/* ICON */}
              <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-800 mt-5">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default AreasOfInterest