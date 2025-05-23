import React from 'react';
import harshita from './assets/harshita.png';
import './App.css';

const Home = () => {
  return (
    <>
      <img src={harshita} alt="Harshita Patidar" className="harshita" />
      <h2 className="name">Hey, I am Harshita Patidar!</h2>
      <p className="tagline">A Designer who</p>
      <h1 className="judging-text">
        Judges a book by its <span className="cover">cover</span>...
      </h1>
      <p className="subtext">
        Because if the cover does not impress you, what else can?
      </p>
    </>
  );
};

export default Home;
