import React, { useState } from 'react';

function HomePage() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState(null);
  const [sums, setSums] = useState(null);
  const [resultFilter, setResultFilter] = useState([]);
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
    const result2 = (parseFloat(length) / 1000 * parseFloat(width) / 1000);
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
    const result = avg * 3600 * (parseFloat(length) / 1000) * (parseFloat(width) / 1000);
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
    const updatedResults = results.filter((_, i) => i !== index);
    setResults(updatedResults);

    const updatedAvgFilter = avgFilter.filter((_, i) => i !== index);
    setAvgFilter(updatedAvgFilter);

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
    setNumbersWithRange([]);
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
        {numbersWithRange.map((item, index) => (
          <li key={index}>
            <p style={{ fontWeight: 'bold' }}>
              {item.number}
              <button onClick={() => handleDelete(index)}>Supprimer</button>
            </p>
            {item.message && <p style={{ color: 'red' }}>{item.message}</p>}
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
              name="inputValue"
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
            <p>La moyenne est : {average}</p>
            <p>Laminarité doit etre comprise entre {(average * 0.8).toFixed(2)} et {(average * 1.2).toFixed(2)}</p>
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
            {sums && (
              <div>
                <p>Moyenne des vitesses d'air : {avgFilters} m/s</p>
                <p>Somme des vitesses d'air : {sums} m³/h</p>
              </div>
            )}
          </div>  
        </div>
      )}
    </div>
  );
}

export default HomePage;
