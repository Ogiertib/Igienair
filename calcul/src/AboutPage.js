import React from 'react';
import { useState } from 'react';
import  calculateResult  from './Composant/Ptscomptage.js';

function AboutPage() {
  const [rooms, setRooms] = useState([]);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(-1);
  const [selectedRoomSize, setSelectedRoomSize] = useState('');

  const [Rec, setRec] = useState([]);
  const [length2, setLength2] = useState('');
  const [width2, setWidth2] = useState('');
  const [height2, setHeight2] = useState('');
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [selectedRecIndex, setSelectedRecIndex] = useState(-1);
  const [selectedRecSize, setSelectedRecSize] = useState('');
  const [roomResult, setRoomResult] = useState('');


  const addRoom = () => {
    if (!isNaN(length) && !isNaN(width) && !isNaN(height) && length > 0 && width > 0 && height > 0) {
      const newRoom = {
        length: parseFloat(length),
        width: parseFloat(width),
        height: parseFloat(height),
      };
      setRooms([...rooms, newRoom]);
      setLength('');
      setWidth('');
      setHeight('');
      TotalRoomCube();
    } else {
      alert("Veuillez entrer des valeurs valides pour la longueur, la largeur et la hauteur de la pièce.");
    }
  };


  const addRec = () => {
    if (!isNaN(length2) && !isNaN(width2) && !isNaN(height2) && length2 > 0 && width2 > 0 && height2 > 0) {
      const newRec = {
        length2: parseFloat(length2),
        width2: parseFloat(width2),
        height2: parseFloat(height2),
      };
      setRec([...Rec, newRec]);
      setLength2('');
      setWidth2('');
      setHeight2('');
      TotalRoomCube(); 
      setRoomResult(calculateResult(newRec));
    } else {
      alert("Veuillez entrer des valeurs valides pour la longueur, la largeur et la hauteur de la pièce.");
    }
  };

  const totalRoomSize = rooms.reduce((total, room) => {
    return total + room.length * room.width * room.height;
  }, 0);
  const totalRecSize = Rec.reduce((total, rec) => {
    return total + rec.length2 * rec.width2 * rec.height2;
  }, 0);

  const TotalSurf = () => {
    const totalRoomSurf = rooms.reduce((total, room) => {
      return total + room.length * room.width;
    }, 0);
    const totalRecSurf = Rec.reduce((total, rec) => {
      return total + rec.length2 * rec.width2;
    }, 0);
    const result2 = (totalRoomSurf - totalRecSurf);
    setResult2(result2 ? result2.toFixed(2) : null);
    setRoomResult(calculateResult(result2));
  }

  const TotalRoomCube = () => {
    const totalRoomSize = rooms.reduce((total, room) => {
      return total + room.length * room.width * room.height;
    }, 0);
    const totalRecSize = Rec.reduce((total, rec) => {
      return total + rec.length2 * rec.width2 * rec.height2;
    }, 0);
    const result = (totalRoomSize - totalRecSize);
    setResult(result ? result.toFixed(2) : null);
  }

  const selectRoom = (index) => {
    setSelectedRoomIndex(index);
    setSelectedRoomSize(`${rooms[index].length}m x ${rooms[index].width}m x ${rooms[index].height}m`);
    setRoomResult(calculateResult(rooms[index]));
  };
  const selectRec = (index) => {
    setSelectedRecIndex(index);
    setSelectedRecSize(`${Rec[index].length2}m x ${Rec[index].width2}m x ${Rec[index].height2}m`);
  };
  const handleDeleteRec = (index) => {
    const updatedRec = Rec.filter((_, i) => i !== index); // Supprimer la valeur à l'index donné
    setRec(updatedRec);
  };
  const handleDeleteRoom = (index) => {
    const updatedRoom = rooms.filter((_, i) => i !== index); // Supprimer la valeur à l'index donné
    setRooms(updatedRoom);
  };

  return (
    <div>
      <h2>Calculateur de taille de pièce</h2>
      <div>
        <label>Longueur de la pièce (en mètres) :</label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div>
        <label>Largeur de la pièce (en mètres) :</label>
        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
      </div>
      <div>
        <label>Hauteur de la pièce (en mètres) :</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button onClick={addRoom}>Ajouter un rectangle</button>
      
      <div>
        <label>Longueur de la pièce (en mètres) :</label>
        <input type="number" value={length2} onChange={(e) => setLength2(e.target.value)} />
      </div>
      <div>
        <label>Largeur de la pièce (en mètres) :</label>
        <input type="number" value={width2} onChange={(e) => setWidth2(e.target.value)} />
      </div>
      <div>
        <label>Hauteur de la pièce (en mètres) :</label>
        <input type="number" value={height2} onChange={(e) => setHeight2(e.target.value)} />
      </div>
      <button onClick={addRec}>Supprimer la partie sélectionnée</button>
      
      <h4>Liste des rectangles :</h4>
      <ul>
        {rooms.map((room, index) => (
          <li key={index} onClick={() => selectRoom(index)} style={{ cursor: 'pointer' }}>
            {`Surface
             ${index + 1}: Longueur: ${room.length} m, Largeur: ${room.width} m, Hauteur: ${room.height} m`}
            <button onClick={() => handleDeleteRoom(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <ul>
        {Rec.map((rec, index) => (
          <li key={index} onClick={() => selectRec(index)} style={{ cursor: 'pointer' }}>
            {`Rec ${index + 1}: Longueur: ${rec.length2} m, Largeur: ${rec.width2} m, Hauteur: ${rec.height2} m`}
            <button onClick={() => handleDeleteRec(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <button onClick={TotalRoomCube}>Calcule le cubage</button>
      <h3>Total de la taille des pièces : {result} mètres cubes</h3>
      <button onClick={TotalSurf}>Calcule la surface</button>
      <h3>Total de la surface au sol: {result2} mètres carré  </h3>
      <p>Il faut faire {roomResult} point de comptage</p>
    </div>
  );
}
export default AboutPage;