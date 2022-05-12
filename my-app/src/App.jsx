import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostFrom from './Components/PostFrom';
import PostsList from './Components/PostsList';
import { getPosts as getPostsAction } from './redux/modules/posts';
import Loader from './Components/UI/LoaderPosts/Loader';

const App = () => {

   const dispatch = useDispatch();

   const posts = useSelector(state => state.posts)

   useEffect(() => {
      dispatch(getPostsAction())
   }, [])

   return (
      <div className='app'>
         <PostFrom />
         {posts.loading ? <Loader /> : posts.remove ? <h1>Видиляється пост...</h1> : posts.error ? <h1>{posts.error}</h1> : <PostsList />}
      </div>
   )
}

export default App;

/*
const mapStateTopProps = (state) => {
   return { posts: state.posts }
}
*/
