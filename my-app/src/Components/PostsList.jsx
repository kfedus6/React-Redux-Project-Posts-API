import React from 'react'
import PostItem from './PostItem';

const PostsList = ({ posts }) => {
   return (
      <div>
         {posts.map(item => {
            return <PostItem post={item} key={item.id} />
         })}
      </div>
   )
}

export default PostsList;