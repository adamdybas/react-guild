import React from 'react';
import ReactPlayer from 'react-player'

const VideoDetail = ({ item }) => {
  if (!item) {
    return <div/>
  }
  return(
    <div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} playing />
    </div>
  )
}

export default VideoDetail;
