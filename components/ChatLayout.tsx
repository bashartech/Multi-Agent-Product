"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface ChatLayoutProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ sidebar, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="fixed bottom-6 left-6 z-40 p-3 rounded-lg bg-cyan-500 hover:bg-cyan-700 md:hidden shadow-xl shadow-cyan-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/60"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:w-72 bg-slate-900 border-r border-slate-800 shadow-xl flex-col">
        <div className="overflow-y-auto flex-1">{sidebar}</div>
      </aside>

      {/* Sidebar - Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900 border-r border-slate-800 z-30 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-2xl shadow-slate-900/80`}
      >
        <div className="overflow-y-auto h-full">{sidebar}</div>
      </div>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-slate-950 overflow-hidden">{children}</main>
    </div>
  )
}

export default ChatLayout
