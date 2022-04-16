import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostFrom from './Components/PostFrom';
import PostsList from './Components/PostsList';
import { getPosts as getPostsAction } from './redux/modules/posts';
import Loader from './Components/UI/Loader';

const App = () => {

   const dispatch = useDispatch();

   const state = useSelector(state => state.posts)

   useEffect(() => {
      dispatch(getPostsAction())
   }, [])

   return (
      <div className='app'>
         <PostFrom />
         {state.loading ? <Loader /> : <PostsList />}
      </div>
   )
}

export default App;

/*
const mapStateTopProps = (state) => {
   return { posts: state.posts }
}
*/
