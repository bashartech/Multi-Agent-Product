// // components/Header.tsx
// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-grey-1 bg-opacity-80 backdrop-blur-md shadow-neon-sm">
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <Link href="/" className="text-text-main text-2xl font-bold font-sans">
//           BT AgentHub
//         </Link>

//         <div className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300">
//             Home
//           </Link>
//           <Link href="/agents" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300">
//             Agents
//           </Link>
//           <Link href="/chat" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300">
//             Chat
//           </Link>
//           <Link href="/contact" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300">
//             Contact
//           </Link>
//           <button className="relative px-5 py-2 group text-text-main font-semibold overflow-hidden rounded-md transition-all duration-300 ease-out hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-red-1">
//             <span className="absolute inset-0 bg-gradient-to-r from-neon-red-1 to-neon-red-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100"></span>
//             <span className="relative z-10">Get Started</span>
//           </button>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-text-main focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               )}
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {isOpen && (
//         <div className="md:hidden bg-charcoal-grey-1 bg-opacity-90 backdrop-blur-sm pb-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link href="/" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//             <Link href="/agents" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300" onClick={() => setIsOpen(false)}>
//               Agents
//             </Link>
//             <Link href="/chat" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300" onClick={() => setIsOpen(false)}>
//               Chat
//             </Link>
//             <Link href="/contact" className="text-text-dimmed hover:text-neon-red-1 transition-colors duration-300" onClick={() => setIsOpen(false)}>
//               Contact
//             </Link>
//             <button className="relative px-5 py-2 group text-text-main font-semibold overflow-hidden rounded-md transition-all duration-300 ease-out hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-red-1">
//               <span className="absolute inset-0 bg-gradient-to-r from-neon-red-1 to-neon-red-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100"></span>
//               <span className="relative z-10">Get Started</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };


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
