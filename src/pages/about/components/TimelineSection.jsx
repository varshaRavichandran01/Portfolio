import React from 'react'

const TimelineSection = () => {
  const timeline = [
    {
      year: "2021",
      title: "Started BAMS Journey",
      desc: "Began academic and clinical learning in Ayurveda at Alva’s Ayurveda Medical College."
    },
    {
      year: "2023",
      title: "Workshops & Awareness Programs",
      desc: "Participated in seminars, wellness activities, and mental health awareness initiatives."
    },
    {
      year: "2024",
      title: "Clinical Exposure",
      desc: "Gained hands-on learning across departments including Kayachikitsa, Manasaroga, Shalya, and Panchakarma."
    },
    {
      year: "2025",
      title: "Internship & Counseling Experience",
      desc: "Assisted in patient interactions, counseling sessions, and holistic wellness approaches."
    },
    {
      year: "Present",
      title: "Continuous Learning & Growth",
      desc: "Continuing to learn, observe, and share insights from the evolving journey in Ayurveda."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Timeline
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Milestones Along My Journey
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            A brief timeline highlighting important moments in my academic and clinical learning journey.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-emerald-100 md:-translate-x-1/2"></div>

          {/* Items */}
          <div className="space-y-12">
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0
                    ? 'md:flex-row-reverse'
                    : ''
                }`}
              >
                
                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-12 md:pl-10">
                  
                  <div className="bg-emerald-50 rounded-2xl p-6 shadow-sm border border-emerald-100">
                    
                    <span className="text-emerald-700 font-semibold text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-emerald-600 border-4 border-white shadow md:-translate-x-1/2"></div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default TimelineSection