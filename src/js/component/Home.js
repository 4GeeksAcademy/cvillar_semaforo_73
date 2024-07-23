import React from 'react';
import TrafficLight from './TrafficLight';
import '../../styles/TrafficLight.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Semáforo Interactivo</h1>
      <TrafficLight />
    </div>
  );
};

export default Home;
