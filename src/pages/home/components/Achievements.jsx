import React from 'react'
import { Link } from 'react-router-dom'
import { Award, Sparkles } from 'lucide-react'
const Achievements = () => {
  const data = [
    {
      title: "1st Prize – National Poster Presentation",
      desc: "Won first place in a national-level competition on World Mental Health Day.",
      img: "/images/ach1.png"
    },
    {
      title: "Breastfeeding Awareness Competition",
      desc: "Secured runner-up position in national e-poster presentation.",
      img: "/images/ach5.png"
    },
    {
      title: "International Yoga Day",
      desc: "Actively participated in promoting yoga and holistic wellness.",
      img: "/images/ach4.png"
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Achievements & Recognition
        </h2>

        <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          A glimpse of my academic journey, participation, and recognitions.
        </p>

        {/* Highlight Achievement */}
 

<div className="relative bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-50 p-6 md:p-8 rounded-3xl shadow-md mt-10 overflow-hidden">

  {/* Subtle background icon */}
  <Sparkles 
    size={120} 
    className="absolute -top-6 -right-6 text-emerald-200 opacity-30"
  />

  <div className="flex items-start gap-4 relative z-10">
    
    {/* Icon */}
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-md">
      <Award size={26} />
    </div>

    {/* Content */}
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-emerald-900">
        First Prize – National Level Poster Presentation
      </h3>

      <p className="text-gray-700 mt-2 leading-relaxed">
        Awarded for excellence in mental health awareness presentation on World Mental Health Day.
      </p>
    </div>

  </div>

</div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {data.map((item, index) => (
            <div 
              key={index}
              className="bg-emerald-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-emerald-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* REDIRECT BUTTON */}
        <div className="mt-12">
          <Link to="/achievements">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition shadow-sm">
              View All Achievements
            </button>
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Achievements