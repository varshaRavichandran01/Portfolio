import React from 'react'

const ClosingReflection = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Small Label */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Reflection
        </p>

        {/* Quote */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-relaxed">
          “Healing begins with awareness, balance, and mindful living.”
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>

        {/* Supporting Text */}
        <p className="text-gray-600 mt-8 leading-relaxed text-lg">
          Thank you for taking the time to explore my journey, learnings, and experiences in Ayurveda.  
          This platform continues to grow along with my learning, reflection, and understanding of holistic well-being.
        </p>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Dr. Varsha Ravichandran
        </p>

      </div>

    </section>
  )
}

export default ClosingReflection