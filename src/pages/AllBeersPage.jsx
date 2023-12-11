import { useState, useEffect } from 'react';
import LoaderBeer from '../assets/loader-beer.gif';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  const getAllBeers = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setAllBeers(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(allBeers);

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <>
      <h2 className='pageTitle'>See All Beers</h2>
      <div className='allBeers_container'>
        {allBeers.length === 0 && <img src={LoaderBeer} alt='Loader Beer' />}
        {allBeers.length > 0 && (
          <>
            {allBeers.map(beer => (
              <Link key={beer._id} to={`/beers/${beer._id}`} className='beerCard'>
                <div className='beerCard_imgCont'>
                  <img src={beer.image_url} alt='' />
                </div>
                <div className='beerCard_infoCont'>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default AllBeersPage;
