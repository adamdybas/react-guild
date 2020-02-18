import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0);

  const onClick = (actionName) => {
    if (actionName === 'increase') {
      setCount(count+1);
    } else if (actionName === 'decrease') {
      setCount(count-1);
    } else {
      setCount(0);
    }
  };

  const buttons = ['increase', 'decrease', 'reset'].map((name) => {
    return <button onClick={() => onClick(name)}>{name}</button>
  });

  return (
    <div>
      <h1>{count}</h1>
      {buttons}
    </div>
  );
}

export default App;
