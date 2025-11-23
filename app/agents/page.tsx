// app/agents/page.tsx
'use client';

import AgentCard from '@/components/AgentCard';
import { FaRobot, FaPlane, FaGraduationCap, FaMedkit, FaBriefcase, FaCode, FaSearch, FaUser, FaBuilding } from 'react-icons/fa';

const agents = [
  {
    name: "BUSINESS PLANNER Agent",
    description: "Helps you strategize, plan, and execute your business goals with intelligent insights.",
    icon: <FaRobot size={30} />,
    link: "/chat?agent=business-planner",
  },
  {
    name: "FLIGHT BOOKING AGENT",
    description: "Finds the best flights, deals, and manages your travel itineraries effortlessly.",
    icon: <FaPlane size={30} />,
    link: "/chat?agent=flight-booking",
  },
  {
    name: "TUTOR AGENT",
    description: "Provides personalized learning experiences and assistance across various subjects.",
    icon: <FaGraduationCap size={30} />,
    link: "/chat?agent=tutor",
  },
  {
    name: "MEDICAL AGENT",
    description: "Offers preliminary medical information, symptom analysis, and health advice.",
    icon: <FaMedkit size={30} />,
    link: "/chat?agent=medical",
  },
  {
    name: "HEALTH CARE AGENT",
    description: "Assists with managing healthcare plans, appointments, and health-related queries.",
    icon: <FaMedkit size={30} />,
    link: "/chat?agent=health-care",
  },
  {
    name: "JOB SEARCH AGENT",
    description: "Scans job markets, tailors resumes, and helps you land your dream job.",
    icon: <FaBriefcase size={30} />,
    link: "/chat?agent=job-search",
  },
  {
    name: "CODE REVIEW AGENT",
    description: "Analyzes your code for bugs, best practices, and suggests improvements.",
    icon: <FaCode size={30} />,
    link: "/chat?agent=code-review",
  },
  {
    name: "DEEP SEARCH AGENT ON ANY TOPIC",
    description: "Conducts comprehensive research and provides in-depth information on any given topic.",
    icon: <FaSearch size={30} />,
    link: "/chat?agent=deep-search",
  },
  {
    name: "AI Personal Life Manager Agent",
    description: "Manages your daily tasks, schedules, and personal goals to optimize your life.",
    icon: <FaUser size={30} />,
    link: "/chat?agent=personal-life-manager",
  },
  {
    name: "AI Education Institute Automation Agent",
    description: "Automates administrative tasks and enhances operational efficiency for educational institutions.",
    icon: <FaBuilding size={30} />,
    link: "/chat?agent=education-automation",
  },
];

export default function AgentsPage() {
  return (
    <section className="min-h-screen bg-charcoal-grey-1 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-text-main text-center mb-10">
          Explore Our <span className="text-neon-red-1">Intelligent Agents</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <AgentCard
              key={agent.name}
              name={agent.name}
              description={agent.description}
              icon={agent.icon}
              link={agent.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
