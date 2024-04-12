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
        <p>Il faut faire {result} pts</p>
      )}
    </div>
  );
}

export default SorbonnePage;