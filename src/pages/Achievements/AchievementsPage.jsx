import React from 'react'

const AchievementsPage = () => {
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
      title: "Food Safety Awareness",
      desc: "Participated in awareness program focusing on diet and lifestyle.",
      img: "/images/ach3.png"
    },
    {
      title: "International Yoga Day",
      desc: "Promoted yoga and holistic wellness practices.",
      img: "/images/ach4.png"
    },
    {
      title: "Career Guidance Webinar",
      desc: "Participated in professional development and guidance session.",
      img: "/images/ach2.png"
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-16 min-h-screen">
      
      <div className="max-w-6xl mx-auto text-center">
        
        <h1 className="text-4xl font-bold text-gray-800">
          Achievements & Certifications
        </h1>

        <div className="w-20 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          A detailed showcase of my academic achievements, certifications, and participation in various events.
        </p>

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
                className="w-full h-[220px] object-cover"
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

      </div>

    </section>
  )
}

export default AchievementsPage