import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const results = await jsonPlaceholder.get('/posts');

  dispatch({ type: "FETCH_POSTS", payload: results.data })
}
