// // components/AgentCard.tsx
// 'use client';

// import Link from 'next/link';

// interface AgentCardProps {
//   name: string;
//   description: string;
//   icon: React.ReactNode; // Or string for image path
//   link: string;
// }

// const AgentCard: React.FC<AgentCardProps> = ({
//   name,
//   description,
//   icon,
//   link,
// }) => {
//   return (
//     <Link href={link} className="block">
//       <div className="relative p-6 rounded-lg bg-sub-panel-1 border border-charcoal-grey-2 hover:border-neon-red-1 transition-all duration-300 ease-out group overflow-hidden shadow-glass-card-deep hover:shadow-neon">
//         {/* Neon border stroke and glow-on-hover */}
//         <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-neon-red-1 transition-all duration-300 ease-out group-hover:animate-glow-border"></div>
        
//         <div className="relative z-10">
//           <div className="mb-4 text-neon-red-1 group-hover:animate-pulse-fast">
//             {icon} {/* Agent icon or micro glow animation */}
//           </div>
//           <h3 className="text-xl font-semibold text-text-main mb-2">
//             {name}
//           </h3>
//           <p className="text-text-dimmed text-sm leading-relaxed line-clamp-2">
//             {description}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default AgentCard;


"use client"

import type React from "react"
import Link from "next/link"

interface AgentCardProps {
  name: string
  description: string
  icon: React.ReactNode
  link: string
}

const AgentCard: React.FC<AgentCardProps> = ({ name, description, icon, link }) => {
  return (
    <Link href={link} className="block group">
      <div className="relative p-6 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 space-y-3">
          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:scale-110 transform flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 shadow-lg shadow-cyan-500/30">
            {icon}
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-light">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default AgentCard
