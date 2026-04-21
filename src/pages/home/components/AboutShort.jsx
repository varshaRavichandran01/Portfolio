import React from 'react'
import { Leaf } from 'lucide-react'

const AboutShort = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Leaf size={22} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3 rounded-full"></div>

        {/* Content */}
        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          I am currently on my journey in Ayurveda, learning the principles of holistic healing and 
          individualized care. My focus is on understanding the root cause of health conditions 
          rather than simply addressing symptoms.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed text-lg">
          Through clinical exposure in areas such as Kayachikitsa, Manasaroga, Shalya, Shalakya, 
          and Women’s health, I am continuously developing my knowledge and practical understanding 
          of Ayurvedic medicine.
        </p>

        {/* Highlight */}
        <p className="text-emerald-700 font-medium mt-6 max-w-2xl mx-auto">
          I am passionate about learning, growing, and sharing insights from Ayurveda to promote 
          balanced and mindful living.
        </p>

      </div>

    </section>
  )
}

export default AboutShort