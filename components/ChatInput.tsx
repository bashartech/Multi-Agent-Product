// // components/ChatInput.tsx
// 'use client';

// import React, { useState } from 'react';

// interface ChatInputProps {
//   onSendMessage: (message: string) => void;
//   isLoading: boolean;
// }

// const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (message.trim() && !isLoading) {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="relative p-4 bg-charcoal-grey-2 border-t border-sub-panel-1 shadow-2xl">
//       <form onSubmit={handleSubmit} className="relative flex items-center max-w-3xl mx-auto">
//         <input
//           type="text"
//           className="flex-1 p-3 pr-12 rounded-lg bg-sub-panel-1 text-text-main placeholder-text-dimmed focus:outline-none focus:ring-2 focus:ring-neon-red-1 transition-all duration-300 shadow-inner-lg border border-charcoal-grey-3"
//           placeholder={isLoading ? "Agent is typing..." : "Type your message..."}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           disabled={isLoading}
//         />
//         <button
//           type="submit"
//           className="absolute right-3 p-2 rounded-full bg-neon-red-1 text-text-main hover:bg-neon-red-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon-red-3 disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={isLoading}
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M14 5l7 7m0 0l-7 7m7-7H3"
//             ></path>
//           </svg>
//         </button>
//         {/* Neon bottom glow effect */}
//         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-red-1 to-transparent opacity-60 rounded-full animate-pulse-line-slow"></div>
//       </form>
//     </div>
//   );
// };

// export default ChatInput;


"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <div className="relative border-t border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/50 px-6 py-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-3 max-w-4xl mx-auto">
        <input
          type="text"
          className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300 shadow-lg hover:border-slate-600"
          placeholder={isLoading ? "Agent is typing..." : "Type your message..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="flex-shrink-0 p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-xl hover:shadow-red-600/60 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={isLoading}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
