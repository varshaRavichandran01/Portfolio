import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../public/android-chrome-512x512.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Learning', path: '/learning' },
    { name: 'Notes', path: '/notes' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        
        <div className="flex items-center justify-between h-[82px]">

          {/* ================= LOGO ================= */}
          <Link 
            to="/"
            className="flex items-center gap-3"
          >
            
            <img
              src={Logo}
              alt="Dr Varsha Logo"
              className="w-14 h-14 object-contain"
            />

            <div className="hidden sm:flex flex-col leading-tight">
              
              <h1 className="text-xl font-bold text-emerald-700 tracking-tight">
                Dr. Varsha
              </h1>

              <p className="text-xs text-gray-500 font-medium">
                Ayurvedic Learner
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-8">
            
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative text-[15px] font-medium transition duration-300
                  
                  ${
                    location.pathname === item.path
                      ? 'text-emerald-700'
                      : 'text-gray-600 hover:text-emerald-600'
                  }
                `}
              >
                {item.name}

                {/* ACTIVE INDICATOR */}
                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-emerald-500 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* CTA BUTTON */}
            <Link to="/reflections">
              <button className="
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                shadow-sm
                hover:shadow-md
                transition
                duration-300
              ">
                Explore Reflections
              </button>
            </Link>

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              md:hidden
              text-3xl
              text-emerald-700
              transition
            "
          >
            {isOpen ? '✕' : '☰'}
          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          bg-white
          border-t border-emerald-50
          
          ${isOpen ? 'max-h-[500px]' : 'max-h-0'}
        `}
      >
        
        <div className="px-6 py-6 flex flex-col gap-5">
          
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`
                text-[16px]
                font-medium
                transition
                
                ${
                  location.pathname === item.path
                    ? 'text-emerald-700'
                    : 'text-gray-600'
                }
              `}
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE BUTTON */}
          <Link
            to="/reflections"
            onClick={() => setIsOpen(false)}
          >
            <button
              className="
                mt-2
                w-full
                bg-emerald-600
                hover:bg-emerald-700
                text-white
                py-3
                rounded-xl
                font-medium
                transition
              "
            >
              Explore Reflections
            </button>
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar