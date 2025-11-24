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
  FaHeartbeat,
  FaSpa,
  FaAssistiveListeningSystems,
  FaEye,
  FaXRay,
  FaTooth,
  FaBaby,
  FaPrescriptionBottle,
  FaApple,
  FaUserMd,
  FaPhone,
} from "react-icons/fa"

const agents = [
  {
    name: "Cardiologist Agent",
    description: "Expert in heart health, diagnosing and managing cardiovascular conditions with precision.",
    icon: <FaHeartbeat size={30} />,
    link: "/chat?agent=cardiologist-specialist",
  },
  {
    name: "Dermatologist Agent",
    description: "Specializes in skin, hair, and nail conditions, offering expert dermatological care.",
    icon: <FaSpa size={30} />,
    link: "/chat?agent=dermatologist-specialist",
  },
  {
    name: "ENT Specialist Agent",
    description: "Focuses on ear, nose, and throat disorders with comprehensive medical guidance.",
    icon: <FaAssistiveListeningSystems size={30} />,
    link: "/chat?agent=ent-specialist",
  },
  {
    name: "Eye Specialist Agent",
    description: "Expert in vision problems, eye diseases, and optical care solutions.",
    icon: <FaEye size={30} />,
    link: "/chat?agent=eye-specialist",
  },
  {
    name: "Orthopedic Agent",
    description: "Specializes in bones, joints, muscles, and spine health management.",
    icon: <FaXRay size={30} />,
    link: "/chat?agent=orthopedic-specialist",
  },
  {
    name: "Dentist Agent",
    description: "Provides expert oral health care, pain management, and hygiene guidance.",
    icon: <FaTooth size={30} />,
    link: "/chat?agent=dentist-specialist",
  },
  {
    name: "Pediatrician Agent",
    description: "Specializes in child health from infancy through adolescence with expert care.",
    icon: <FaBaby size={30} />,
    link: "/chat?agent=pediatrician-specialist",
  },
  {
    name: "Pharmacy Assistant Agent",
    description: "Provides medication information, drug interactions, and safe usage guidance.",
    icon: <FaPrescriptionBottle size={30} />,
    link: "/chat?agent=pharmacy-assistant",
  },
  {
    name: "Nutritionist Agent",
    description: "Certified diet planning, weight management, and nutrition guidance expert.",
    icon: <FaApple size={30} />,
    link: "/chat?agent=nutritionist-specialist",
  },
  {
    name: "General Physician Agent",
    description: "Primary care for everyday medical conditions and general health advice.",
    icon: <FaUserMd size={30} />,
    link: "/chat?agent=general-physician",
  },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-15 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
          <div className="absolute top-2/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-teal-500/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
          {/* LEFT: Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span className="text-cyan-300 text-sm font-semibold">Advanced Medical AI Platform</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Advanced Medical
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent block mt-2">
                  AI Care Specialists
                </span>
              </h1>

              <p className="text-xl md:text-xl text-gray-300 font-light max-w-lg leading-relaxed">
                Connect with specialized AI medical agents for accurate health guidance, diagnostics, and personalized
                care recommendations.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-l-2 border-cyan-500/40 pl-4">
              <p className="text-gray-400 text-sm tracking-wide uppercase font-semibold">Trusted Medical AI Platform</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link href="/#specialists">
                <button className="group px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 shadow-xl shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 transform hover:-translate-y-1">
                  Explore Specialists
                </button>
              </Link>

              <Link href="/chat">
                <button className="group px-8 py-3 border-2 border-teal-500/40 text-teal-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Start Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Medical Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative h-96 md:h-full min-h-96">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl shadow-2xl shadow-cyan-500/20"></div>

              {/* Heartbeat visualization */}
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full opacity-50"></div>
              <div className="absolute inset-12 border border-teal-500/20 rounded-lg opacity-40"></div>

              {/* Corner pulse nodes */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse"></div>
              <div
                className="absolute top-6 right-6 w-3 h-3 bg-cyan-400/60 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="absolute bottom-6 left-6 w-3 h-3 bg-teal-400/60 rounded-full shadow-lg shadow-teal-400/50 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
              <div
                className="absolute bottom-6 right-6 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>

              {/* Center heartbeat core */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div
                  className="absolute w-24 h-24 border-2 border-cyan-500/50 rounded-full animate-spin shadow-lg shadow-cyan-500/30"
                  style={{ animationDuration: "6s" }}
                ></div>
                <div className="absolute w-16 h-16 border border-teal-500/30 rounded-full opacity-50"></div>
                <FaHeartbeat className="w-8 h-8 text-cyan-400 shadow-2xl shadow-cyan-500/50 animate-pulse" />
              </div>

              {/* Connecting lines */}
              <div className="absolute top-0 left-1/2 w-px h-20 bg-gradient-to-b from-cyan-500/40 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 w-px h-20 bg-gradient-to-t from-cyan-500/40 to-transparent"></div>
              <div className="absolute left-0 top-1/2 h-px w-20 bg-gradient-to-r from-teal-500/40 to-transparent"></div>
              <div className="absolute right-0 top-1/2 h-px w-20 bg-gradient-to-l from-cyan-500/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISTS SECTION */}
      <section id="specialists" className="relative py-24 px-6 bg-slate-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Our Medical
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                AI Specialists
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Access expert medical consultation from specialized AI agents trained to provide accurate diagnosis
              support and health guidance across all medical disciplines.
            </p>
          </div>

          {/* Specialist Cards Grid */}
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
        className="relative min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-6 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Get in
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
            </h2>
          </div>

          {/* Contact Card */}
          <div className="max-w-md mx-auto p-8 rounded-xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-md text-center relative overflow-hidden group hover:border-cyan-500/60 transition-all duration-300 shadow-2xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-cyan-500/10 shadow-lg shadow-cyan-500/30">
                  <FaPhone className="text-cyan-400 text-5xl animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 text-lg">For inquiries and support, reach out to us:</p>
                <a
                  href="mailto:bashartc13@gmail.com"
                  className="inline-block text-white text-xl font-semibold hover:text-cyan-400 transition-colors duration-300 break-all hover:drop-shadow-lg"
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
