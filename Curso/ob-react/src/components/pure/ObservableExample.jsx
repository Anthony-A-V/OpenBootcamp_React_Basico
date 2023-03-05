import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {
  console.log('Suscription to Observable');
  const [number, setNumber] = useState(0);
  const obtainNewNumber = () => {
    getNumbers.subscribe({
      next(newNumber) {
        console.log('New number: ', newNumber);
        setNumber(newNumber);
      },
      error(error) {
        alert(`Something went wrong: ${error}`);
        console.log('Error in observable');
      },
      complete() {
        alert(`Finished width: ${number}`);
        console.log('Done with the observable');
      },
    });
  };

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumber}>Obtain new Numbers</button>
    </div>
  );
};

export default ObservableExample;
