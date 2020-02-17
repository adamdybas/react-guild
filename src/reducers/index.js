import { combineReducers } from 'redux';

const songListReducer = () => {
  return [
    { title: 'My little pony', duration: '2:35' },
    { title: 'Dzyn dzyn', duration: '4:15' },
    { title: 'Ulica sezamkowa', duration: '1:05' },
    { title: 'Ona temu winna', duration: '2:35' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer
});
