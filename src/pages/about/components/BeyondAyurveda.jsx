import React from 'react'

const BeyondAyurveda = () => {
  const interests = [
    {
      title: "Yoga & Mindfulness",
      desc: "Exploring practices that promote balance, awareness, and overall well-being."
    },
    {
      title: "Creative Expression",
      desc: "Actively participating in cultural and creative activities that encourage confidence and communication."
    },
    {
      title: "Health Awareness",
      desc: "Interested in sharing simple and mindful approaches to healthier everyday living."
    },
    {
      title: "Continuous Self-Growth",
      desc: "Believing in lifelong learning, personal growth, and meaningful human connection."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Beyond Ayurveda
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Interests That Inspire My Journey
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Beyond academics and clinical learning, I enjoy experiences that encourage creativity, mindfulness, and meaningful growth.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          
          {interests.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              
              {/* Top */}
              <div className="flex items-center gap-4">
                
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

              </div>

              {/* Desc */}
              <p className="text-gray-600 mt-5 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default BeyondAyurveda