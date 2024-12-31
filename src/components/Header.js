import React from 'react'

function Header() {
  return (
    <header className="bg-primary py-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo and Text on the Left */}
      <div className="flex text-secondary items-center space-x-3">
        <img src="mern.png" alt="Logo" className="h-12 w-12" />
        <span className="font-bold text-lg">MERN Stack Developer</span>
      </div>

      {/* Navigation Links on the Right */}
      <nav className="space-x-12 text-tertiary font-bold">
        <a
          href="#about"
          className="hover:text-gray-400 transition duration-300"
        >
          About
        </a>
        <a
          href="#project"
          className="hover:text-gray-400 transition duration-300"
        >
          Project
        </a>
        <a
          href="#contact"
          className="hover:text-gray-400 transition duration-300"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
  )
}

export default Header
