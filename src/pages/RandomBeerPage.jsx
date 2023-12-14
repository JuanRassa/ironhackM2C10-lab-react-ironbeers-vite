import { useEffect, useState } from 'react';
import axios from 'axios';

function RandomBeerPage() {
  const [beerData, setBeerData] = useState(null);

  const getRandomBear = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
      setBeerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBear();
  }, []);
  return (
    <>
      <h2>RandomBeerPage</h2>
      {beerData && (
        <div>
          <div>
            <img src={beerData.image_url} alt={beerData.name} />
          </div>
          <div>
            <p>{beerData.name}</p>
            <p>{beerData.attenuation_level}</p>
          </div>
          <div>
            <p>{beerData.tagline}</p>
            <p>{beerData.first_brewed}</p>
          </div>
          <div>
            <p>{beerData.description}</p>
          </div>
          <div>
            <p>{beerData.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomBeerPage;
