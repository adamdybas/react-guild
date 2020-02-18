import React, { useState } from 'react';

const App = () => {
  const [ activated, setActivated ] = useState({active: false});

  const onClick = () => {
    setActivated({ active: !activated.active });
  };

  const buttonText = activated.active ? "ON" : "OFF";

  return (
    <button onClick={onClick}>{ buttonText }</button>
  );
}

export default App;
