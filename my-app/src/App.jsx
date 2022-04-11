import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import './App.css';
import PostFrom from './Components/PostFrom';
import PostsList from './Components/PostsList';
import { getPosts as getPostsAction } from './redux/modules/posts';

const App = ({ posts, getPosts }) => {

   useEffect(() => {
      console.log('useEfct')
      getPosts()
   }, [])

   return (
      <div className='app'>
         {console.log('return')}
         <PostFrom />
         <PostsList posts={posts} />
      </div>
   )
}

export default connect(
   ({ posts }) => ({ posts: posts.posts }),
   { getPosts: getPostsAction }
)(App);

/*
const mapStateTopProps = (state) => {
   return { posts: state.posts }
}
*/
