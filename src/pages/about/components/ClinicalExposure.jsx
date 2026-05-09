import React from 'react'

const ClinicalExposure = () => {
  const data = [
    {
      title: "Kayachikitsa",
      desc: "Developed understanding of Ayurvedic internal medicine, focusing on diagnosis, lifestyle correction, and holistic treatment approaches."
    },
    {
      title: "Manasaroga",
      desc: "Gained exposure in mental health care, including counseling approaches for stress, anxiety, and emotional well-being."
    },
    {
      title: "Shalya",
      desc: "Observed and assisted in minor procedures while learning traditional Ayurvedic surgical concepts."
    },
    {
      title: "Shalakya",
      desc: "Studied Ayurvedic approaches related to ENT and eye care through clinical observation and learning."
    },
    {
      title: "Prasuti Tantra & Stri Roga",
      desc: "Learned holistic perspectives on women’s health, pregnancy care, and gynecological wellness."
    },
    {
      title: "Panchakarma Exposure",
      desc: "Assisted in therapies including Abhyanga and Shirodhara while understanding therapeutic and relaxation-based healing practices."
    }
  ]

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Academic & Clinical Exposure
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Learning Through Practice & Observation
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            My academic journey has been shaped by hands-on clinical exposure across multiple Ayurvedic specialties, helping me understand patient-centered and holistic approaches to healthcare.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              
              {/* Top Row */}
              <div className="flex items-center gap-4">
                
                {/* Number */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

              </div>

              {/* Desc */}
              <p className="text-gray-600 mt-5 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ClinicalExposure