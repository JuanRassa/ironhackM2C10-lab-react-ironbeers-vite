import { useEffect, useState } from 'react';
import axios from 'axios';

function AddBeerPage() {
  const [newBeerData, setNewBeerData] = useState({
    name: 'Test',
    tagline: 'Test',
    description: 'Test',
    first_brewed: 'Test',
    brewers_tip: 'Test',
    attenuation_level: 20,
    contributed_by: 'Test',
  });
  const putNewBeer = async () => {
    try {
      const response = await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeerData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className='pageTitle'>AddBeerPage</h2>
      <button
        onClick={() => {
          putNewBeer();
        }}>
        ss
      </button>
    </>
  );
}

export default AddBeerPage;
