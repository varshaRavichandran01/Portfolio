import React from 'react'

const FeaturedTopics = () => {
  const topics = [
    {
      title: "Manasaroga",
      desc: "Understanding mental health and emotional well-being through Ayurvedic perspectives."
    },
    {
      title: "Panchakarma",
      desc: "Learning detoxification therapies and their role in holistic healing."
    },
    {
      title: "Women’s Health",
      desc: "Exploring Ayurvedic approaches related to wellness, balance, and care."
    },
    {
      title: "Diet & Lifestyle",
      desc: "Simple insights on mindful living, food habits, and preventive health."
    },
    {
      title: "Ayurvedic Concepts",
      desc: "Breaking down classical principles and concepts into easy learning notes."
    },
    {
      title: "Holistic Wellness",
      desc: "Reflecting on balance, mindfulness, and sustainable healthy living."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Featured Topics
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Areas I’m Currently Exploring
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Topics and concepts that continue to shape my understanding of Ayurveda and holistic wellness.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          
          {topics.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 hover:shadow-md transition"
            >
              
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-white text-emerald-700 flex items-center justify-center font-semibold shadow-sm">
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

export default FeaturedTopics