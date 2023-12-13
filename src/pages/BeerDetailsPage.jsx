import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

useParams;

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beerData, setBeerData] = useState(null);
  console.log('beerData', beerData);

  const getBeerById = async id => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      setBeerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeerById(beerId);
  }, [beerId]);

  return (
    <>
      <h2>BeerDetailsPage</h2>
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

export default BeerDetailsPage;
