"use client"

import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/5">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-tighter hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center shadow-lg shadow-cyan-500/40">
            <span className="text-white font-bold text-sm">BT</span>
          </div>
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">BT MedAI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
          >
            Home
          </Link>
          <a
            href="/#specialists"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
          >
            Specialists
          </a>
          <Link
            href="/chat"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
          >
            Chat
          </Link>
          <a
            href="/#contact"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </a>

          <Link href="/chat">
            <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 text-sm">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12M6 12l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/80 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="flex flex-col items-center space-y-4 py-6 px-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </Link>
            <a
              href="/#specialists"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Specialists
            </a>
            <Link
              href="/chat"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Chat
            </Link>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>

            <Link href="/chat">
              <button className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
