import React from 'react'
import PostItem from './PostItem';

const PostsList = ({ posts }) => {
   return (
      <div>
         {posts.map((item, index) => {
            return <PostItem post={item} key={index} />
         })}
      </div>
   )
}

export default PostsList;