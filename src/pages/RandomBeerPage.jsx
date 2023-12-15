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
      <h2 className='pageTitle'>RandomBeerPage</h2>
      {beerData && (
        <div className='beerDetails'>
          <div className='beerImageCont'>
            <img src={beerData.image_url} alt={beerData.name} />
          </div>
          <div className='name-attenuationCont'>
            <p>{beerData.name}</p>
            <p>{beerData.attenuation_level}</p>
          </div>
          <div className='tagline-firstCont'>
            <p>{beerData.tagline}</p>
            <p>{beerData.first_brewed}</p>
          </div>
          <div className='descriptionCont'>
            <p>{beerData.description}</p>
          </div>
          <div className='contributedCont'>
            <p>{beerData.contributed_by}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomBeerPage;
