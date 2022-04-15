import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost as createPostAction } from '../redux/modules/posts';

const PostFrom = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');

   const dispatch = useDispatch();

   const newPost = (e) => {
      e.preventDefault();
      dispatch(createPostAction(title, body));
   }

   return (
      <form>
         <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className='create__post'
         />
         <input
            onChange={(e) => setBody(e.target.value)}
            type="text"
            className='create__post'
         />
         <button onClick={newPost}>Создать пост</button>
      </form>
   )
}

export default PostFrom;