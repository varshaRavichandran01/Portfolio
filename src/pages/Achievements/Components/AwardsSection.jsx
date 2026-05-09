import React from 'react'

const AwardsSection = () => {
  const awards = [
    {
      title: "National Poster Presentation Winner",
      desc: "Secured first place for presenting awareness on mental health during World Mental Health Day."
    },
    {
      title: "National E-Poster Presentation",
      desc: "Achieved runner-up position during World Breastfeeding Week awareness competition."
    },
    {
      title: "Food & Lifestyle Awareness Participation",
      desc: "Participated in creative awareness initiatives focusing on diet, food safety, and healthy living."
    },
    {
      title: "Mental Health Awareness Activities",
      desc: "Actively engaged in academic and awareness programs related to emotional well-being and counseling."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Awards & Recognition
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Meaningful Milestones Along The Journey
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Opportunities and recognitions that encouraged continuous learning, creativity, and participation throughout my academic journey.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          
          {awards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              
              {/* Top */}
              <div className="flex items-center gap-4">
                
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-semibold">
                  0{index + 1}
                </div>

                {/* Title */}
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

export default AwardsSection