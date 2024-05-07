import React, { useState } from 'react';
import NormeValue from './Composant/NormeValue';

function AideMemo() {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [Norme, setNorme] = useState('');
  const [valuesToShow, setValuesToShow] = useState(null);

  const toggleText = () => {
    setShowText(!showText);
  };
  const toggleText2 = () => {
    setShowText2(!showText2);
  };
  const toggleText3 = () => {
    setShowText3(!showText3);
  };
  const handleNormeChange = (event) => {
    const selectedNorme = event.target.value;
    setNorme(selectedNorme);
    setValuesToShow(NormeValue[selectedNorme]);
  };
  return (
    <div>
      <h2>Aide mémoire</h2>
      <button onClick={toggleText2}>{showText2 ? 'Cacher le texte' : 'Pts par filtre'}</button>
      {showText2 && (
        <div>
          <p>Nbr de point par filtre = √(10x surface du filtre)</p>
          <p>Pour les filtre isolés = 4 pts par filtres minimum</p>
          <p>Pour les plafonds de 2 à 7 filtres = 2pts par filtre</p>
          <p>Pour les plafonds de 8 filtres ou plus = 1pts par filtre</p>
          <p></p>
        </div>
      )}
      <button onClick={toggleText}>{showText ? 'Cacher le texte' : 'Norme'}</button>
      {showText && (
        <div>
        <label>Choisissez le type d'equipement/salle  :</label>
        <select value={Norme} onChange={handleNormeChange}>
          <option value="">Sélectionnez le type</option>
          <option value="Hospitalier">Hospitalier</option>
          <option value="Sorbonne1">Sorbonne Routine</option>
          <option value="Sorbonne2">Sorbonne Reception</option>
          <option value="PSM">PSM</option>
          <option value="Etraf">Etraf</option>
          <option value="Micro">Micro electronique</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
       
        {valuesToShow && (
          <div>
            <h3>{Norme} </h3>
            <p>{valuesToShow.text}</p>
        </div>
        )}
        </div>
      )}
      <button onClick={toggleText3}>{showText3 ? 'Cacher le texte' : 'PSM'}</button>
      {showText3 && (
        <div>
          <p>Le débit d'extraction au minimum 30% de celui du soufflage</p>
          <p>Vitesse d'air entrant doit etre superieur a 0.40m/s</p>
          <p>PSM type II Vitesse d'air descendant de 0.35 a 0.55m/s</p>
          <p>PSM type I Vitesse d'air descendant de 0.7 a 1m/s</p>
          <p>Niveau sonore de 65 dB</p>
          <p>classe iso 5 sous flux</p>
        </div>
      )}
    </div>
    

)}
export default AideMemo;
