import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return(
    async(dispatch, getState) => {
      const results = await jsonPlaceholder.get('/posts');

      return dispatch({
        type: "FETCH_POSTS",
        payload: results.data
      })
    }
  )
};
