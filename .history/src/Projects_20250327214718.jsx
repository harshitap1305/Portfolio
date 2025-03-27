import { FaReact, FaNodeJs, FaDatabase, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import '.'
const projectsData = [
  {
    name: "E-learning Platform",
    techStack: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ],
    description: [
      "Developed a dynamic web application for interactive learning.",
      "Integrated Open Trivia API for quizzes and YouTube API for video streaming.",
      "Implemented an AI-powered chatbot to assist users.",
      "Utilized MongoDB to store user data, courses, and progress."
    ]
  },
  {
    name: "Library Management Website",
    techStack: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "MySQL", icon: <SiMysql /> }
    ],
    description: [
      "Designed and developed a web-based Library Management System.",
      "Developed user/administrator dashboards for book management.",
      "Implemented CRUD operations for books, users, and transactions."
    ]
  }
];

function ProjectsSection() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-box">
          <h3 className="project-title">{project.name}</h3>
          <div className="tech-stack">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech">
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
          <ul className="project-description">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProjectsSection;
