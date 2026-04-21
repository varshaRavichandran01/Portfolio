import React from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope, Brain, Scissors, Eye, HeartPulse } from 'lucide-react'

const LearningJourney = () => {
  const journey = [
    {
      title: "Kayachikitsa",
      desc: "Understanding internal medicine through Ayurvedic diagnosis and lifestyle-based treatments.",
      icon: <Stethoscope size={26} />
    },
    {
      title: "Manasaroga",
      desc: "Exploring mental health with Ayurvedic counseling and emotional well-being approaches.",
      icon: <Brain size={26} />
    },
    {
      title: "Shalya",
      desc: "Exposure to minor surgical procedures and traditional surgical principles.",
      icon: <Scissors size={26} />
    },
    {
      title: "Shalakya",
      desc: "Studying ENT and eye care through Ayurvedic diagnostic techniques.",
      icon: <Eye size={26} />
    },
    {
      title: "Prasuti & Stri Roga",
      desc: "Learning holistic care for women’s health and pregnancy management.",
      icon: <HeartPulse size={26} />
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Learning Journey
        </h2>

        <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          A glimpse into my clinical exposure and hands-on learning across key branches of Ayurveda.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {journey.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-left border border-gray-100"
            >
              
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-12">
          <Link to="/learning">
            <button className="px-6 py-3 border border-emerald-600 text-emerald-700 rounded-xl hover:bg-emerald-600 hover:text-white transition">
              Explore Full Learning Journey
            </button>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default LearningJourney