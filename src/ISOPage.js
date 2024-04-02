import React, { useState } from 'react';
import IsoValues from './Composant/IsoValues';

function ParticleCountPage() {
  const [iso, setIso] = useState('');
  const [valuesToShow, setValuesToShow] = useState(null);

  const handleIsoChange = (event) => {
    const selectedIso = event.target.value;
    setIso(selectedIso);
    setValuesToShow(IsoValues[selectedIso]);
  };

  return (
    <div>
      <h2>Choix de l'ISO de la salle et valeurs cibles à atteindre</h2>
      <label>Choisissez l'ISO de la salle :</label>
      <select value={iso} onChange={handleIsoChange}>
        <option value="">Sélectionnez une ISO</option>
        <option value="ISO5">ISO 5</option>
        <option value="ISO7">ISO 7</option>
        <option value="ISO8">ISO 8</option>
        <option value="BPPH">BPPH stérilisation</option>
        <option value="BPFA">BPF classe A</option>
        <option value="BPFB">BPF classe B</option>
        <option value="BPFC">BPF classe C</option>
        <option value="BPFD">BPF classe D</option>
        {/* Ajoutez d'autres options selon vos besoins */}
      </select>
      {valuesToShow && (
        <div>
          <h3>Valeurs cibles pour l'{iso} d'une zone à risque {valuesToShow.zone}</h3>
          <p>
            <ul>Particules :
                <li>{valuesToShow.particule1}</li>
                <li>{valuesToShow.particule2}</li>
                <li>{valuesToShow.particule3}</li>
            </ul> 
          </p>
          <p>Pression : {valuesToShow.pressure}</p>
          <p>Vitesse d'air sous flux : {valuesToShow.flux}</p>
          <p>Taux de brassage : {valuesToShow.TRH}</p>
          <p>Cinétique : {valuesToShow.kinetics} min</p>
          <p>Biocontamination : {valuesToShow.biocontamination}</p>
        </div>
      )}
    </div>
  );
}

export default ParticleCountPage;