import React, { useState } from 'react';

const App = () => {
  const [ state, setState ] = useState({city: '', country: ''});

  const onCityChange = (event) => {
    setState({ ...state, city: event.target.value})
  };

  const onCountryChange = (event) => {
    setState({ ...state, country: event.target.value})
  };

  return (
    <form>
      <input type='text' placeholder='city' value={state.city} onChange={onCityChange}/>
      <input type='text' placeholder='Country' value={state.country} onChange={onCountryChange}/>
      You live in {state.city}, {state.country}
    </form>
  );
}

export default App;
