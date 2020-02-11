import React from 'react';

const VideoItem = ({item, onItemClick}) => {
  return(
    <div className='item' onClick={() => onItemClick(item)}>
      <img className='ui image' src={item.snippet.thumbnails.default.url}/>
      <div className='header'>{item.snippet.title}</div>
      <div className="ui divider"></div>
    </div>
  )
}

export default VideoItem;
