import React from 'react'
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostsList = () => {
   const posts = useSelector(state => state.posts);

   return (
      <div>
         {posts.posts.map((item, index) => {
            return <PostItem post={item} key={index} />
         })}
      </div>
   )
}

export default PostsList;