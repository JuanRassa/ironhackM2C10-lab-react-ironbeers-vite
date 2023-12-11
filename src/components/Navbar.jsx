import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to='/' className='link'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/beers' className='link'>
        <button>See All Beers</button>
      </NavLink>
      <NavLink to='/random-beer' className='link'>
        <button>See a Random Beer</button>
      </NavLink>
      <NavLink to='/new-beer' className='link'>
        <button>Create a New Beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
