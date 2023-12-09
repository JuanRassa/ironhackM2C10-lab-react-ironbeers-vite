import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <div className='homeCard'>
        <h2>All Beers</h2>
        <img src={beers} alt='Beers' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore amet.
          Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
        </p>
      </div>
      <div className='homeCard'>
        <h2>Random Beer</h2>
        <img src={randomBeer} alt='Beers' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore amet.
          Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
        </p>
      </div>
      <div className='homeCard'>
        <h2>New Beer</h2>
        <img src={newBeer} alt='Beers' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis velit optio et error quod obcaecati corporis iusto, inventore amet.
          Ex ipsam reiciendis vero delectus veniam tenetur praesentium, fuga maiores!
        </p>
      </div>
    </>
  );
}

export default HomePage;
