import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeersPage from './pages/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1>IronBeers</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        <Route path='/random-beer' element={<RandomBeersPage />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
