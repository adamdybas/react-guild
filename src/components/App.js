import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const resp = await unsplash.get('search/photos', {
      params: { query: term }
    });

    this.setState({images: resp.data.results});
  }

  render() {
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
