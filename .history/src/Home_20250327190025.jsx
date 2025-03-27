import React from 'react';
import harshita from './assets/harshita.png';
import './App.css';
import { FaReact, FaHtml5, FaCss3Alt,FaNodeJs, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiExpress,SiMysql,SiMongodb } from "react-icons/si";

const skillsData=[
    {
        category: "Frontend",
        skills: [
          { name: "React.js", description: "Frontend Library", icon: <FaReact/> },
          { name: "HTML", description: "Markup Language", icon: <FaHtml5 /> },
          { name: "CSS", description: "Styling", icon: <FaCss3Alt /> },
          { name: "Next.js", description: "Frontend Framework", icon: <SiNextdotjs /> }
        ]
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js", description: " JavaScript runtime", icon: <FaNodeJs /> },
          { name: "Express.js", description: "Node.js web framework.", icon: <SiExpress /> },
          { name: "PHP", description: "Backend scripting language", icon: <FaPhp /> }
        ]
      },
      {
        category: "Database",
        skills: [
          { name: "MongoDB", description: "NoSQL Database", icon: <SiMysql /> },
          { name: "MySQL", description: "Relational Database", icon: <FaReact /> },
         
        ]
      },
      {
        category: "Frontend",
        skills: [
          { name: "React.js", description: "Frontend Library", icon: <FaCode /> },
          { name: "HTML", description: "Markup Language", icon: <FaCode /> },
          { name: "CSS", description: "Styling", icon: <FaCode /> },
          { name: "JavaScript", description: "Programming Language", icon: <FaCode /> }
        ]
      },
      {
        category: "Frontend",
        skills: [
          { name: "React.js", description: "Frontend Library", icon: <FaCode /> },
          { name: "HTML", description: "Markup Language", icon: <FaCode /> },
          { name: "CSS", description: "Styling", icon: <FaCode /> },
          { name: "JavaScript", description: "Programming Language", icon: <FaCode /> }
        ]
      }
]
const Home = () => {
  return (
    <>
      <img src={harshita} alt="Harshita Patidar" className="harshita" />
      <h2 className="name">Hey, I am Harshita Patidar!</h2>
      <p className="tagline">Computer Science and Engineering (B.Tech) | IIT Bhilai</p>
      <p className="subtext">
      🚀 Passionate developer | Problem solver | Lifelong learner.
      </p>
      <p className='intro'>I am Harshita Patidar, a Computer Science and Engineering student at IIT Bhilai, driven by a passion for software development, problem-solving, and impactful technology solutions. With a solid foundation in C, C++, and JavaScript, I have built and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.I thrive in dynamic environments where innovation meets purpose, and I am eager to apply my skills to challenges that drive meaningful change.</p>
      <div className="education-container">
        <h1 className="education-heading">Education</h1>
        <ul className="education-list">
          <li>
            <span className="edu-degree">B.Tech in Computer Science and Engineering</span> | <b>IIT Bhilai</b> | <b>CGPA: 8.27/10</b> (2023 - 2027)
          </li>
          <li>
            <span className="edu-degree">12th (MPBSE)</span> | BCM Higher Secondary School, Dewas, MP | <b>92%</b> (2023)
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
