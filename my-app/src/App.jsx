import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostFrom from './Components/PostFrom';
import PostsList from './Components/PostsList';
import { getPosts as getPostsAction } from './redux/modules/posts';

const App = () => {

   const dispatch = useDispatch();

   const loading = useSelector(state => state.posts)
   console.log(loading.loading)

   useEffect(() => {
      dispatch(getPostsAction())
   }, [])

   return (
      <div className='app'>
         {console.log('return')}
         <PostFrom />
         <PostsList />
      </div>
   )
}

export default App;

/*
const mapStateTopProps = (state) => {
   return { posts: state.posts }
}
*/
