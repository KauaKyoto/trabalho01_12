import React, { useState } from 'react';
import CalculadoraDeMedia from './components/media';
import './components/Media.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> 🧮Calculadora de Média🧮 </h1>
      <CalculadoraDeMedia />
      <br></br>
      <div className='footer'>
      <h4> © Todos os direitos reservados à Kauã Marques e Luis Fernando </h4>  
    </div>
    </div>
  );
}

export default App;
