import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onParentSubmit(this.state.term);
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  render() {
    return(
      <div className="ui search">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
