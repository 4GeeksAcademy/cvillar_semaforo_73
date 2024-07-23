import React from 'react';
import ReactDOM from 'react-dom/client';

import '../styles/TrafficLight.css'; // Ruta corregida

//import your own components
import Home from "./component/Home";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);