import React from 'react'

const ContactMe = () => {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Connect With Me
        </h2>

        <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-xl mx-auto">
          Open to meaningful conversations, learning, and collaboration.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          
          {/* Email */}
          <a 
            href="mailto:varsha.rchethanath@gmail.com"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 text-left"
          >
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800 font-medium mt-1 break-all group-hover:text-emerald-600">
              varsha.rchethanath@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a 
            href="tel:8921473859"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 text-left"
          >
            
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-800 font-medium mt-1 group-hover:text-emerald-600">
              +91 8921473859
            </p>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/dr-varsha-ravichandran-376669356"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 text-left"
          >
            <p className="text-sm text-gray-500">LinkedIn</p>
            <p className="text-gray-800 font-medium mt-1 group-hover:text-emerald-600">
              View Profile
            </p>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/thewholesome.doc"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 text-left"
          >
            
            <p className="text-sm text-gray-500">Instagram</p>
            <p className="text-gray-800 font-medium mt-1 group-hover:text-emerald-600">
              @thewholesome.doc
            </p>
          </a>

        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-14">
          © {new Date().getFullYear()} Dr. Varsha Ravichandran
        </p>

      </div>

    </section>
  )
}

export default ContactMe