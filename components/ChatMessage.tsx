"use client"

import type React from "react"
import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === "user"
  const [formattedTime, setFormattedTime] = useState<string>("")

  useEffect(() => {
    const timeString = message.timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    setFormattedTime(timeString)
  }, [message.timestamp])

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-md transition-all duration-200 ${
          isUser
            ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 rounded-br-none"
            : "bg-slate-800 text-gray-100 border border-slate-700 shadow-lg shadow-slate-800/50 rounded-bl-none"
        }`}
      >
        {isUser ? (
          <p className="text-sm break-words">{message.text}</p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none text-sm break-words [&>*]:m-0 [&>p]:mb-2 [&>ul]:mb-2 [&>ol]:mb-2 [&>h1]:text-base [&>h2]:text-sm [&>h3]:text-xs">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
                li: ({ node, ...props }) => <li className="ml-2" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                code: ({ node, ...props }) => <code className="bg-slate-700/50 px-1 rounded text-xs" {...props} />,
              }}
            >
              {message.text}
            </ReactMarkdown>
          </div>
        )}
        <span className={`text-xs mt-2 block opacity-70 ${isUser ? "text-cyan-100" : "text-gray-400"}`}>
          {formattedTime}
        </span>
      </div>
    </div>
  )
}

export default ChatMessage
