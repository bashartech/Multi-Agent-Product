import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-red-600/20 shadow-2xl shadow-red-600/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">AgentHub</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent AI agents powered by Next.js, FastAPI & OpenAI for every goal.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#agents"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Explore Agents
                </Link>
              </li>
              <li>
                <Link href="/chat" className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm">
                  Open Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chat"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/#agents"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:bashartc13@gmail.com"
                className="p-3 rounded-lg bg-red-600/10 border border-red-600/30 hover:border-red-600 text-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://github.com/bashartech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-red-600/10 border border-red-600/30 hover:border-red-600 text-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/m-bashar-sheikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-red-600/10 border border-red-600/30 hover:border-red-600 text-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-red-600/10 border border-red-600/30 hover:border-red-600 text-red-500 hover:text-red-400 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                title="Twitter"
              >
                <FaTwitter size={18} />
              </a> */}
            </div>

            {/* Email Contact */}
            <div className="mt-4">
              <a
                href="mailto:bashartc13@gmail.com"
                className="inline-block text-sm text-gray-400 hover:text-red-500 transition-colors duration-300 break-all"
              >
                bashartc13@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-600/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} AgentHub. All rights reserved. Powered by BT AgentHub.</p>
          {/* <div className="flex gap-4">
            <Link href="/terms" className="hover:text-red-500 transition-colors duration-300">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-red-500 transition-colors duration-300">
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
