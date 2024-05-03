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
       <div> <p>Il faut faire {result} mm</p>
      </div>
      )}
       <p> 9 pts entre 0 et 1010</p>
        <p> 12 pts entre 1010 et 1410 </p>
        <p> 15 pts entre 1410 et 1810</p>
        <p> 18 pts entre 1810 et 2210</p>
        <p> 21 pts entre 2210 et 2610</p>
    </div>
  );
}

export default SorbonnePage;