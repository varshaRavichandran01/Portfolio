import React from 'react'
import FeaturedImage from '../../../assets/images/varshaHero.png'

const FeaturedAchievement = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Featured Achievement
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            National Level Poster Presentation Winner
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE */}
          <div className="flex justify-center">
            
            <img
              src={FeaturedImage}
              alt="Featured Achievement"
              className="rounded-3xl shadow-lg object-cover w-full max-w-md"
            />

          </div>

          {/* TEXT */}
          <div>
            
            {/* Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm">
              🏆 First Prize Winner
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 leading-snug">
              World Mental Health Day Poster Presentation
            </h3>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Recognized for presenting ideas and awareness related to mental health through a national-level poster presentation competition conducted during World Mental Health Day.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              This experience encouraged deeper learning in Manasaroga and reinforced the importance of awareness, communication, and emotional well-being in healthcare.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FeaturedAchievement