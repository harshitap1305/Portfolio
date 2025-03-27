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
    <div className="">
        </div>
    </>
  );
};

export default Home;
