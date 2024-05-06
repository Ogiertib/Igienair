import React, { useState } from 'react';
import PtsSorbonne from './Composant/PtsSorbonne';

function SorbonnePage() {
  const [size, setSize] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'size') {
      setSize(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedResult = PtsSorbonne(size);
    setResult(calculatedResult);
  };

  return (
    <div>
      <h2>Calcul nb de points Sorbonne</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Taille de la Sorbonne :
            <input
              type="number"
              name="size"
              value={size}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Calculer</button>
      </form>
      {result && (
       <div> <p>Il faut faire {result} pts pour le SF6 </p>
      </div>
      )}
        <p> 9 pts entre 0 et 1010</p>
        <p> 12 pts entre 1010 et 1410</p>
        <p> 15 pts entre 1410 et 1810 </p>
        <p> 18 pts entre 1810 et 2210</p>
        <p> 21 pts entre 2210 et 2610</p>
        <p> norme: INRS ED795 (routine) NFX 15-206 et NF EN 14-175 (réception)</p>
        <p>  flux: {'>'}0.40m/s ou 30% des essaies de réception</p>
        <p>Flux à 40cm de la sorbonne {'< 0.2'} </p>
        <p>Visualisation des flux grace à la poire à fumé</p>
        <p>Sfx {'< 0.1'} on doit injecter a 2L minute</p>
        <p>Une sorbonne doit se stiuer au minimum à plus de 720 mm au dessus du sol</p>
    </div>
  );
}

export default SorbonnePage;