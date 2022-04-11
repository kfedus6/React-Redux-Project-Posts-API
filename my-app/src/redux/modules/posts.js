import axios from 'axios'

const GET_POSTS = 'posts/GET_POSTS'

const defaultState = {
   posts: []
}

//reducer
export default (state = defaultState, { type, payload }) => {
   switch (type) {
      case GET_POSTS: {
         console.log('reducer get_post')
         return { ...state, posts: payload }
      }
      default: {
         console.log('reducer default')
         return state
      }
   }
}



//action
export const getPosts = () => async (dispatch) => {
   console.log('action getPosts')
   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
   dispatch({ type: GET_POSTS, payload: response.data })
}

