import React from 'react';
import { connect } from 'react-redux';
import { removePost as removePostAction } from '../redux/modules/posts';

const PostItem = ({ posts, removePost, post, }) => {

   const deletePost = (post) => {
      let newPosts = posts.filter(p => p.id !== post.id)
      removePost(newPosts)
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

export default connect(
   ({ posts }) => ({ posts: posts.posts }),
   { removePost: removePostAction }
)(PostItem);