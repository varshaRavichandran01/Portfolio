import React from 'react'

const ReflectionCards = () => {
  const reflections = [
    {
      title: "The Importance of Listening",
      desc: "One of the most valuable lessons I continue to observe is how meaningful patient listening can be in understanding overall well-being."
    },
    {
      title: "Healing Through Routine",
      desc: "Daily habits, sleep, food, and emotional balance often play a greater role in wellness than we realize."
    },
    {
      title: "Learning Beyond Textbooks",
      desc: "Clinical exposure continues to teach me perspectives that go beyond theory and deepen my understanding of holistic care."
    },
    {
      title: "Mind & Body Connection",
      desc: "Ayurveda constantly reminds me that emotional well-being and physical health are deeply interconnected."
    },
    {
      title: "Small Changes Matter",
      desc: "Simple and mindful lifestyle corrections can create meaningful long-term improvements in health."
    },
    {
      title: "Growing Through Observation",
      desc: "Every interaction, workshop, and learning experience adds a new perspective to my journey in Ayurveda."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Reflections
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Small Learnings Along The Way
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Short reflections and observations that continue to shape my understanding of wellness, balance, and Ayurveda.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          
          {reflections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
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

export default ReflectionCards