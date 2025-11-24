// // components/ChatMessage.tsx
// 'use client';

// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

// interface ChatMessageProps {
//   message: string;
//   isUser: boolean;
//   avatar?: React.ReactNode; // Optional avatar for the agent
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, avatar }) => {
//   const messageClass = isUser
//     ? 'bg-neon-red-1 bg-opacity-20 text-text-main self-end rounded-br-none'
//     : 'bg-sub-panel-2 text-text-main self-start rounded-bl-none';
//   const avatarClass = isUser ? 'order-2 ml-3' : 'order-1 mr-3';

//   const components = {
//     h1: ({ node, ...props }) => <h1 className="text-xl md:text-2xl font-bold text-white mb-2" {...props} />,
//     h2: ({ node, ...props }) => <h2 className="text-lg md:text-xl font-bold text-white mb-2" {...props} />,
//     h3: ({ node, ...props }) => <h3 className="text-base md:text-lg font-bold text-white mb-2" {...props} />,
//     p: ({ node, ...props }) => <p className="text-sm md:text-base text-text-main mb-1" {...props} />,
//     ul: ({ node, ...props }) => <ul className="list-disc list-inside text-sm md:text-base text-text-main mb-1" {...props} />,
//     ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-sm md:text-base text-text-main mb-1" {...props} />,
//     li: ({ node, ...props }) => <li className="mb-0.5" {...props} />,
//     strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
//     em: ({ node, ...props }) => <em className="italic text-text-dimmed" {...props} />,
//     a: ({ node, ...props }) => <a className="text-neon-red-2 hover:underline" {...props} />,
//     // Add more custom components for other HTML elements if needed for specific styling
//   };

//   return (
//     <div
//       className={`flex items-start mb-4 animate-fade-in-up ${isUser ? 'justify-end' : 'justify-start'}`}
//     >
//       {!isUser && avatar && (
//         <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-sub-panel-1 border border-neon-red-1 shadow-neon-sm ${avatarClass}`}>
//           {avatar}
//         </div>
//       )}
//       <div
//         className={`relative max-w-md p-4 rounded-xl shadow-lg ${messageClass}`}
//       >
//         {isUser ? (
//           <p className="text-sm md:text-base">{message}</p>
//         ) : (
//           <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
//             {message}
//           </ReactMarkdown>
//         )}
//         {/* Glowing separator - conceptual, could be a subtle border or pseudo-element */}
//         <div className={`absolute bottom-0 ${isUser ? 'right-0' : 'left-0'} w-1/2 h-0.5 bg-gradient-to-r ${isUser ? 'from-transparent to-neon-red-2' : 'from-neon-red-2 to-transparent'} opacity-40`}></div>
//       </div>
//       {isUser && avatar && (
//         <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-sub-panel-1 border border-neon-red-1 shadow-neon-sm ${avatarClass}`}>
//           {avatar}
//         </div>
//       )}
//     </div>
//   );
// };


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
