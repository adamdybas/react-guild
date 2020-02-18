import React, { useState } from 'react';

const App = () => {
  const [ activated, setActivated ] = useState(false);

  const onClick = () => {
    setActivated(!activated);
  };

  const buttonText = activated ? "ON" : "OFF";

  return (
    <button onClick={onClick}>{ buttonText }</button>
  );
}

export default App;
