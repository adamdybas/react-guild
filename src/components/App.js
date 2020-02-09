import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.js';

class App extends React.Component {
  state = { resultData: [] };

  async onSearchSubmit(term) {
    const resp = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 967db0e580f206768b2a58782004f5c2052d94be00d661ba7d451aaa66bb7329'
      }
    });

    console.log(resp.data.results);
  }

  render() {
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
