import React, { useState, useEffect } from 'react';
import '../../styles/TrafficLight.css'; // Ruta corregida

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState('red'); // Inicialmente en rojo
  const [currentColor, setCurrentColor] = useState('red');
  const [autoMode, setAutoMode] = useState(true); // Modo automático

  useEffect(() => {
    if (autoMode) {
      const colors = ['red', 'yellow', 'green'];
      const currentIndex = colors.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      const nextColor = colors[nextIndex];

      const interval = setInterval(() => {
        setCurrentColor(nextColor);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentColor, autoMode]);

  useEffect(() => {
    if (!autoMode && selectedColor) {
      setCurrentColor(selectedColor);
      setAutoMode(true); // Reanudar modo automático después de la selección
    }
  }, [selectedColor]);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setCurrentColor(color);
    setAutoMode(false); // Detener el modo automático al seleccionar un color
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div
          className={`light red ${currentColor === 'red' ? 'selected' : ''}`}
          onClick={() => handleColorClick('red')}
        ></div>
        <div
          className={`light yellow ${currentColor === 'yellow' ? 'selected' : ''}`}
          onClick={() => handleColorClick('yellow')}
        ></div>
        <div
          className={`light green ${currentColor === 'green' ? 'selected' : ''}`}
          onClick={() => handleColorClick('green')}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;


