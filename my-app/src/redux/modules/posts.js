import axios from 'axios'


const GET_POSTS = 'posts/GET_POSTS'

const defaultState = {
   posts: []
}

//reducer
export default (state = defaultState, { type, payload }) => {
   switch (type) {
      case GET_POSTS: {
         return { ...state, posts: payload }
      }
   }
}



//action
export const getPosts = () => async (dispatch) => {
   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
   dispatch({ type: GET_POSTS, payload: response.data })
}