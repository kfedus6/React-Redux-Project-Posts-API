import axios from 'axios'

const GET_POSTS = 'posts/GET_POSTS'
const CREATE_POST = 'posts/CREATE_POST'

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
      case CREATE_POST: {
         return { ...state, posts: [...state.posts, payload] }
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


//action create post
export const createPost = (title, body) => {
   return async (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: 1,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((data) => dispatch({ type: CREATE_POST, payload: data }));
   }
}
