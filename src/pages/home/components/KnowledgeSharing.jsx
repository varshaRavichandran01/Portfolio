import React from 'react'
import { Link } from 'react-router-dom'
import { Presentation, Users, BookOpen } from 'lucide-react'

const KnowledgeSharing = () => {
  const data = [
    {
      title: "Health Awareness",
      desc: "Participated in programs focused on diet, lifestyle, and wellness.",
      icon: <Presentation size={28} />
    },
    {
      title: "Patient Counseling",
      desc: "Guided individuals on stress, anxiety, and lifestyle balance.",
      icon: <Users size={28} />
    },
    {
      title: "Continuous Learning",
      desc: "Actively involved in workshops and academic discussions.",
      icon: <BookOpen size={28} />
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Knowledge Sharing
        </h2>

        <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-xl mx-auto">
          A glimpse of my involvement in spreading awareness and applying Ayurvedic knowledge.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          {data.map((item, index) => (
            <div 
              key={index}
              className="bg-emerald-50 p-6 rounded-2xl text-center hover:shadow-md transition"
            >
              
              {/* ICON */}
              <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="mt-10">
          <Link to="/learning">
            <button className="px-6 py-3 border border-emerald-600 text-emerald-700 rounded-xl hover:bg-emerald-600 hover:text-white transition">
              Explore More
            </button>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default KnowledgeSharing