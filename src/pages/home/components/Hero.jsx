import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/images/varshaHero.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-100 px-6 md:px-20 sm:py-10 lg:py-0">
      
      <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-10 min-h-[70vh] md:min-h-[75vh]">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left lg:py-20">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Dr. Varsha Ravichandran
          </h1>

          <h2 className="text-xl text-emerald-700 font-semibold mt-3">
            BAMS | Ayurvedic Learner
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Exploring Ayurveda through clinical exposure and continuous learning, with a focus on 
            understanding root causes, holistic healing, and lifestyle-based well-being.
          </p>

          <p className="text-gray-500 mt-4">
            Sharing my journey, experiences, and insights as I grow into a compassionate Ayurvedic practitioner.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <Link to="/learning">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition">
                Explore My Journey
              </button>
            </Link>

            <Link to="/about">
              <button className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-xl hover:bg-emerald-100 transition">
                Learn More About Me
              </button>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-full relative">
          
          <img 
            src={HeroImage} 
            alt="Dr Varsha"
            className="h-[280px] sm:h-[320px] md:h-[520px] lg:h-[600px] object-contain drop-shadow-2xl"
          />

          {/* MOBILE ONLY bottom fade fix */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-gradient-to-t from-emerald-50 to-transparent md:hidden"></div>

        </div>
</div>
    </section>
  )
}

export default Hero