// src/components/Portfolio.js
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  ArrowRight,
  Download,
  MessageCircle,
  BookOpen
} from "lucide-react";
import PitchPerfect from "../assets/pitchperfect.png";
import OmniPrep from "../assets/omni.png";
import library from "../assets/library.png";
import eduverse from "../assets/eduverse.png";
const ACCENT = "#913175";

function Projects({darkMode, ACCENT, h2, sectionClass }) {

const projects = [
    {
      title: " OmniPrep– Voice-Based Interview Preparation Platform",
      image: { src: OmniPrep, alt: "OmniPrep Logo" },
      description:
        "A full-stack platform that helps students practice interviews through AI-powered, voice-based mock sessions, resume analysis, real-time soft-skill feedback, job search tools, and interview scheduling with reminders.",
      github: "https://github.com/aviralsaxena16/OmniPrep",
      //demo: "https://myecommerce.netlify.app",
      date: "July 2025",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Clerk Auth", "OmniDimension Voice Agent", "Groq API", "NodeMailer"],
    },
    {
      title: "PitchPerfect AI- AI-based Pitch Analysis Platform",
      image: { src: PitchPerfect, alt: "PitchPerfect Logo" },
      description:
        "An AI-driven tool that evaluates startup pitches across multiple dimensions, simulates investor Q&A, and supports PDF/PPT/image inputs with OCR for inclusive accessibility.",
      github: "https://github.com/Sharmamayankkkk/PitchPerfect-AI",
      //demo: "https://mytaskmanager.vercel.app",
      date: "June 2025",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Google Gemini API", "Tesseract.js"],
    },
    {
      title: "Eduverse - E-learning Platform",
      image: { src: eduverse, alt: "Eduverse Logo" },
      description:
        "A modular learning platform offering personalized video content, gamified quizzes, and an AI chatbot for real-time learner assistance, with secure authentication and scalable design.",
      github: "https://github.com/aviralsaxena16/Eduverse-Elearning-Platform",
      //demo: "https://mytaskmanager.vercel.app",
      date: "Jan 2025 - Mar 2025",
      tech: ["React.js", "Node.js", "Express.js", "MongoDb", "YouTube API", "OpenTrivia API"],
    },
    {
      title: "Library Management System",
      image: { src: library, alt: "Library Management Logo" },
      description:
        "A web application for managing books, user profiles, and borrowing history with separate dashboards for admins and users, enabling efficient role-based operations.",
      github: "https://github.com/harshitap1305/Library-Management-Website",
      //demo: "https://myweather.netlify.app",
      date: "Oct 2024 - Nov 2024",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
    },
  ];

  return (
  <>
  {/* --------------------------- PROJECTS ------------------------- */}
<section id="projects" className="py-24">
  <div className={sectionClass}>
    <h2 className={h2} style={{ color: ACCENT }}>
      Projects
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <div
          key={i}
          className="group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col relative transform hover:-translate-y-1"
          style={{
            background: darkMode ? "#1f1f1f" : "#fff",
            border: `1px solid ${darkMode ? "#333" : "#e5e5e5"}`,
          }}
        >
          {/* Gradient accent bar */}
          <div
            className="h-1 relative overflow-hidden"
            style={{ background: ACCENT }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
          </div>

          {/* Project Image */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            {p.image ? (
              <img
                src={p.image.src}
                alt={p.image.alt}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            
            {/* Fallback placeholder for missing images */}
            <div 
              className="w-full h-48 flex items-center justify-center"
              style={{ 
                display: p.image ? 'none' : 'flex',
                background: `linear-gradient(135deg, ${ACCENT}20, ${ACCENT}10)`,
              }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ background: ACCENT }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: ACCENT }}>
                  {p.title}
                </p>
              </div>
            </div>

            {/* Image overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick preview badge */}
            {/* <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div 
                className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm"
                style={{
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  border: `1px solid ${ACCENT}50`,
                }}
              >
                View Project
              </div>
            </div> */}
          </div>

          {/* Card content */}
          <div className="p-6 flex flex-col gap-4 flex-grow">
            {/* Header with improved spacing */}
            <div className="flex justify-between items-start gap-4">
              <h3 
                className="text-xl font-bold leading-tight group-hover:scale-105 transition-transform duration-200" 
                style={{ color: ACCENT }}
              >
                {p.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-500 shrink-0">
                <Calendar size={14} />
                <span className="font-medium">{p.date}</span>
              </div>
            </div>

            {/* Description with better typography */}
            <p className="text-gray-600 dark:text-gray-300 flex-grow leading-relaxed text-sm">
              {p.description}
            </p>

            {/* Tech stack with improved styling */}
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 hover:scale-105"
                  style={{
                    background: darkMode ? "#2d2d2d" : "#f3f4f6",
                    color: darkMode ? "#e5e5e5" : "#374151",
                    border: `1px solid ${darkMode ? "#404040" : "#e5e7eb"}`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons with enhanced styling */}
            <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={p.github}
                className="flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-10 hover:scale-105"
                style={{ 
                  color: ACCENT,
                  backgroundColor: 'transparent',
                  border: `1px solid ${ACCENT}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = ACCENT;
                  e.target.style.color = darkMode ? '#000' : '#fff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = ACCENT;
                }}
              >
                <Github size={16} />
                Code
              </a>
              {/* <a
                href={p.demo}
                className="flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: ACCENT,
                  color: darkMode ? '#000' : '#fff',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = `0 8px 25px ${ACCENT}30`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <ExternalLink size={16} />
                Demo
              </a> */}
            </div>
          </div>

          {/* Subtle corner accent */}
          <div 
            className="absolute top-0 right-0 w-16 h-16 opacity-5"
            style={{
              background: `radial-gradient(circle at top right, ${ACCENT}, transparent 70%)`,
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>
  </>
  )
}

export default Projects
