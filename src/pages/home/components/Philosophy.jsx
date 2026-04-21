import React from 'react'
import { Leaf } from 'lucide-react'

const Philosophy = () => {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-6 md:px-20 py-20">
      
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Leaf size={26} />
          </div>
        </div>

        {/* Quote */}
        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
          “Health is not just the absence of disease, but a state of balance between body, mind, and lifestyle.”
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>

        {/* Supporting line */}
        <p className="text-gray-600 mt-6">
          My approach to Ayurveda is rooted in understanding each individual holistically, 
          focusing on sustainable and mindful healing.
        </p>

      </div>

    </section>
  )
}

export default Philosophy