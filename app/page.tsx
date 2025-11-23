// // app/page.tsx
// 'use client';

// import Link from 'next/link';
// // Import any necessary motion libraries here, e.g., framer-motion

// export default function Home() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-dark-black text-text-main overflow-hidden py-16 md:py-0">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
//         {/* Left Side: Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
//             Your Intelligent Companion for <span className="text-neon-red-1">Every Goal.</span>
//           </h1>
//           <p className="text-lg md:text-xl text-text-dimmed mb-8 animate-fade-in-up delay-200">
//             BT AgentHub brings you powerful AI agents powered by Next.js, FastAPI, and the OpenAI Agent SDK.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
//             <Link href="/agents">
//               <button className="relative px-8 py-3 group text-text-main font-semibold overflow-hidden rounded-md transition-all duration-300 ease-out hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon-red-1">
//                 <span className="absolute inset-0 bg-gradient-to-r from-neon-red-1 to-neon-red-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100"></span>
//                 <span className="relative z-10">Explore Agents</span>
//               </button>
//             </Link>
//             <Link href="/chat">
//               <button className="relative px-8 py-3 group text-text-dimmed border border-text-dimmed rounded-md transition-all duration-300 ease-out hover:shadow-neon hover:border-neon-red-1 hover:text-neon-red-1 focus:outline-none focus:ring-2 focus:ring-neon-red-1">
//                 <span className="relative z-10">Open Chat</span>
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Side: Neon Abstract Tech-Symbol Graphics */}
//         <div className="w-full md:w-1/2 flex justify-center items-center relative h-64 md:h-auto">
//           {/* Placeholder for complex neon abstract tech-symbol graphics with glowing movement and parallax. 
//               This would typically involve SVG animations, possibly with libraries like react-spring or framer-motion,
//               or custom CSS animations for intricate details. For now, simple glowing elements are used.
//           */}
//           <div className="absolute w-48 h-48 bg-neon-red-1 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute w-48 h-48 bg-neon-red-2 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
//           <div className="absolute w-48 h-48 bg-neon-red-3 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
          
//           {/* Example of a more structured graphic placeholder */}
//           <div className="relative w-80 h-80 border-2 border-neon-red-1 rounded-full flex items-center justify-center animate-spin-slow">
//             <div className="absolute w-64 h-64 border border-neon-red-2 rounded-full animate-pulse-slow"></div>
//             <div className="absolute w-48 h-48 border border-neon-red-3 rounded-full animate-pulse-fast"></div>
//             <div className="w-24 h-24 bg-neon-red-1 rounded-full animate-neon-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Background glowing lines/circuit-style outlines - can be implemented with pseudo-elements or additional divs */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         {/* Example: glowing lines pattern */}
//         <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red-1 to-transparent animate-pulse-line"></div>
//         <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-neon-red-2 to-transparent animate-pulse-line animation-delay-1000"></div>
//       </div>
//     </section>
//   );
// }
"use client"

import Link from "next/link"
import AgentCard from "@/components/AgentCard"
import {
  FaRobot,
  FaPlane,
  FaGraduationCap,
  FaMedkit,
  FaBriefcase,
  FaCode,
  FaSearch,
  FaUser,
  FaBuilding,
  FaEnvelope,
} from "react-icons/fa"

