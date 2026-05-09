import React from 'react'

const WorkshopsSection = () => {
  const workshops = [
    {
      title: "Ayurvedic Cosmetology Workshop",
      desc: "Participated in learning sessions focused on holistic skin and hair care approaches through Ayurveda."
    },
    {
      title: "Manasaroga & Manovigyan Workshop",
      desc: "Explored Ayurvedic perspectives on mental health, emotional well-being, and counseling approaches."
    },
    {
      title: "Career Guidance & Academic Webinars",
      desc: "Attended professional sessions aimed at continuous academic and personal development."
    },
    {
      title: "International Yoga Day Participation",
      desc: "Engaged in wellness activities promoting mindfulness, movement, and preventive health practices."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Workshops & Certifications
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Learning Beyond The Classroom
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Workshops, awareness programs, and academic sessions that contributed to my continuous growth and learning journey.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          
          {workshops.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-6 hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-white text-emerald-700 flex items-center justify-center font-semibold shadow-sm">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mt-6 leading-snug">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default WorkshopsSection