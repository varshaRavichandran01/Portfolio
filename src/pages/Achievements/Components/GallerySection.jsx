import React from 'react'

// IMPORT YOUR IMAGES
import Img1 from '../../../assets/images/varshaHero.png'
import Img2 from '../../../assets/images/varshaHero.png'
import Img3 from '../../../assets/images/varshaHero.png'
import Img4 from '../../../assets/images/varshaHero.png'
import Img5 from '../../../assets/images/varshaHero.png'
import Img6 from '../../../assets/images/varshaHero.png'

const GallerySection = () => {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Gallery & Highlights
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Moments From My Learning Journey
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            A collection of academic experiences, workshops, presentations, and memorable milestones throughout my journey in Ayurveda.
          </p>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-sm hover:shadow-lg transition"
            >
              
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default GallerySection