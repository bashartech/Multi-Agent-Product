"use client"

import { useState, useRef, useEffect } from "react"
import ChatLayout from "@/components/ChatLayout"
import ChatSidebar from "@/components/ChatSidebar"
import ChatMessage from "@/components/ChatMessage"
import ChatInput from "@/components/ChatInput"
import { useSearchParams } from "next/navigation"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function ChatPage() {
  const searchParams = useSearchParams()
  const agentId = searchParams.get("agent") || "general"
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([
      {
        id: "1",
        text: `Hello! I'm your ${agentId.replace("-", " ")} specialist. How can I assist you with your health concerns today?`,
        sender: "agent",
        timestamp: new Date(),
      },
    ])
  }, [agentId])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setIsLoading(true)

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"

      const response = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          message,
          agent_id: agentId,
        }),
      })

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`)
      }

      const data = await response.json()

      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || data.message || "I couldn't process your request. Please try again.",
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentResponse])
    } catch (error) {
      console.error("[v0] Error sending message:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Connection error. Please check if your backend is running and try again.",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ChatLayout sidebar={<ChatSidebar />}>
      <div className="flex flex-col h-full bg-slate-950">
        <div className="border-b border-cyan-500/20 bg-slate-950 shadow-xl shadow-cyan-500/10 px-6 py-4">
          <h2 className="text-xl font-bold text-white capitalize">{agentId.replace("-", " ")} Specialist</h2>
          <p className="text-sm text-gray-400">Online and ready to help</p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scroll-smooth">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-xs px-4 py-3 rounded-lg bg-slate-800 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </ChatLayout>
  )
}
