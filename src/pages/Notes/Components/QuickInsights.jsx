import React from 'react'

const QuickInsights = () => {
  const insights = [
    "Health begins with balance in daily habits and mindful living.",
    "Ayurveda focuses on understanding the root cause, not just symptoms.",
    "Small lifestyle changes can create long-term wellness.",
    "Mental well-being is deeply connected to physical health.",
    "Consistency in routine plays an important role in holistic healing.",
    "Preventive care is one of the strongest principles of Ayurveda."
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Quick Insights
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
          Reflections From My Learning Journey
        </h2>

        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          Small thoughts and learnings that continue to shape my understanding of Ayurveda and holistic well-being.
        </p>

        {/* Insights */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          
          {insights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              
              <p className="text-gray-700 leading-relaxed text-lg">
                “{item}”
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default QuickInsights