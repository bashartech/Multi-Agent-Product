// // app/chat/page.tsx
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { useSearchParams } from 'next/navigation';
// import ChatLayout from '@/components/ChatLayout';
// import ChatSidebar from '@/components/ChatSidebar';
// import ChatMessage from '@/components/ChatMessage';
// import ChatInput from '@/components/ChatInput';
// import { FaRobot } from 'react-icons/fa'; // Using a generic icon for agent avatar

// interface Message {
//   id: number;
//   text: string;
//   isUser: boolean;
// }

// const agentAvatars: { [key: string]: React.ReactNode } = {
//   // Placeholder avatars for agents, can be expanded later
//   'business-planner': <FaRobot size={20} />,
//   'flight-booking': <FaRobot size={20} />,
//   'tutor': <FaRobot size={20} />,
//   'medical': <FaRobot size={20} />,
//   'health-care': <FaRobot size={20} />,
//   'job-search': <FaRobot size={20} />,
//   'code-review': <FaRobot size={20} />,
//   'deep-search': <FaRobot size={20} />,
//   'personal-life-manager': <FaRobot size={20} />,
//   'education-automation': <FaRobot size={20} />,
// };

// export default function ChatPage() {
//   const searchParams = useSearchParams();
//   const agentId = searchParams.get('agent') || 'default';
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Clear messages when agentId changes
//     setMessages([]);
//     // Scroll to bottom when messages update
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [agentId]); // Depend on agentId

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = async (text: string) => {
//     const newMessage: Message = { id: messages.length + 1, text, isUser: true };
//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:8000/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: text, agent_id: agentId }), // Include agent_id if needed by backend
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const agentResponse: Message = {
//           id: messages.length + 2,
//           text: data.response || "Sorry, I couldn't get a response from the agent.",
//           isUser: false,
//         };
//         setMessages((prevMessages) => [...prevMessages, agentResponse]);
//       } else {
//         console.error("Error from backend:", data.error);
//         const errorResponse: Message = {
//           id: messages.length + 2,
//           text: `Error: ${data.error || "Something went wrong with the agent."}`,
//           isUser: false,
//         };
//         setMessages((prevMessages) => [...prevMessages, errorResponse]);
//       }
//     } catch (error) {
//       console.error("Network error or API call failed:", error);
//       const networkError: Message = {
//         id: messages.length + 2,
//         text: "Error: Could not connect to the agent service. Please ensure the backend is running.",
//         isUser: false,
//       };
//       setMessages((prevMessages) => [...prevMessages, networkError]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const currentAgentName = agentId.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//   return (
//     <ChatLayout sidebar={<ChatSidebar />}>
//       <div className="flex flex-col h-full">
//         {/* Top Bar */}
//         <div className="flex items-center p-4 bg-sub-panel-1 border-b border-charcoal-grey-2 shadow-md">
//           <div className="relative w-8 h-8 flex items-center justify-center bg-sub-panel-1 border border-neon-red-1 rounded-full mr-3 animate-pulse-fast">
//             {agentAvatars[agentId] || <FaRobot size={20} />}
//             <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
//             <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
//           </div>
//           <h1 className="text-xl font-semibold text-text-main">{currentAgentName} Agent</h1>
//         </div>

//         {/* Main Chat Area */}
//         <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
//           {messages.map((msg) => (
//             <ChatMessage
//               key={msg.id}
//               message={msg.text}
//               isUser={msg.isUser}
//               avatar={msg.isUser ? undefined : (agentAvatars[agentId] || <FaRobot size={20} />)}
//             />
//           ))}
//           {isLoading && (
//             <div className="flex items-center mb-4 animate-fade-in-up">
//               <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-sub-panel-1 border border-neon-red-1 shadow-neon-sm mr-3">
//                 {agentAvatars[agentId] || <FaRobot size={20} />}
//               </div>
//               <div className="relative max-w-md p-4 rounded-xl bg-sub-panel-2 shadow-lg flex items-center space-x-2">
//                 <span className="h-2 w-2 bg-neon-red-1 rounded-full animate-pulse"></span>
//                 <span className="h-2 w-2 bg-neon-red-2 rounded-full animate-pulse animation-delay-200"></span>
//                 <span className="h-2 w-2 bg-neon-red-3 rounded-full animate-pulse animation-delay-400"></span>
//                 <span className="text-sm md:text-base text-text-dimmed">Agent is typing...</span>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Chat Input */}
//         <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
//       </div>
//     </ChatLayout>
//   );
// }





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
