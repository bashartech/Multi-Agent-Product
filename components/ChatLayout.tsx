// // components/ChatLayout.tsx
// 'use client';

// import React, { useState } from 'react';

// interface ChatLayoutProps {
//   sidebar: React.ReactNode;
//   children: React.ReactNode;
// }

// const ChatLayout: React.FC<ChatLayoutProps> = ({ sidebar, children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-charcoal-grey-1 text-text-main">
//       {/* Mobile Sidebar Toggle Button */}
//       <button
//         className="fixed bottom-4 left-4 z-40 p-3 rounded-full bg-neon-red-1 md:hidden shadow-neon-sm hover:shadow-neon transition-all duration-300"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         <svg
//           className="w-6 h-6 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {isSidebarOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           )}
//         </svg>
//       </button>

//       {/* Sidebar - Desktop */}
//       <aside className="hidden md:block w-72 bg-sub-panel-1 border-r border-charcoal-grey-2 shadow-lg overflow-y-auto relative">
//         {sidebar}
//       </aside>

//       {/* Sidebar - Mobile Drawer */}
//       <div
//         className={`fixed inset-y-0 left-0 w-64 bg-sub-panel-1 border-r border-charcoal-grey-2 z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           } md:hidden transition-transform duration-300 ease-in-out`}
//       >
//         {sidebar}
//       </div>

//       {/* Main Chat Area */}
//       <main className="flex-1 flex flex-col bg-charcoal-grey-2 overflow-hidden">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default ChatLayout;




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
