import React from 'react'

const RecentNotes = () => {
  const notes = [
    {
      category: "Mental Health",
      title: "Understanding Manasaroga in Ayurveda",
      desc: "A brief reflection on how Ayurveda approaches emotional balance, stress, and mental well-being."
    },
    {
      category: "Lifestyle",
      title: "The Importance of Dinacharya",
      desc: "Simple insights into daily routines and how consistent habits support overall wellness."
    },
    {
      category: "Women’s Health",
      title: "Ayurvedic Perspective on Holistic Care",
      desc: "Learning how Ayurveda emphasizes balance and individualized care in women’s wellness."
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Recent Notes
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Learning Notes & Reflections
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Short reflections and simplified learnings from topics I continue to explore throughout my Ayurvedic journey.
          </p>

        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          
          {notes.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-2xl p-8 hover:shadow-md transition flex flex-col justify-between"
            >
              
              <div>
                
                {/* Category */}
                <span className="inline-block px-4 py-1 rounded-full bg-white text-emerald-700 text-sm font-medium shadow-sm">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mt-6 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.desc}
                </p>

              </div>

              {/* Button */}
              <button className="mt-8 text-emerald-700 font-medium hover:text-emerald-900 transition text-left">
                Read More →
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default RecentNotes