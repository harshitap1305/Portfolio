import React from 'react';
import harshita from './assets/harshita.png';
import './App.css';

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
      <div className="education">
        <h2>Education</h3>
        <h3>B.Tech in Computer Science and Engineering</h3>
        <p>Indian Institute of Technology Bhilai</p>
        <p>2023 - 2023</p>
        <h3>Senior Secondary</h3>
        <p>Delhi Public School</p>
        <p>2017 - 2019</p>

      </div>
    </>
  );
};

export default Home;
