import React, { useState } from 'react';
import Temperatura from './components/temperatura';
import './components/Temperatura.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1> 🌡️ Temperatura 🌡️ </h1>
      <Temperatura />
      <br></br>
      <div className='footer'>
      <h4> © Todos os direitos reservados à Kauã Marques e Luis Fernando </h4>  
    </div>
    </div>
  );
}

export default App;
