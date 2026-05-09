import React from 'react'

const JourneySection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            My Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Discovering Ayurveda Beyond Medicine
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Content */}
        <div className="mt-12 space-y-6">
          
          <p className="text-gray-600 leading-relaxed text-lg">
            Ayurveda became more than an academic path for me — it introduced me to a way of understanding health through balance, awareness, and mindful living.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            As I continued my learning journey, I developed a deeper appreciation for how Ayurveda focuses not only on physical well-being, but also on emotional health, lifestyle, and prevention.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            My clinical exposure across different specialties helped me understand the importance of individualized care and compassionate patient interaction.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            Through this platform, I hope to continue learning, sharing meaningful insights, and growing into a practitioner who approaches healing with both knowledge and empathy.
          </p>

        </div>

      </div>

    </section>
  )
}

export default JourneySection