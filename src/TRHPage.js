import React from 'react';
import { useState } from 'react';


function TRHPage() {
 
  const [sum, setSum] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [Cube, setCube] = useState('');
  const [resultCube, setResultCube] = useState('');

  const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === 'inputValue') {
      setInputValue(value);
    } else if (name === 'Cube') {
      setCube(value);
    }  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNumbers = inputValue.split('+').map(Number); // Convertir la chaîne en tableau de nombres
    const validNumbers = newNumbers.filter(num => num !== 0);
    const updatedNumbers = [...numbers, ...validNumbers]; // Concaténer les nouveaux nombres avec les valeurs existantes
    setNumbers(updatedNumbers);
    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0); // Calculer la somme des nombres
    setSum(sum ? sum.toFixed(2) : null)
    const avg = sum / updatedNumbers.length; // Calculer la moyenne
    setAverage(avg.toFixed(2)); // Fixer le nombre de décimales à 2 et mettre à jour le state
    setInputValue(''); // Réinitialiser la valeur de l'entrée
    const resultCube = sum / Cube; // Calculer le débit par rapport au cubage
    setResultCube(resultCube ? resultCube.toFixed(1) : null)
    e.preventDefault();
  };

  const handleDelete = (index) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index); // Supprimer la valeur à l'index donné
    setNumbers(updatedNumbers);
    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0); // Recalculer la somme
    setSum(sum ? sum.toFixed(2) : null)
    const avg = updatedNumbers.length > 0 ? sum / updatedNumbers.length : null; // Recalculer la moyenne
    setAverage(avg ? avg.toFixed(2) : null); // Fixer le nombre de décimales à 2 et mettre à jour le state de la moyenne
    const resultCube = sum / Cube; // Calculer le débit par rapport au cubage
    setResultCube(resultCube ? resultCube.toFixed(1) : null)
  };
  const handleReset = () => {
    setNumbers([]);
    setAverage('');
    setSum('');
    setResultCube('')
  };

  return (
    <div>
      <h2>Calcul de filtre</h2>
      {resultCube  && (
        <div>
          <p>Valeurs</p>
          <button onClick={() => handleReset()}>Reset</button>
          </div>
         )}
      <ul> 
        {numbers.map((number, index) => (
          <li key={index}>
            <p style={{ fontWeight: 'bold' }}>{number} <button onClick={() => handleDelete(index)}>Supprimer</button></p>
          </li>
        ))}

      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Entrez les vitesses en m3 séparés par des + :
            <input
              type="text"
              name='inputValue'
              value={inputValue}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
           Cubage de la pièce : 
            <input
              type="number"
              name="Cube"
              value={Cube}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Calculer</button>
      </form>
      {average && (
        <div>
          <p>La moyenne est :{average}</p>
          <p>La somme est : {sum}</p>
          <p>le TRH est de : {resultCube} Vol/h </p>
        </div>
      )}
    </div>
  );
}

export default TRHPage;