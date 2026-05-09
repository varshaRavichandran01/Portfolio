import React from 'react'

const ReflectionsHero = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Label */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Reflections
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
          Thoughts, Learnings & Reflections Along The Journey
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 mt-8 leading-relaxed text-lg max-w-3xl mx-auto">
          A personal space to share reflections, experiences, and small learnings that continue to shape my understanding of Ayurveda, wellness, and mindful living.
        </p>

      </div>

    </section>
  )
}

export default ReflectionsHero