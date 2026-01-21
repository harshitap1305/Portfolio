// src/components/Portfolio.js
import React, { useState, useEffect } from "react";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import About from "./Components/About";
import Contact from "./Components/Contact";
import harshita from './assets/harshita2.jpg';
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Trophy,
  School,
  BookOpenCheck,
  Sparkles,
  UserRoundCheck,
  Target,
  CodeXml,
} from "lucide-react";

const ACCENT = "#913175";

export default function Portfolio() {
  const [darkMode, setDarkMode]= useState(() =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("all");
  const [scrollY, setScrollY] = useState(0);


  /* ------------------------------------------------------------------ */
  /*  utilities                                                         */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Skills",
    "Achievements",
    "PORs",
    "Contact",
  ];
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
    setMobileOpen(false);
  };

  /* ------------------------------------------------------------------ */
  /*  skills, achievements, PORs, etc. (unchanged)                      */
  /* ------------------------------------------------------------------ */
  const skillTabs = {
    all: [
     "C", "C++", "Python", "JavaScript","HTML", "CSS", "Tailwind", "React",
     "Node.js", "Express.js","PHP", "MongoDB", "MySQL", "NumPy", "Pandas",
     "Git", "XAMPP", "REST APIs", "Postman","VS Code","Figma","Shell Scripting","LaTeX","GNUPLOT","Docker","Data Structures and Algorithms","API Integration","Website Deployment",
    ],
    languages: [ "C", "C++", "Python", "JavaScript"],
    frontend:["HTML", "CSS", "Tailwind", "React"],
    backend: ["Node.js", "Express.js","PHP"],
    databases: ["MongoDB", "MySQL"],
    libraries:["NumPy", "Pandas"],
    tools:["Git", "XAMPP", "REST APIs", "Postman","VS Code","Figma","Shell Scripting","LaTeX","GNUPLOT","Docker"],
    concepts:["Data Structures and Algorithms","API Integration","Website Deployment"],
  };

  const achievements = [
    {
      icon: <Trophy/>,
      title:"Competitive Programming Excellence",
      desc:"Achieved a peak competitive programming rating of 1750+ on LeetCode, placing among the top percentile of global users.",
    },
    {
      icon: <Trophy/>,
      title:"Strong DSA Problem-Solving Experience",
      desc:"Solved 700+ Data Structures and Algorithms (DSA) problems across multiple competitive programming platforms, building strong algorithmic and analytical skills.",
    },
    {
      icon: <Trophy/>,
      title: "Smart India Hackathon (SIH) 2025 – Institutional Qualifier",
      desc: " Qualified the Institutional Round of Smart India Hackathon 2025, a prestigious nationwide innovation and problem-solving competition.",
    },
    {
      icon: <Trophy/>,
      title: "Inter IIT Tech Meet 14.0",
      desc: " Secured 12th rank among 23 IITs in the Inter IIT Tech Meet, competing in the High-Preparation problem statement by Pathway.",
    },
    {
      icon: <Trophy/>,
      title: "JEE MAINS, 2023",
      desc: " Ranked in the Top 3 percent (among 11,13,325 students)",
    },
    {
      icon: <Trophy/>,
      title: "JEE ADVANCED, 2023",
      desc: "Ranked in the Top 9.3 percent (among 180,372 students",
    },
  ];

  const pors = [
      {
      icon: <CodeXml/>,
      title: "Mentor",
      org: "Openlake, IIT Bhilai (Open Source Club)",
      dur: "Aug 2025 – Present",
      desc: "Contributing and maintaining open-source projects while managing and organizing open-source events and initiatives.",
    },
    {
      icon: <School/>,
      title: "Mentor (Vinoba Polestar Program)",
      org: "Openlinks Foundation & Raipur Administration",
      dur: "Nov 2024 – Present",
      desc: "Mentored underprivileged government school students preparing for JEE/NEET through the Vinoba Polestar Program, providing academic guidance and motivation.",
    },
        {
      icon: <BookOpenCheck/>,
      title: "Mentor",
      org: "True Mentor",
      dur: "March 2025 – Present",
      desc: "Offered quick, personalized guidance to JEE aspirants through brief on-demand mentorship sessions on an online platform.",
    },
        {
      icon: <Sparkles/>,
      title: "Executive",
      org: "NSS, IIT Bhilai",
      dur: "June 2024 – April 2025",
      desc: "Contributed to the planning and execution of social outreach initiatives, working closely with the team to promote awareness and community engagement on campus.",
    },
    {
      icon: <UserRoundCheck/>,
      title: "Mentor",
      org: "Student Mentorship Program, IIT Bhilai",
      dur: "May 2024 –  Feb 2025",
      desc: "Supported first-year students by offering academic guidance, emotional support, and helping them adapt smoothly to the IIT environment.",
    },
        {
      icon: <Target/>,
      title: "Volunteer",
      org: "NSS, IIT Bhilai",
      dur: "Aug 2023 – Present",
      desc: "Actively participated in community service initiatives, contributing to social awareness and campus engagement efforts.",
    },
  ];

  /* ------------------------------------------------------------------ */
  /*  render helpers                                                    */
  /* ------------------------------------------------------------------ */
  const h2 =
    "text-4xl md:text-5xl font-extrabold mb-8 text-center"; /* smaller */
  const sectionClass =
    "w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16";

  /* ------------------------------------------------------------------ */
  /*  component                                                         */
  /* ------------------------------------------------------------------ */
  return (
    <div  
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-[#181a1b] text-gray-100"
          : "bg-gray-50 text-black"
      }`}
    >
      {/* ----------------------------- NAV ---------------------------- */}
      <nav
        className={`fixed top-0 w-full z-50 ${
          scrollY > 50
            ? darkMode
              ? "bg-[#181a1b]/45 backdrop-blur"
              : "bg-white/90 backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className={`${sectionClass} flex items-center justify-between py-4`}>
          {/* brand */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl font-bold"
            style={{ color: ACCENT }}
          >
            Portfolio
          </button>

          {/* desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative font-medium after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:w-full"
                style={{ color: darkMode ? "#ddd" : "#333" }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* mobile toggles */}
          <div className="lg:hidden flex gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        {mobileOpen && (
          <div
            className={`lg:hidden py-4 space-y-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left px-6 py-3"
                style={{ color: ACCENT }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-25 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span style={{ color: ACCENT }}>
                  Harshita
                </span>
              </h1>
              <p className={`text-xl lg:text-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate developer | Problem solver | Lifelong learner
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Passionate about creating innovative web solutions and exploring cutting-edge technologies. 
                Currently pursuing B.Tech in CSE at IIT Bhilai and I am eager to apply my skills to challenges that drive meaningful change.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="https://github.com/harshitap1305" className={`flex items-center gap-2 px-3 py-3 rounded-full border border-[#913175] hover:bg-[#913175] hover:text-white transition-colors ${
                  darkMode ? 'text-grey-200' : 'text-grey-800'
                }`}>
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/harshita-patidar-86294729a" className={`flex items-center gap-2 px-3 py-3 rounded-full border border-[#913175] hover:bg-[#913175] hover:text-white transition-colors ${
                  darkMode ? 'text-grey-200' : 'text-grey-800'
                }`}>
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a href="https://drive.google.com/file/d/1MSy7oBDmnRTNFt26dRO-0J8-vN2XmGAz/view?usp=sharing" className={`flex items-center gap-2 px-4 py-3 rounded-full border border-[#913175] hover:bg-[#913175] hover:text-white transition-colors ${
                  darkMode ? 'text-grey-200' : 'text-grey-800'
                }`}>
                  Resume
                </a>
                {/* <a href="#" className={`flex items-center gap-2 px-3 py-3 rounded-full border border-[#913175] hover:bg-[#913175] hover:text-white transition-colors ${
                  darkMode ? 'text-grey-200' : 'text-grey-800'
                }`}>
                  Chat with My Bot
                </a> */}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-[#913175] ">
                  <div className="w-full h-full rounded-full bg-[#8a296e] flex items-center justify-center text-6xl">
                    <img src={harshita} alt="Harshita" className="w-78 h-78 rounded-full object-cover" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ABOUT ME */}
<About darkMode={darkMode} ACCENT={ACCENT} h2={h2} sectionClass={sectionClass}/>

{/* EDUCATION */}
<Education darkMode={darkMode} ACCENT={ACCENT} h2={h2} sectionClass={sectionClass}/>

{/* PROJECTS */}
<Projects darkMode={darkMode} ACCENT={ACCENT} h2={h2} sectionClass={sectionClass}/>

      {/* --------------------------- SKILLS --------------------------- */}
      <section id="skills" className="py-24 bg-gray-100 dark:bg-[#181a1b]/3">
        <div className={sectionClass}>
          <h2 className={h2} style={{ color: ACCENT }}>
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(skillTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  activeSkillTab === tab
                    ? "text-white"
                    : "border"
                }`}
                style={{
                  background:
                    activeSkillTab === tab ? ACCENT : "transparent",
                  borderColor: ACCENT,
                  color: activeSkillTab === tab ? "#fff" : ACCENT,
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {skillTabs[activeSkillTab].map((s) => (
              <span
                key={s}
                className="px-8 py-4 rounded-md  text-xl font-medium shadow-sm"
                style={{
                  background: darkMode ? "#2d2d2d" : "#e5e5e5",
                  color: ACCENT,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- ACHIEVEMENTS ----------------------- */}
      <section id="achievements" className="py-24">
        <div className={sectionClass}>
          <h2 className={h2} style={{ color: ACCENT }}>
            Achievements
          </h2>
          <div className="flex justify-center">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
             {achievements.map((a, i) => (
               <div
                 key={i}           
                 className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700"
                 style={{
                background: darkMode ? "#1f1f1f" : "#fff",
                border: `1px solid ${darkMode ? "#333" : "#e5e5e5"}`,
               }}
                >
                 <div className="flex flex-col items-center space-y-4">
                   <div className="text-3xl">{a.icon}</div>
           
                   <h3 className="text-xl font-semibold text-center" style={{ color: ACCENT }}>           
                   {a.title}
                   </h3>
           
                   <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed" style={{ color: darkMode ? "#d1d5db" : "#000000" }}>
                     {a.desc}
                   </p>
                 </div>
               </div>
             ))}
           </div>
           </div>
        </div>
      </section>

     <section id="pors" className="py-24 bg-gray-100 dark:bg-[#181a1b]/3">
  <div className={sectionClass}>
    <h2 className={h2} style={{ color: ACCENT }}>
      Positions of Responsibility
    </h2>

    <div className="grid md:grid-cols-3 gap-8 justify-items-center max-w-8xl mx-auto">
      {pors.map((p, i) => (
        <div
          key={i}
          className="w-full max-w-md p-6 rounded-2xl bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-shadow duration-300"
          style={{
            background: darkMode ? "#1f1f1f" : "#fff",
            border: `1px solid ${darkMode ? "#333" : "#e5e5e5"}`,
          }}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="text-4xl">{p.icon}</div>

            <h3 className="text-xl font-semibold" style={{ color: ACCENT }}>
              {p.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 font-medium" style={{ color: darkMode ? "#fff" : 'black' }}>
              {p.org}
            </p>

            <p className="text-sm text-gray-500 italic">{p.dur}</p>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed" style={{ color: darkMode ? "grey" : 'black' }}>
              {p.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* --------------------------- CONTACT -------------------------- */}
     <Contact darkMode={darkMode} ACCENT={ACCENT} h2={h2} sectionClass={sectionClass}/>

      {/* ---------------------------- FOOTER -------------------------- */}
      <footer className="py-6 text-center text-sm">
        Made with ❤️ by Harshita
      </footer>
    </div>
  );
}
