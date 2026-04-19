import React from 'react'
import HeroImage from '../../../assets/images/varshaHero.png'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-100 px-6 md:px-20 ">
      
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Dr. Varsha Ravichandran
          </h1>

          <h2 className="text-xl text-emerald-700 font-semibold mt-3">
            BAMS | Ayurvedic Physician
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            Dedicated to holistic healing through Ayurveda, focusing on root-cause treatment, 
            personalized care, and preventive healthcare. Experienced in Manasaroga, Kayachikitsa, 
            Shalya, Shalakya, and Women’s health.
          </p>

          <p className="text-gray-500 mt-4">
            Blending traditional Ayurvedic wisdom with modern healthcare approaches to ensure 
            complete well-being.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition">
              Book Consultation
            </button>
            <button className="border border-emerald-600 text-emerald-700 px-6 py-3 rounded-xl hover:bg-emerald-100 transition">
              View Services
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end items-end relative">
  <img 
    src={HeroImage} 
    alt="Dr Varsha"
    className="h-[320px] md:h-[500px] lg:h-[550px] object-contain drop-shadow-2xl"
  />
</div>

      </div>

    </section>
  )
}

export default Hero