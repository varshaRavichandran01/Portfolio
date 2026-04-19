import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4">
        
        {/* LOGO */}
        <div className="text-2xl font-bold text-emerald-700">
          Dr. Varsha
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <Link to="/about" className="hover:text-emerald-600">About</Link>
          <Link to="/learning" className="hover:text-emerald-600">Learning</Link>
          <Link to="/notes" className="hover:text-emerald-600">Notes</Link>
          <Link to="/achievements" className="hover:text-emerald-600">Achievements</Link>
          <Link to="/contact" className="hover:text-emerald-600">Contact</Link>

          <Link to="/contact">
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/learning" onClick={() => setIsOpen(false)}>Learning</Link>
          <Link to="/notes" onClick={() => setIsOpen(false)}>Notes</Link>
          <Link to="/achievements" onClick={() => setIsOpen(false)}>Achievements</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <button className="mt-3 bg-emerald-600 text-white px-5 py-2 rounded-lg">
            Book Appointment
          </button>
        </div>
      )}

    </nav>
  )
}

export default Navbar