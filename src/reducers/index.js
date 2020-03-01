import { combineReducers } from 'redux';

const postsList = (posts = [], action ) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }

  return posts;
};

export default combineReducers({
  posts: postsList
});
