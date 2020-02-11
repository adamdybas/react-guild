import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js'
import VideoDetail from './VideoDetail.js'
import youtube from '../api/youtube.js';

class App extends React.Component {
  state = {
    items: [],
    selectedItem: null
  };

  componentDidMount() {
    this.onChildSubmit('pug');
  }

  onChildSubmit = async (term) => {
    const res = await youtube.get('/search',{
      params: { q: term, part: 'snippet', key: 'AIzaSyC84Jt9wdaPUTK7Wvj-NL9-7C6o3O5rY9o'}
    });

    this.setState({
      items: res.data.items,
      selectedItem: res.data.items[0]
    });
  }

  onItemClick = (item) => {
    this.setState({selectedItem: item});
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onParentSubmit={this.onChildSubmit}/>
        <div className="ui internally celled grid">
          <div className="row">
            <div className="ten wide column">
              <VideoDetail item={this.state.selectedItem} />
            </div>
            <div className="three wide column">
              <VideoList items={this.state.items} onItemClick={this.onItemClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
