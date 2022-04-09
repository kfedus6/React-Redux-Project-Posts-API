import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import './App.css';
import { getPosts as getPostsAction } from './redux/modules/posts';

const App = ({ posts, getPosts }) => {

   useEffect(() => {
      console.log('1')
      getPosts()
      console.log(posts)
   }, [])

   return (
      <div>Post</div>
   )
}

export default connect(
   ({ posts }) => ({ posts: posts.posts }),
   { getPosts: getPostsAction }
)(App);
