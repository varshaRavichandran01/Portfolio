import React from 'react'

const LearningJourney = () => {
  const journey = [
    {
      title: "Kayachikitsa",
      desc: "Focused on understanding internal medicine and treating diseases through Ayurvedic principles, diet, and lifestyle corrections."
    },
    {
      title: "Manasaroga",
      desc: "Gained exposure in mental health, learning Ayurvedic approaches to emotional and psychological well-being."
    },
    {
      title: "Shalya",
      desc: "Observed and assisted in minor surgical procedures, understanding traditional surgical concepts."
    },
    {
      title: "Shalakya",
      desc: "Studied conditions related to ENT and eye care with Ayurvedic diagnostic methods."
    },
    {
      title: "Prasuti Tantra & Stri Roga",
      desc: "Learned women’s health management, including pregnancy care and gynecological conditions."
    }
  ]

  return (
    <section className="bg-emerald-50 px-6 md:px-20 py-16">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Learning Journey
        </h2>

        <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          My journey in Ayurveda is built through continuous clinical exposure and hands-on learning 
          across different specialized branches of traditional medicine.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          
          {journey.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-semibold text-emerald-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default LearningJourney