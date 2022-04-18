import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPost } from '../../../redux/modules/posts';
import cl from '../SearchPosts/SearchPosts.module.css';

const SearchPosts = ({ setSearch }) => {


   /* const dispatch = useDispatch();

   const quer = () => {
      dispatch(searchPost(search));
   } */

   return (
      <div>
         <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
      </div>
   )
}

export default SearchPosts;