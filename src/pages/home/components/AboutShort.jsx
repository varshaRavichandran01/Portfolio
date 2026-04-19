import React from 'react'

const AboutShort = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h2>

        {/* Small divider */}
        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-3 rounded-full"></div>

        {/* Content */}
        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          I am currently pursuing my journey in Ayurveda, deeply rooted in the principles of holistic healing 
          and individualized care. My learning focuses on understanding the root cause of diseases rather than 
          just treating symptoms.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed text-lg">
          Through my clinical exposure in areas like Kayachikitsa, Manasaroga, Shalya, Shalakya, and Women’s health, 
          I am continuously building my knowledge and skills to become a compassionate and effective Ayurvedic practitioner.
        </p>

        {/* Highlight line */}
        <p className="text-emerald-700 font-medium mt-6">
          Passionate about blending traditional Ayurvedic wisdom with modern understanding for better well-being.
        </p>

      </div>

    </section>
  )
}

export default AboutShort