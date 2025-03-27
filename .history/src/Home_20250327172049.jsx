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
      <p className=''></p>
    </>
  );
};

export default Home;
