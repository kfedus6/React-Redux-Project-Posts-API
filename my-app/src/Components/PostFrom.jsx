import React, { useState } from 'react';
import { createPost as createPostAction } from '../redux/modules/posts';
import { connect } from 'react-redux';

const PostFrom = ({ createPost }) => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');

   const newPost = (e) => {
      e.preventDefault();
      createPost(title, body);
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

export default connect(
   null,
   {
      createPost: createPostAction
   }
)(PostFrom);