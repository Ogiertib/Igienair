import React, { useState } from 'react';

function HomePage() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [speed, setSpeed] = useState('');
  const [sum, setSum] = useState('');
  const [sums, setSums] = useState([]);
  const [resultFilter, setResultFilter] = useState([]);
  const [result, setResult] = useState('');
  const [results, setResults] = useState([]);
  const [result2, setResult2] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState('');
  const [avgFilter, setAvgFilter] = useState([]); //  stocker les moyennes des filtres
  const [avgFilters, setAvgFilters] = useState([]); 
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
    const newNumbers = inputValue.split('+').map(Number);
    const validNumbers = newNumbers.filter(num => num !== 0);
    const updatedNumbers = [...numbers, ...validNumbers];
    setNumbers(updatedNumbers);
    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
    setSum(sum ? sum.toFixed(2) : null);
    const avg = sum / updatedNumbers.length;
    setAverage(avg.toFixed(2));
    setInputValue('');
    const result2 = (parseFloat(length) / 1000 * parseFloat(width) / 1000);
    setResult2(result2 ? result2.toFixed(2) : null);
    const result = ((result2 * parseFloat(avg) * 3600));
    setResult(result ? result.toFixed(2) : null);
  };

  const handleDelete = (index) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index);
    setNumbers(updatedNumbers);
    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
    setSum(sum ? sum.toFixed(2) : null);
    const avg = updatedNumbers.length > 0 ? sum / updatedNumbers.length : null;
    setAverage(avg ? avg.toFixed(2) : null);
    const result = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
    setResult(result ? result.toFixed(2) : null);
  };

  const handleDeleteFilter = (index) => {
    const updatedResults = [...results];
    updatedResults.splice(index, 1);
    setResults(updatedResults);
    const updatedAvgFilter = [...avgFilter];
    updatedAvgFilter.splice(index, 1); // Supprimer la moyenne associée au filtre
    setAvgFilter(updatedAvgFilter);
    const updatedSums = updatedResults.reduce((acc, curr) => acc + curr, 0);
    setSums(updatedSums ? updatedSums.toFixed(2) : null);
    setResultFilter([]);
    
  };

  const calculateFilter = () => {
    const updatedResults = [...results, parseFloat(result)];
    setResults(updatedResults);
    const updatedSums = updatedResults.reduce((acc, curr) => acc + curr, 0);
    setSums(updatedSums ? updatedSums.toFixed(2) : null);
    const updatedAvgFilter = [...avgFilter, parseFloat(average)]; // Ajouter la moyenne du filtre
    const updatedAvgFilters = updatedAvgFilter.reduce((acc, curr) => acc + curr, 0) / updatedAvgFilter.length;
    setAvgFilters(updatedAvgFilters); // Calculer et mettre à jour la moyenne des vitesses des filtres
    setAvgFilter(updatedAvgFilter);
    setResultFilter([]);
  };
  const DeleteFilter = () => {
    setResult('');
    setResults([])
    setSums('')
    setAvgFilters('')
    setAvgFilter('')
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
      {sum && (
        <div>
          <button onClick={handleReset}>Reset</button>
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
            Longueur (en millimètre):
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
            Largeur (en millimètre):
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
            Entrez les vitesses d'air séparées par des + :
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
        {result && (
          <p>La vitesse d'air est: {result} mètres^3/h</p>
        )}
        {result2 && (
          <p>Le filtre fait : {result2} m2</p>
        )}
      </div>
      {average && (
        <div>
          <div>
            <p>La moyenne est :{average}</p>
            <p>La somme est : {sum}</p>
          </div>
          <div>
            <button onClick={calculateFilter}>Enregistrer le filtre</button>
            {sums && <button onClick={DeleteFilter}>Reset des filtres</button>}
            <ul>
              {results.map((resultFilter, index) => (
              <li key={index}>
                <p style={{ fontWeight: 'bold' }}>
                  Filtre {index + 1} : {resultFilter} mètres^3/h
                  {' '}
                  <span style={{ fontStyle: 'italic' }}>
                      (Vitesse moyenne : {avgFilter[index]} m/s)
                  </span>
                  <button onClick={() => handleDeleteFilter(index)}>Supprimer</button>
                </p>
              </li>
              ))}
            </ul>
            {sums && <div><p>Moyenne des vitesses d'air : {avgFilters} mètres^3/h</p>
              <p>Somme des vitesses d'air : {sums}</p>
            </div>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
