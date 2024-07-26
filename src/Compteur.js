import React from 'react';

function Compteur({ compteur, onClickAdd, onClickSubtract }) {
    return (
      <div>
        <h2>Compteur: {compteur}</h2>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSubtract}>-</button>
      </div>
    );
  }
  
  export default Compteur;