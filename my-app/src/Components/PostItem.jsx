import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost as removePostAction } from '../redux/modules/posts';

const PostItem = ({ post }) => {

   const dispatch = useDispatch();

   const deletePost = (post) => {
      dispatch(removePostAction(post.id))
   }

   return (
      <div className='post__block'>
         <div>
            <strong>{post.id}. {post.title}</strong>
            <div>
               {post.body}
            </div>
         </div>
         <div className='post__remove'>
            <button onClick={() => deletePost(post)} >Видалити</button>
         </div>
      </div >
   )
}

export default PostItem;

