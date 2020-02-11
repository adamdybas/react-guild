import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({ items, onItemClick}) => {
  const renderedItems = items.map(item =>{
    return (
      <VideoItem
        key={item.id.videoId}
        item={item}
        onItemClick={onItemClick}
      />
    )
  });

  return(
    <div className='ui middle aligned list'>
      {renderedItems}
    </div>
  )
}

export default VideoList;
