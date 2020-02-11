import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = (props) => {
  const onItemClick = (item) => {
    props.onItemClick(item);
  }

  const items = props.items.map(item =>{
    return (
      <VideoItem
        key={item.id.videoId}
        item={item}
        onItemClick={onItemClick}
      />
    )
  });

  return(
    <div>
      {items}
    </div>
  )
}

export default VideoList;
