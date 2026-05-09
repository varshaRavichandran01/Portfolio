import React from 'react'

const SubjectCategories = () => {
  const categories = [
    "Kayachikitsa",
    "Manasaroga",
    "Panchakarma",
    "Women’s Health",
    "Dinacharya",
    "Ahara",
    "Yoga & Wellness",
    "Mental Health",
    "Preventive Care",
    "Holistic Healing",
    "Ayurvedic Concepts",
    "Lifestyle Practices"
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Subject Categories
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
          Topics & Areas of Interest
        </h2>

        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          A growing collection of subjects, concepts, and areas I continue to learn and reflect on through Ayurveda.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          
          {categories.map((item, index) => (
            <button
              key={index}
              className="px-5 py-3 rounded-full bg-white border border-emerald-100 text-gray-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition shadow-sm"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </section>
  )
}

export default SubjectCategories