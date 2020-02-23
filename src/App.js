import React, { createContext } from 'react';

const NameContext = createContext();

class Child extends React.Component {
  render() {
    return (
      <section id='child'>
        <GrandChild />
      </section>
    );
  }
}

class GrandChild extends React.Component {
  render() {
    return (
      <div id='grand-child'>
        <Button />
      </div>
    );
  }
}


class Button extends React.Component {
  render() {
    return (
      <NameContext.Consumer>
        {
          name => {
            return (
              <button>{name}</button>
            );
          }
        }
      </NameContext.Consumer>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Testowy' };
  }

  render() {
    return (
      <NameContext.Provider value={this.state.name}>
        <Child />
      </NameContext.Provider>
    );
  }
}

export default App;
