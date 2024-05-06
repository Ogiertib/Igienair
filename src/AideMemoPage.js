import React, { useState } from 'react';

function AideMemo() {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  
  const toggleText = () => {
    setShowText(!showText);
  };
  const toggleText2 = () => {
    setShowText2(!showText2);
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
          <p>Pour les plafonds de 2 a 7 filtres = 2pts par filtre</p>
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
          <p>Micro éléctronique : Les résultats des essais sont conformes aux spécifications des normes NF EN ISO 14-644</p>
          <p></p>
        </div>
      )}
    </div>
  );
}

export default AideMemo;
