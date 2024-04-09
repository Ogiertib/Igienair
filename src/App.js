
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ISOPage from './ISOPage';
import TRHPage from './TRHPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <div>
        <nav>
          <ul>
            <h2>Igienair</h2>
            <li>
              <Link to="/">Calcul de filtre</Link>
            </li>
            <li>
              <Link to="/about">Surface salle</Link>
            </li>
            <li>
              <Link to="/ISO">Valeurs cible </Link>
            </li>
            <li>
              <Link to="/TRH">TRH </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />}> </Route>
          <Route path="/ISO" element={<ISOPage />}> </Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/TRH" element={<TRHPage />}></Route>
        </Routes>
      </div>
    </Router>
      </header>
     
    </div>
  );
}

export default App;
