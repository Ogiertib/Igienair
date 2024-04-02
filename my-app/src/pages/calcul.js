
import './App.css';
import React  from 'react';
import Logo from './logo_igienair.jpg';

function Calcul() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
         Bienvenue dans la feuille de calcul
        </p>
        <a
          className="App-link"
          href="./calcul"        
        >
          calc
        </a>
      </header>
    </div>
  );
}

export default Calcul;
