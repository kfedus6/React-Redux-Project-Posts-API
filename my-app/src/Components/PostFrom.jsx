import React from 'react';

const PostFrom = () => {
   return (
      <form>
         <input
            type="text"
            className='create__post'
         />
         <input
            type="text"
            className='create__post'
         />
         <button>Создать пост</button>
      </form>
   )
}

export default PostFrom;