import React from 'react';

const PostItem = (props) => {
   return (
      <div className='post__block'>
         <div>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
         </div>
         <div className='post__remove'>
            <button>Видалити</button>
         </div>
      </div>
   )
}

export default PostItem;