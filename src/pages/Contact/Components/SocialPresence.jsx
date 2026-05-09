import React from 'react'

const SocialPresence = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Social Presence
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
          Sharing Learning Beyond The Website
        </h2>

        <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto">
          I also share reflections, wellness thoughts, and moments from my learning journey through social platforms.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/thewholesome.doc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition text-gray-800 font-medium"
          >
            Instagram • @thewholesome.doc
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dr-varsha-ravichandran-376669356"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition text-gray-800 font-medium"
          >
            LinkedIn • View Profile
          </a>

        </div>

      </div>

    </section>
  )
}

export default SocialPresence