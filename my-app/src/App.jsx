import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import PostFrom from './Components/PostFrom';
import PostsList from './Components/PostsList';
import { getPosts as getPostsAction } from './redux/modules/posts';
import Loader from './Components/UI/LoaderPosts/Loader';
import SearchPosts from './Components/UI/SearchPosts/SearchPosts';

const App = () => {
   const [search, setSearch] = useState('');

   const dispatch = useDispatch();

   const posts = useSelector(state => state.posts)

   useEffect(() => {
      dispatch(getPostsAction(search))
   }, [search])

   return (
      <div className='app'>
         <PostFrom />
         <SearchPosts search={search} setSearch={setSearch} />
         {posts.loading ? <Loader /> : <PostsList />}
      </div>
   )
}

export default App;

/*
const mapStateTopProps = (state) => {
   return { posts: state.posts }
}
*/
