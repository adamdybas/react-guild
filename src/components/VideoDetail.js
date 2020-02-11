import React from 'react';
import ReactPlayer from 'react-player'

class VideoDetail extends React.Component {
  render(){
    if (this.props.item == null) {
      return <div/>
    } else {
      return(
        <div>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${this.props.item.id.videoId}`} playing />
        </div>
      )
    }
  }
}

export default VideoDetail;
