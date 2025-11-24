# BT AgentHub

Your Intelligent Companion for Every Goal. BT AgentHub brings you powerful AI agents powered by Next.js, FastAPI, and the OpenAI Agent SDK.

## Overview

BT AgentHub is an ultra-modern, dark neon-tech themed web application designed to provide specialized AI agent consultations. The platform features a responsive user interface built with Next.js, React, and Tailwind CSS, and a robust backend powered by FastAPI that orchestrates various AI agents using the OpenAI Agent SDK. Currently, the platform specializes in medical consultations, offering a range of virtual healthcare specialists.

## 🎨 Design and UI/UX

The design follows a premium dark neon-tech aesthetic:

*   **Theme:** Deep blacks, charcoal greys, with neon orange-red/cyan/teal accents for highlights and glows.
*   **Typography:** Futuristic sans-serif fonts (`Inter`, `Space Grotesk`, `Neue Montreal`).
*   **Motion:** Subtle animations, glowing lines, smooth hover effects, and neon pulsing elements.
*   **Components:** Dark "glass-cards" with translucent backgrounds, deep shadows, and neon borders.
*   **Responsiveness:** Fully optimized for mobile, tablet, laptop, and 4K desktop screens.

## 🏠 Key Features

### Homepage

*   **Header:** Sticky, black/transparent header with logo, navigation links (Home, Specialists, Chat, Contact), and a "Get Started" CTA button.
*   **Hero Section:** Prominent title ("Advanced Medical AI Care Specialists"), compelling subheadline, and interactive CTA buttons. Features abstract tech graphics and subtle animations.
*   **Agents Section:** A dynamic grid of specialized AI medical agent cards. Each card displays an icon, agent name, short description, and leads to a dedicated chat experience.
    *   **Medical Agents:** Cardiologist, Dermatologist, ENT, Eye, Orthopedic, Dentist, Pediatrician, Pharmacy Assistant, Nutritionist, General Physician.
*   **Contact Section:** Minimalist card design displaying contact email (`bashartc13@gmail.com`) with glowing icons.
*   **Footer:** Comprehensive footer with brand info, navigation, social links (GitHub, LinkedIn, Email), copyright, and policy links.

### Chat Page

*   **Superior UI/UX:** Designed to offer a highly modern and intuitive chat experience.
*   **Responsive Layout:** Features a main chat area and a responsive sidebar that lists all agents. On mobile, the sidebar collapses into a bottom drawer.
*   **Agent Selection:** Users can select an agent from the sidebar or directly access via URL. The active agent is visually highlighted with a pulsing indicator.
*   **Message Flow:** Smooth message bubbles with distinct styling for user and agent messages. Agent messages support Markdown.
*   **Input Box:** "3D-style" floating input box with neon glow and a send button.
*   **Typing Indicator:** Animated pulsing dots indicate when the agent is generating a response.

## 💻 Technical Stack

### Frontend

*   **Framework:** Next.js 16
*   **Library:** React 19
*   **Styling:** Tailwind CSS 4
*   **Animations:** Framer Motion (used in components)
*   **Icons:** Lucide React, React Icons
*   **Markdown:** React Markdown

### Backend

*   **Framework:** FastAPI (Python)
*   **AI Agent SDK:** OpenAI Agent SDK
*   **AI Model:** Gemini 2.5 Flash
*   **Tooling:**
    *   `aiohttp`, `httpx`: Asynchronous HTTP requests.
    *   `tavily-python`: Web search capabilities for agents.
*   **Database:** SQLite (for agent session management)
*   **Environment Management:** `dotenv` for API key management.

## 🚀 How It Works

1.  **User Interaction:** Users browse medical AI specialists on the homepage.
2.  **Agent Selection:** Clicking an agent card or "Start Consultation" navigates to the chat page with the selected agent.
3.  **Frontend-Backend Communication:** The Next.js frontend sends user messages to the FastAPI backend via a `/chat` endpoint.
4.  **Agent Orchestration:**
    *   The backend selects the appropriate AI agent based on the `agent_id` from the frontend.
    *   If no specific agent is selected, a `triage_agent` attempts to route the query to the best-suited specialist.
    *   Agents leverage defined `function_tool`s (e.g., `tavily_web_search`, `get_drug_info`, `flight_info`) to gather information or perform actions.
    *   An `SQLiteSession` maintains conversation context for each user/agent interaction.
5.  **Response Generation:** The AI agent (powered by Gemini 2.5 Flash) processes the message, uses its tools, and generates a detailed response based on its specialized instructions.
6.  **Display:** The backend sends the response back to the frontend, which then displays it in the chat interface.

## 🛠️ Setup and Installation

### Prerequisites

*   Node.js (v18 or higher)
*   Python (v3.11 or higher)
*   `uv` (Python package manager, recommended)
*   `GEMINI_API_KEY` and `TAVILY_API_KEY` (environment variables)

### Frontend Setup

1.  Navigate to the project root: `cd BT-AgentHub-main`
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
    *   The frontend will be available at `http://localhost:3000` (or similar).

### Backend Setup

1.  Navigate to the backend directory: `cd backend`
2.  Create a virtual environment: `python -m venv .venv`
3.  Activate the virtual environment:
    *   Windows: `.\.venv\Scripts\activate`
    *   macOS/Linux: `source ./.venv/bin/activate`
4.  Install dependencies using `uv` (as per `pyproject.toml`): `uv pip install -r requirements.txt` (assuming requirements.txt is generated by uv.lock or equivalent)
5.  Create a `.env` file in the `backend` directory and add your API keys:
    ```
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    TAVILY_API_KEY="YOUR_TAVILY_API_KEY"
    NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000" # Or your deployed frontend URL
    ```
6.  Run the FastAPI server: `uvicorn main:app --reload`
    *   The backend will be available at `http://localhost:8000` (or similar).

## 🚀 Deployment

The project is designed for deployment using platforms like Vercel for the Next.js frontend and Railway (or similar) for the FastAPI backend. Ensure environment variables (`GEMINI_API_KEY`, `TAVILY_API_KEY`, `NEXT_PUBLIC_FRONTEND_URL`) are correctly configured in your deployment environment.

## 🤝 Contributing

(Add contribution guidelines here if applicable)

## 📄 License

(Add license information here if applicable)
