import React from 'react'

const AwarenessSection = () => {
  const activities = [
    {
      title: "Mental Health Awareness",
      desc: "Participated in initiatives and presentations focused on emotional well-being and mental health awareness."
    },
    {
      title: "Counseling Exposure",
      desc: "Assisted in counseling sessions related to stress management, lifestyle awareness, and emotional support."
    },
    {
      title: "Diet & Lifestyle Awareness",
      desc: "Engaged in educational activities promoting healthy habits, mindful eating, and preventive wellness."
    },
    {
      title: "Wellness & Yoga Participation",
      desc: "Actively involved in wellness-focused programs encouraging balance, mindfulness, and healthy living."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Awareness & Participation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Learning Through Community & Awareness
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Experiences that encouraged communication, awareness, and understanding of holistic well-being beyond academics.
          </p>

        </div>

        {/* Timeline Style Layout */}
        <div className="mt-16 space-y-8">
          
          {activities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold shrink-0">
                0{index + 1}
              </div>

              {/* Content */}
              <div>
                
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
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

export default AwarenessSection