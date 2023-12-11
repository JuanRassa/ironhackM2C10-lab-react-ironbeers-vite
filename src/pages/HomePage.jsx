import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <>
      <div className='homeCards_container'>
        <Link to='/beers' className='homeCard'>
          <h2>All Beers</h2>
          <img src={beers} alt='Beers' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore
            amet. Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
          </p>
        </Link>
        <Link to='/random-beer' className='homeCard'>
          <h2>Random Beer</h2>
          <img src={randomBeer} alt='Beers' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore
            amet. Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
          </p>
        </Link>
        <Link to='/new-beer' className='homeCard'>
          <h2>New Beer</h2>
          <img src={newBeer} alt='Beers' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore
            amet. Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
          </p>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
