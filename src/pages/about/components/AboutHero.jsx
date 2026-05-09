import React from 'react'
import AboutImage from '../../../assets/images/varsha2.png'

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-16 md:py-24">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src={AboutImage}
            alt="Dr Varsha"
            className="h-[320px] md:h-[500px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          
          <p className="text-emerald-600 font-semibold tracking-wide uppercase">
            About Me
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight">
            Learning Ayurveda with Purpose & Compassion
          </h1>

          <div className="w-16 h-1 bg-emerald-500 mt-5 rounded-full mx-auto md:mx-0"></div>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            My journey in Ayurveda began with a deep curiosity about holistic healing and the connection between lifestyle, mind, and overall well-being.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            Through academic learning, clinical exposure, and continuous self-growth, I am gradually building my understanding of traditional Ayurvedic wisdom and its relevance in modern life.
          </p>

          <p className="text-emerald-700 font-medium mt-6">
            This platform is a space where I share my learning, experiences, and evolving perspective on Ayurveda.
          </p>

        </div>

      </div>

    </section>
  )
}

export default AboutHero