import React from 'react'

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-6 md:px-20 py-20">
      
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Small Label */}
        <p className="text-emerald-600 font-semibold uppercase tracking-wide">
          Contact
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 leading-tight">
          Let’s Connect & Learn Together
        </h1>

        {/* Divider */}
        <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 mt-8 leading-relaxed text-lg max-w-2xl mx-auto">
          Whether it’s about Ayurveda, learning experiences, wellness discussions, or meaningful conversations — feel free to connect.
        </p>

      </div>

    </section>
  )
}

export default ContactHero