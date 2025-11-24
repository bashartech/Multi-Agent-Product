// app/agents/page.tsx
'use client';

import AgentCard from '@/components/AgentCard';
import { 
  FaPlane, FaHeartbeat, FaSpa, FaEarListen, FaEye, FaBone, FaTooth, FaBaby, FaPrescriptionBottleMedical, FaAppleWhole, FaUserMd 
} from 'react-icons/fa';

const agents = [
  {
    name: "Cardiologist Agent",
    description: "Expert in heart health, diagnosing and guiding on cardiovascular conditions.",
    icon: <FaHeartbeat size={30} />,
    link: "/chat?agent=cardiologist-specialist",
  },
  {
    name: "Dermatologist Agent",
    description: "Specializes in skin, hair, and nail conditions, offering expert care and advice.",
    icon: <FaSpa size={30} />,
    link: "/chat?agent=dermatologist-specialist",
  },
  {
    name: "ENT Specialist Agent",
    description: "Focuses on ear, nose, and throat disorders, providing diagnosis and treatment guidance.",
    icon: <FaEarListen size={30} />,
    link: "/chat?agent=ent-specialist",
  },
  {
    name: "Eye Specialist / Optometrist Agent",
    description: "Expert in vision problems, eye diseases, and optical care, including glasses and lenses.",
    icon: <FaEye size={30} />,
    link: "/chat?agent=eye-specialist",
  },
  {
    name: "Orthopedic Agent",
    description: "Specializes in bones, joints, muscles, and spine, guiding on injuries and musculoskeletal health.",
    icon: <FaBone size={30} />,
    link: "/chat?agent=orthopedic-specialist",
  },
  {
    name: "Dentist / BDS Agent",
    description: "Provides expert oral health care, dental pain management, and hygiene guidance.",
    icon: <FaTooth size={30} />,
    link: "/chat?agent=dentist-specialist",
  },
  {
    name: "Pediatrician Agent",
    description: "Specializes in the health of infants, children, and teenagers, offering comprehensive medical care.",
    icon: <FaBaby size={30} />,
    link: "/chat?agent=pediatrician-specialist",
  },
  {
    name: "Pharmacy Assistant Agent",
    description: "Provides information on medicines, drug categories, safe usage, and potential interactions.",
    icon: <FaPrescriptionBottleMedical size={30} />,
    link: "/chat?agent=pharmacy-assistant",
  },
  {
    name: "Nutritionist Agent",
    description: "Certified expert in diet planning, weight management, and nutrition for various health goals.",
    icon: <FaAppleWhole size={30} />,
    link: "/chat?agent=nutritionist-specialist",
  },
  {
    name: "General Physician Agent",
    description: "Offers primary care for everyday medical conditions, diagnosis, and general health advice.",
    icon: <FaUserMd size={30} />,
    link: "/chat?agent=general-physician",
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
