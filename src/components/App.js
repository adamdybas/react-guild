import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar.js';

class App extends React.Component {
  state = { resultData: [] };

  onSearchSubmit = async (term) => {
    const resp = await unsplash.get('search/photos', {
      params: { query: term }
    });

    this.setState({resultData: resp.data.results});
  }

  render() {
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.resultData.length} images
      </div>
    );
  }
}

export default App;
