import React from 'react';
import { useState } from 'react';


function HomePage() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [speed, setSpeed] = useState('');
  const [sum, setSum] = useState('');
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState('');
  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === 'length') {
      setLength(value);
    } else if (name === 'width') {
      setWidth(value);
    } else if (name === 'speed') {
      setSpeed(value);     
    } else if (name === 'inputValue') {
      setInputValue(value);
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
    e.preventDefault();
    const result2 = (parseFloat(length)/1000 * parseFloat(width)/1000);
    setResult2(result2  ? result2.toFixed(2) : null);
    const result = (( result2 * parseFloat(avg) * 3600 ));
    setResult(result ? result.toFixed(2) : null);
   
  };

  const handleDelete = (index) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index); // Supprimer la valeur à l'index donné
    setNumbers(updatedNumbers);
    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0); // Recalculer la somme
    setSum(sum ? sum.toFixed(2) : null)
    const avg = updatedNumbers.length > 0 ? sum / updatedNumbers.length : null; // Recalculer la moyenne
    setAverage(avg ? avg.toFixed(2) : null); // Fixer le nombre de décimales à 2 et mettre à jour le state de la moyenne
    const result = updatedNumbers.reduce((acc, curr) => acc + curr, 0); // Recalculer la la vitesse d'air
    setResult(result ? result.toFixed(2) : null)
  };
  const handleReset = () => {
    setNumbers([]);
    setAverage('');
    setSum('');
    setResult('');
  };

  return (
    <div>
      <h2>Calcul de filtre</h2>
      {sum  && (
        <div>
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
            Longueur (en milimètre):
            <input
              type="number"
              name="length"
              value={length}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Largeur (en milimètre):
            <input
              type="number"
              name="width"
              value={width}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Entrez les vitesses d'air séparés par des + :
            <input
              type="text"
              name='inputValue'
              value={inputValue}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Calculer</button>
      </form>
      <div>
        {result  && (
          <p>La vitesse d'air est: {result} mètres^3/h</p>
        )}
        {result2  && (
          <p>Le filtre fait : {result2} m2</p>
        )}
      </div>
      {average && (
        <div>
          <p>La moyenne est :{average}</p>
          <p>La somme est : {sum}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;