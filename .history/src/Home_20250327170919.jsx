import React from 'react';
import harshita from './assets/harshita.png';
import './App.css';

const Home = () => {
  return (
    <>
      <img src={harshita} alt="Harshita Patidar" className="harshita" />
      <h2 className="name">Hey, I am Harshita Patidar!</h2>
      <p className="tagline">Computer Science and Engineering (B.Tech) | IIT Bhilai</p>
      <h1 className="judging-text">
      Passionate developer | Problem solver | Lifelong learner.<span className="cover">cover</span>...
      </h1>
      <p className="subtext">
        Because if the cover does not impress you, what else can?
      </p>
    </>
  );
};

export default Home;
