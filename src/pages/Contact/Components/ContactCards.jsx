import React from 'react'

const ContactCards = () => {
  const contacts = [
    {
      label: "Email",
      value: "varsha.rchethanath@gmail.com",
      link: "mailto:varsha.rchethanath@gmail.com"
    },
    {
      label: "Phone",
      value: "+91 8921473859",
      link: "tel:8921473859"
    },
    {
      label: "LinkedIn",
      value: "View Profile",
      link: "https://www.linkedin.com/in/dr-varsha-ravichandran-376669356"
    },
    {
      label: "Instagram",
      value: "@thewholesome.doc",
      link: "https://www.instagram.com/thewholesome.doc"
    }
  ]

  return (
    <section className="bg-white px-6 md:px-20 py-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center">
          
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            Reach Out Anytime
          </h2>

          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
          
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.label === "LinkedIn" || item.label === "Instagram" ? "_blank" : ""}
              rel="noopener noreferrer"
              className="bg-emerald-50 rounded-2xl p-8 hover:shadow-md transition border border-emerald-100"
            >
              
              {/* Label */}
              <p className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
                {item.label}
              </p>

              {/* Value */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 break-words">
                {item.value}
              </h3>

            </a>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ContactCards