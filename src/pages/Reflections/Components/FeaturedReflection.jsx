import React from 'react'

const FeaturedReflection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Card */}
        <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 md:p-14 shadow-sm border border-emerald-100">
          
          {/* Label */}
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Featured Reflection
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-tight">
            Understanding Healing Beyond Symptoms
          </h2>

          {/* Divider */}
          <div className="w-16 h-1 bg-emerald-500 mt-6 rounded-full"></div>

          {/* Reflection */}
          <div className="mt-8 space-y-6">
            
            <p className="text-gray-600 leading-relaxed text-lg">
              One of the most meaningful lessons I continue to observe through Ayurveda is the importance of understanding the individual rather than only focusing on the illness.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Every clinical exposure reminds me that healing is deeply connected to lifestyle, emotions, routine, awareness, and balance. Small changes in daily habits often create meaningful long-term impact.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              As I continue learning, I’m gradually understanding that healthcare is not only about treatment — it is also about listening, empathy, prevention, and mindful living.
            </p>

          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-emerald-100">
            
            <p className="text-emerald-700 font-medium italic">
              “Learning Ayurveda continues to reshape the way I understand health and well-being.”
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FeaturedReflection