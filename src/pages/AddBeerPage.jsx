import { useState } from 'react';
import axios from 'axios';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tip, setBrewers_tip] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');

  const newBeerData = {
    name: name,
    tagline: tagline,
    description: description,
    first_brewed: first_brewed,
    brewers_tip: brewers_tip,
    attenuation_level: attenuation_level,
    contributed_by: contributed_by,
  };
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
      <form
        onSubmit={e => {
          e.preventDefault();
          putNewBeer();
        }}>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            name='name'
            id='name'
          />
        </label>
        <label htmlFor='tagline'>
          Tagline:
          <input
            type='text'
            value={tagline}
            onChange={e => {
              setTagline(e.target.value);
            }}
            name='tagline'
            id='tagline'
          />
        </label>
        <label htmlFor='description'>
          Description:
          <input
            type='text'
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
            name='description'
            id='description'
          />
        </label>
        <label htmlFor='first_brewed'>
          First Brewed:
          <input
            type='text'
            value={first_brewed}
            onChange={e => {
              setFirst_brewed(e.target.value);
            }}
            name='first_brewed'
            id='first_brewed'
          />
        </label>
        <label htmlFor='brewers_tip'>
          Brewers Tip:
          <input
            type='text'
            value={brewers_tip}
            onChange={e => {
              setBrewers_tip(e.target.value);
            }}
            name='brewers_tip'
            id='brewers_tip'
          />
        </label>
        <label htmlFor='attenuation_level'>
          Attenuation Level:
          <input
            type='number'
            value={attenuation_level}
            onChange={e => {
              setAttenuation_level(e.target.value);
            }}
            name='attenuation_level'
            id='attenuation_level'
          />
        </label>
        <label htmlFor='contributed_by'>
          Contributed By:
          <input
            type='text'
            value={contributed_by}
            onChange={e => {
              setContributed_by(e.target.value);
            }}
            name='contributed_by'
            id='contributed_by'
          />
        </label>
        <button type='submit'>Add beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
