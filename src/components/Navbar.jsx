import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/beers'>
        <button>See All Beers</button>
      </NavLink>
      <NavLink to='/random-beer'>
        <button>See a Random Beer</button>
      </NavLink>
      <NavLink to='/new-beer'>
        <button>Create a New Beer</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
