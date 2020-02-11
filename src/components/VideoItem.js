import React from 'react';

class VideoItem extends React.Component {
  onItemClick = () => {
    this.props.onItemClick(this.props.item);
  }

  render(){
    return(
      <div onClick={this.onItemClick}>
        Title: {this.props.item.snippet.title}
      </div>
    )
  }
}

export default VideoItem;
