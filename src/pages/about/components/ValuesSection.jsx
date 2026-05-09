import React from 'react'

const ValuesSection = () => {
  const values = [
    {
      title: "Holistic Understanding",
      desc: "Viewing health as a balance between body, mind, lifestyle, and emotional well-being."
    },
    {
      title: "Compassionate Learning",
      desc: "Approaching every experience with empathy, curiosity, and openness to continuous growth."
    },
    {
      title: "Prevention & Awareness",
      desc: "Believing in mindful living, preventive care, and sustainable wellness practices."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Values & Approach
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            The Principles That Shape My Learning
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 text-center hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ValuesSection