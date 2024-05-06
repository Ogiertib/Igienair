import React, { useState } from 'react';

function AideMemo() {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };
  const toggleText2 = () => {
    setShowText2(!showText2);
  };
  const toggleText3 = () => {
    setShowText3(!showText3);
  };
  return (
    <div>
      <h2>Aide mémoire</h2>
      <button onClick={toggleText2}>{showText2 ? 'Cacher le texte' : 'Pts par filtre'}</button>
      {showText2 && (
        <div>
          <img src="../public/PtsFiltre" alt="logo512.png" />
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
          <p>Norme hospitalière :  Les résultats des essais sont conformes aux spécifications des normes NF EN ISO 14-644-1 / -3 et NFS 90-351 (2013).</p>
          <p>Sorbonne routine : Les résultats des essais de routine réalisés sur les sorbonnes répondent aux recommandations du guide INRS ED795. </p>
          <p>Sorbonne réception : Les résultats des essais de réception réalisés sur la sorbonne répondent aux recommandations des normes NFX 15-206 et NF EN 14-175.</p>
          <p>PSM :BPP, ISO EN 12469 Critere de performance des PSM,  NF EN 1822-1 pour les filtre HEPA </p>
          <p>Micro éléctronique : Les résultats des essais sont conformes aux spécifications des normes NF EN ISO 14-644</p>
          <p></p>
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
  );
}

export default AideMemo;
