import React from 'react'

const NotesHero = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Small Label */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Notes & Learning
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
          Exploring Ayurveda Through Learning & Reflection
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 mt-8 leading-relaxed text-lg max-w-3xl mx-auto">
          A space where I share simplified notes, concepts, reflections, and learnings from my journey in Ayurveda and holistic wellness.
        </p>

      </div>

    </section>
  )
}

export default NotesHero