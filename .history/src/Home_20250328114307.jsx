import React from 'react';
import harshita from './assets/harshita.png';
import './App.css';
import { FaReact, FaHtml5, FaCss3Alt,FaNodeJs, FaPhp,FaGitAlt,FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiNextdotjs, SiExpress,SiMysql,SiMongodb,SiXampp,SiPostman,SiGnubash,SiLatex,SiC,SiCplusplus,SiJavascript } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import Projects from './Projects';

import Cards from './Cards';
const skillsData=[
    {
        category: "Languages",
        skills: [
          { name: "C", description: "Procedural programming language", icon: <SiC/> },
          { name: "C++", description: "Object-oriented programming language", icon: <SiCplusplus/> },
          { name: "Javascript", description: "Scripting language for web development", icon: <SiJavascript/> },
          
        ]
      },
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
          { name: "MongoDB", description: "NoSQL Database", icon: <SiMongodb/> },
          { name: "MySQL", description: "Relational Database", icon: <SiMysql /> }
        ]
      },
      {
        category: "DevOps and Tools",
        skills: [
            { name: "Git", description: "Version control system",icon: <FaGitAlt/>,  },
            { name: "XAMPP", description: "Local server stack for PHP development",icon: <SiXampp/>,  },
            { name: "Postman", description: "API testing tool",icon: <SiPostman/> },
            {  name: "VS Code", description: "Source code editor",icon:  <FaCode/>},
            {  name: "Shell Scripting", description: "Command-line scripting for automation",icon: <SiGnubash/> },
            { name: "LaTeX", description: "Document preparation system",icon: <SiLatex/> }
          ]
      },
      {
      category:"Concepts",
      skills:[
        { name: "Data Structures and Algorithms", description: "Problem-solving", icon: <FaCode/> },
        {name:"API Integration",description:"Integrating APIs in web applications",icon:<FaCode/>},
        { name:"Website Deployment",description:"Deploying websites on hosting platforms",icon:<FaCode/> }
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
      🚀 Passionate developer | Problem solver | Lifelong learner
      </p>
      <p className='intro'>I am Harshita Patidar, a Computer Science and Engineering student at IIT Bhilai, driven by a passion for software development, problem-solving, and impactful technology solutions. I have built and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.I thrive in dynamic environments where innovation meets purpose, and I am eager to apply my skills to challenges that drive meaningful change.</p>
      <div className="resume-container">
    <h3>My Resume</h3>
    <a 
  href="https://drive.google.com/uc?export=download&id=1MSy7oBDmnRTNFt26dRO-0J8-vN2XmGAz" 
  className="resume-button"
>
    📄 Download Resume
</a>

   </div>

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
      <h1 className="skills-heading">My Skills</h1>
      <div className="skills-container">
        {skillsData.map((section, index) => (
          <div key={index} className="skill-section">
            <h3 className="skill-category">{section.category}</h3>
            <div className="skill-grid">
              {section.skills.map((skill, i) => (
                <Cards key={i} icon={skill.icon} name={skill.name} description={skill.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className="projects-heading">MY Projects</h1>
      <Projects/>
      <h2 className="ach-heading">Achievements</h2>
      <div className="achievements-container">
 
  <ul className="achievements-list">
    <li>Ranked in the Top 3 percent (among 11,13,325 students) in <b>JEE MAINS, 2023</b></li>
    <li>Ranked in the Top 9.3 percent (among 180,372 students) in <b>JEE ADVANCED, 2023</b></li>
  </ul>
</div>
<h2 className="contact-heading">Contact Information</h2>
<div className="contact-container">

  <div className="contact-details">
    <p><FaEnvelope className="contact-icon" /> <b>Email:</b> <a href="mailto:harshitapatidar257@gmail.com">harshitapatidar257@gmail.com</a></p>
    <p><FaPhone className="contact-icon" /> <b>Phone:</b> +91 7447079410 | +91 9406256247</p>
    <p><FaLinkedin className="contact-icon" /> <b>LinkedIn:</b> 
      <a href="https://www.linkedin.com/in/harshita-patidar-86294729a" target="_blank" rel="noopener noreferrer">harshita-patidar</a>
    </p>
    <p><FaGithub className="contact-icon" /> <b>GitHub:</b> 
      <a href="https://github.com/harshitap1305" target="_blank" rel="noopener noreferrer"> harshitap1305</a>
    </p>
  </div>
</div>
    </>
  );
};

export default Home;
