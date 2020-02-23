import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext();

function Child() {
  return (
    <section id='child'>
      <GrandChild />
    </section>
  );
}

function GrandChild() {
  return (
    <div id='grand-child'>
      <Button />
    </div>
  );
}


function Button() {
  const name = useContext(NameContext);

  return (
    <button>{name}</button>
  );
}


function App() {
  const [name, setName] = useState('Testing Name');

  return (
    <NameContext.Provider value={name}>
      <Child />
    </NameContext.Provider>
  );
}

export default App;
