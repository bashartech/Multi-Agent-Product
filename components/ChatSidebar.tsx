"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
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
} from "react-icons/fa"

const agents = [
  {
    name: "Cardiologist Agent",
    icon: <FaHeartbeat size={18} />,
    link: "/chat?agent=cardiologist-specialist",
    id: "cardiologist-specialist",
  },
  {
    name: "Dermatologist Agent",
    icon: <FaSpa size={18} />,
    link: "/chat?agent=dermatologist-specialist",
    id: "dermatologist-specialist",
  },
  {
    name: "ENT Specialist Agent",
    icon: <FaAssistiveListeningSystems size={18} />,
    link: "/chat?agent=ent-specialist",
    id: "ent-specialist",
  },
  {
    name: "Eye Specialist Agent",
    icon: <FaEye size={18} />,
    link: "/chat?agent=eye-specialist",
    id: "eye-specialist",
  },
  {
    name: "Orthopedic Agent",
    icon: <FaXRay size={18} />,
    link: "/chat?agent=orthopedic-specialist",
    id: "orthopedic-specialist",
  },
  {
    name: "Dentist Agent",
    icon: <FaTooth size={18} />,
    link: "/chat?agent=dentist-specialist",
    id: "dentist-specialist",
  },
  {
    name: "Pediatrician Agent",
    icon: <FaBaby size={18} />,
    link: "/chat?agent=pediatrician-specialist",
    id: "pediatrician-specialist",
  },
  {
    name: "Pharmacy Assistant Agent",
    icon: <FaPrescriptionBottle size={18} />,
    link: "/chat?agent=pharmacy-assistant",
    id: "pharmacy-assistant",
  },
  {
    name: "Nutritionist Agent",
    icon: <FaApple size={18} />,
    link: "/chat?agent=nutritionist-specialist",
    id: "nutritionist-specialist",
  },
  {
    name: "General Physician Agent",
    icon: <FaUserMd size={18} />,
    link: "/chat?agent=general-physician",
    id: "general-physician",
  },
]

const ChatSidebar = () => {
  const searchParams = useSearchParams()
  const activeAgentId = searchParams.get("agent")

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Medical Specialists</h2>
        <div className="h-1 w-12 bg-cyan-500 rounded shadow-lg shadow-cyan-500/50"></div>
      </div>

      {/* Agents List */}
      <nav className="flex-1 overflow-y-auto space-y-2">
        <ul>
          {agents.map((agent) => (
            <li key={agent.id}>
              <Link href={agent.link}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                    activeAgentId === agent.id
                      ? "bg-cyan-500/20 text-cyan-300 border-l-2 border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : "text-gray-400 hover:text-white hover:bg-slate-800/50 border-l-2 border-transparent"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 ${activeAgentId === agent.id ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"}`}
                  >
                    {agent.icon}
                  </div>
                  <span className="text-sm font-medium truncate">{agent.name}</span>
                  {activeAgentId === agent.id && (
                    <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/60"></div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <Link href="/">
        <div className="mt-8 pt-6 border-t border-slate-800">
          <button className="w-full px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60">
            Back to Home
          </button>
        </div>
      </Link>
    </div>
  )
}

export default ChatSidebar
