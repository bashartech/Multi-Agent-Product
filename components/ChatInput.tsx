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
          className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 shadow-lg hover:border-slate-600"
          placeholder={isLoading ? "Specialist is analyzing..." : "Type your health question..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="flex-shrink-0 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-300 shadow-lg shadow-cyan-600/40 hover:shadow-xl hover:shadow-cyan-600/60 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
