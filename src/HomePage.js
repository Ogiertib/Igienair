import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [diameter, setDiameter] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState(null);
  const [sums, setSums] = useState(null);
  const [result, setResult] = useState(null);
  const [results, setResults] = useState([]);
  const [result2, setResult2] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);
  const [avgFilter, setAvgFilter] = useState([]);
  const [avgFilters, setAvgFilters] = useState(null);
  const [numbersWithRange, setNumbersWithRange] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'length') {
      setLength(value);
    } else if (name === 'width') {
      setWidth(value);
    } else if (name === 'diameter') {
      setDiameter(value);
    } else if (name === 'inputValue') {
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNumbers = inputValue.split('+').map(Number);
    const validNumbers = newNumbers.filter(num => !isNaN(num) && num !== 0);
    const updatedNumbers = [...numbers, ...validNumbers];
    setNumbers(updatedNumbers);

    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / updatedNumbers.length;

    let result2;
    if (diameter) {
      const radius = parseFloat(diameter) / 2000;
      result2 = Math.PI * Math.pow(radius, 2);
    } else {
      result2 = (parseFloat(length) / 1000) * (parseFloat(width) / 1000);
    }

    const result = result2 * avg * 3600;

    const lowerBound = avg * 0.8;
    const upperBound = avg * 1.2;
    const updatedNumbersWithRange = updatedNumbers.map(num => ({
      number: num,
      message: (num < lowerBound || num > upperBound) ? `La laminarité n'est pas bonne pour ${num}` : ''
    }));

    setSum(sum.toFixed(2));
    setAverage(avg.toFixed(2));
    setInputValue('');
    setResult2(result2.toFixed(2));
    setResult(result.toFixed(2));
    setNumbersWithRange(updatedNumbersWithRange);
  };

  const handleDelete = (index) => {
    const updatedNumbers = numbers.filter((_, i) => i !== index);
    setNumbers(updatedNumbers);

    const sum = updatedNumbers.reduce((acc, curr) => acc + curr, 0);
    const avg = updatedNumbers.length > 0 ? sum / updatedNumbers.length : 0;
    setSum(sum ? sum.toFixed(2) : null);
    setAverage(avg ? avg.toFixed(2) : null);

    let result2;
    if (diameter) {
      const radius = parseFloat(diameter) / 2000;
      result2 = Math.PI * Math.pow(radius, 2);
    } else {
      result2 = (parseFloat(length) / 1000) * (parseFloat(width) / 1000);
    }

    const result = avg * 3600 * result2;
    setResult(result ? result.toFixed(2) : null);

    const lowerBound = avg * 0.8;
    const upperBound = avg * 1.2;
    const updatedNumbersWithRange = updatedNumbers.map(num => ({
      number: num,
      message: (num < lowerBound || num > upperBound) ? `La laminarité n'est pas bonne pour ${num}` : ''
    }));
    setNumbersWithRange(updatedNumbersWithRange);
  };

  const handleDeleteFilter = (index) => {
    const updatedResults = [...results];
    updatedResults.splice(index, 1);
    setResults(updatedResults);

    const updatedAvgFilter = [...avgFilter];
    updatedAvgFilter.splice(index, 1);
    setAvgFilter(updatedAvgFilter);

    const updatedAvgFilters = updatedAvgFilter.reduce((acc, curr) => acc + curr, 0) / updatedAvgFilter.length;
    setAvgFilters(updatedAvgFilters.toFixed(2));

    const updatedSums = updatedResults.reduce((acc, curr) => acc + curr, 0);
    setSums(updatedSums ? updatedSums.toFixed(2) : null);

    if (updatedAvgFilter.length > 0) {
      const updatedAvgFilters = updatedAvgFilter.reduce((acc, curr) => acc + curr, 0) / updatedAvgFilter.length;
      setAvgFilters(updatedAvgFilters.toFixed(2));
    } else {
      setAvgFilters(null);
    }
  };

  const calculateFilter = () => {
    if (result) {
      const updatedResults = [...results, parseFloat(result)];
      setResults(updatedResults);

      const updatedSums = updatedResults.reduce((acc, curr) => acc + curr, 0);
      setSums(updatedSums.toFixed(2));

      const updatedAvgFilter = [...avgFilter, parseFloat(average)];
      setAvgFilter(updatedAvgFilter);

      const updatedAvgFilters = updatedAvgFilter.reduce((acc, curr) => acc + curr, 0) / updatedAvgFilter.length;
      setAvgFilters(updatedAvgFilters.toFixed(2));
    }
  };

  const DeleteFilter = () => {
    setResults([]);
    setSums(null);
    setAvgFilters(null);
    setAvgFilter([]);
  };

  const handleReset = () => {
    setNumbers([]);
    setAverage(null);
    setSum(null);
    setResult(null);
    setResult2(null);
    setInputValue('');
    setDiameter('');
    setNumbersWithRange([]);
  };


  return (
    <div className="container">
      <h2>Calcul de filtre</h2>
      {sum && (
        <div className="button-group">
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
        {sum && (
        <table className="numbers-table">
          <thead>
            <tr>
              <th>Point n°</th>
              <th>Valeur</th>
              <th>Action</th>
            </tr>
          </thead>
        
          <tbody>
            {numbersWithRange.map((item, index) => (
              <tr key={index} className="number-item">
                <td>{index + 1}</td>
                <td>{item.number}</td>
                <td>
                  <button onClick={() => handleDelete(index)} className="delete-button">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-group">
          <div className="input-label">
            <p>Si Filtre carré ou rectangle</p>
          </div>
          <div className="input-fields">
            <label>
              Longueur (en millimètre):
              <input
                type="number"
                name="length"
                value={length}
                onChange={handleChange}
                disabled={diameter}
              />
            </label>
            <label>
              Largeur (en millimètre):
              <input
                type="number"
                name="width"
                value={width}
                onChange={handleChange}
                disabled={diameter}
              />
            </label>
          </div>
        </div>
        <div className="input-group">
          <div className="input-label">
            <p>Si Filtre rond</p>
          </div>
          <div className="input-fields">
            <label>
              Diamètre (en millimètre):
              <input
                type="number"
                name="diameter"
                value={diameter}
                onChange={handleChange}
                disabled={length || width}
              />
            </label>
          </div>
        </div>
        <div className="input-group">
          <div className="input-label">
            <p>Vitesse d'air</p>
          </div>
          <div className="input-fields">
            <label>
              Entrez les vitesses d'air séparées par des + :
              <input
                type="text"
                name="inputValue"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="calculate-button">Calculer</button>
      </form>
      <div className="result-section">
        {result && (
          <p>La vitesse d'air est: {result} mètres^3/h</p>
        )}
        {result2 && (
          <div>
            <p>Le filtre fait : {result2} m²</p>
            <p>La moyenne est : {average}</p>
            <p>Laminarité doit être comprise entre {(average * 0.8).toFixed(2)} et {(average * 1.2).toFixed(2)}</p>
          </div>
        )}
           
      </div>
      {average && (
        <div className="average-section">
          <div>
            <p>La moyenne est : {avgFilters}</p>
            <p>Laminarité doit être comprise entre {(avgFilters * 0.8).toFixed(2)} et {(avgFilters * 1.2).toFixed(2)}</p>
            <p>Somme des vitesses d'air : {sums} m³/h</p>
          </div>
          <div className="button-group">
            <button onClick={calculateFilter} className="save-button">Enregistrer le filtre</button>
            {sums && <button onClick={DeleteFilter} className="reset-filters-button">Reset des filtres</button>}
            <table className="results-table">
              <thead>
                <tr>
                  <th>Filtre</th>
                  <th>Vitesse</th>
                  <th>Moyenne</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((resultFilter, index) => (
                  <tr key={index} className="result-item">
                    <td>Filtre {index + 1}</td>
                    <td>{resultFilter} mètres^3/h</td>
                    <td className="average-value">{avgFilter[index]} m/s</td>
                    <td>
                      <button onClick={() => handleDeleteFilter(index)} className="delete-button">Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         
          </div>  
        </div>
      )}
    </div>
  );
}

export default HomePage;

