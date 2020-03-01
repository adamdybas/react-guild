import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderList() {
    if( this.props.posts.length > 0 ) {
      return(
        this.props.posts.map((post) => {
          return(<div>{post.title}</div>)
        })
      )
    } else {
      return(<div> NONE </div>)
    }
  }

  render() {
    return(
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapsStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapsStateToProps, { fetchPosts })(PostList);