const agents = [
  {
    name: "BUSINESS PLANNER Agent",
    description: "Helps you strategize, plan, and execute your business goals with intelligent insights.",
    icon: <FaRobot size={30} />,
    link: "/chat?agent=business-planner",
  },
  {
    name: "FLIGHT BOOKING AGENT",
    description: "Finds the best flights, deals, and manages your travel itineraries effortlessly.",
    icon: <FaPlane size={30} />,
    link: "/chat?agent=flight-booking",
  },
  {
    name: "TUTOR AGENT",
    description: "Provides personalized learning experiences and assistance across various subjects.",
    icon: <FaGraduationCap size={30} />,
    link: "/chat?agent=tutor",
  },
  {
    name: "MEDICAL AGENT",
    description: "Offers preliminary medical information, symptom analysis, and health advice.",
    icon: <FaMedkit size={30} />,
    link: "/chat?agent=medical",
  },
  {
    name: "HEALTH CARE AGENT",
    description: "Assists with managing healthcare plans, appointments, and health-related queries.",
    icon: <FaMedkit size={30} />,
    link: "/chat?agent=health-care",
  },
  {
    name: "JOB SEARCH AGENT",
    description: "Scans job markets, tailors resumes, and helps you land your dream job.",
    icon: <FaBriefcase size={30} />,
    link: "/chat?agent=job-search",
  },
  {
    name: "CODE REVIEW AGENT",
    description: "Analyzes your code for bugs, best practices, and suggests improvements.",
    icon: <FaCode size={30} />,
    link: "/chat?agent=code-review",
  },
  {
    name: "DEEP SEARCH AGENT ON ANY TOPIC",
    description: "Conducts comprehensive research and provides in-depth information on any given topic.",
    icon: <FaSearch size={30} />,
    link: "/chat?agent=deep-search",
  },
  {
    name: "AI Personal Life Manager Agent",
    description: "Manages your daily tasks, schedules, and personal goals to optimize your life.",
    icon: <FaUser size={30} />,
    link: "/chat?agent=personal-life-manager",
  },
  // {
  //   name: "AI Education Institute Automation Agent",
  //   description: "Automates administrative tasks and enhances operational efficiency for educational institutions.",
  //   icon: <FaBuilding size={30} />,
  //   link: "/chat?agent=education-automation",
  // },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top right glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          {/* Bottom left glow */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
          {/* Circuit-inspired lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent"></div>
          <div className="absolute top-2/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-red-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 
           space-y-7 lg:ml-5 "
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
                Intelligent Agents
                <br />
                <span className="text-red-500 block mt-2">For Every Goal</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg">
                Harness the power of AI agents designed to help you succeed in business, learning, healthcare, and
                beyond.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <div className="w-1 h-10 bg-red-600 shadow-lg shadow-red-600/50"></div>
              <p className="text-gray-400 text-sm tracking-wide uppercase font-semibold">
                Powered by Next.js, FastAPI & OpenAI
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/#agents">
                <button className="group px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 shadow-xl shadow-red-600/40 hover:shadow-2xl hover:shadow-red-600/60 transition-all duration-300 transform hover:-translate-y-1">
                  Explore Agents
                </button>
              </Link>

              <Link href="/chat">
                <button className="group px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-red-500 hover:text-red-400 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-1">
                  Open Chat
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Neon Circuit Graphic */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-96 md:h-full min-h-96">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-red-600/10 rounded-full blur-3xl shadow-2xl shadow-red-600/30"></div>

              {/* Main circuit frame */}
              <div className="absolute inset-0 border-2 border-red-600/40 rounded-full opacity-50"></div>
              <div className="absolute inset-8 border border-red-600/30 rounded-lg opacity-40"></div>

              {/* Corner nodes */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-600/70"></div>
              <div className="absolute top-6 right-6 w-3 h-3 bg-red-600/60 rounded-full shadow-lg shadow-red-600/50"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-red-600/60 rounded-full shadow-lg shadow-red-600/50"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-600/70"></div>

              {/* Center core */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div
                  className="absolute w-24 h-24 border-2 border-red-600/60 rounded-full animate-spin shadow-lg shadow-red-600/40"
                  style={{ animationDuration: "8s" }}
                ></div>
                <div className="absolute w-16 h-16 border border-red-600/40 rounded-full opacity-50"></div>
                <div className="w-8 h-8 bg-red-600 rounded-full shadow-2xl shadow-red-600/60 animate-pulse"></div>
              </div>

              {/* Connecting lines */}
              <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-red-600/60 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-t from-red-600/60 to-transparent"></div>
              <div className="absolute left-0 top-1/2 h-px w-20 bg-gradient-to-r from-red-600/60 to-transparent"></div>
              <div className="absolute right-0 top-1/2 h-px w-20 bg-gradient-to-l from-red-600/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section id="agents" className="relative py-20 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Explore Our <span className="text-red-500">Intelligent Agents</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Choose from our diverse range of specialized AI agents to enhance your productivity and achieve your goals
              across different domains.
            </p>
          </div>

          {/* Agent Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard
                key={agent.name}
                name={agent.name}
                description={agent.description}
                icon={agent.icon}
                link={agent.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative min-h-screen bg-black py-20 px-6 flex items-center justify-center overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Get in <span className="text-red-500">Touch</span>
            </h2>
          </div>

          {/* Contact Card */}
          <div className="max-w-md mx-auto p-8 rounded-xl border-2 border-red-600/40 bg-slate-950/50 backdrop-blur-sm text-center relative overflow-hidden group hover:border-red-600/70 transition-all duration-300 shadow-2xl shadow-red-600/20 hover:shadow-2xl hover:shadow-red-600/40">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-red-600/10 shadow-lg shadow-red-600/30">
                  <FaEnvelope className="text-red-500 text-5xl animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 text-lg">For inquiries and support, feel free to reach out:</p>
                <a
                  href="mailto:bashartc13@gmail.com"
                  className="inline-block text-white text-xl font-semibold hover:text-red-400 transition-colors duration-300 break-all hover:drop-shadow-lg"
                >
                  bashartc13@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
