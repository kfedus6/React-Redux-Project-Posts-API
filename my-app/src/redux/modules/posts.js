import axios from 'axios'

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCES = 'posts/GET_POSTS_SUCCES';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';
const CREATE_POST = 'posts/CREATE_POST';
const REMOVE_POST = 'posts/REMOVE_POST';
const SEARCH_POST = 'posts/SEARCH_POST';
const TITLE_REMOVE = 'posts/TITLE_REMOVE';

const defaultState = {
   posts: [],
   loading: false,
   error: null,
   remove: false,
};

//reducer
export default (state = defaultState, { type, payload }) => {
   switch (type) {
      case GET_POSTS: {
         return { ...state, loading: true }
      }
      case GET_POSTS_SUCCES: {
         return { ...state, posts: payload, loading: false }
      }
      case GET_POSTS_ERROR: {
         return { ...state, loading: false, error: payload }
      }
      case CREATE_POST: {
         return { ...state, posts: [...state.posts, payload] }
      }
      case REMOVE_POST: {
         return { ...state, posts: state.posts.filter(p => p.id !== payload), remove: false }
      }
      case TITLE_REMOVE: {
         return { ...state, remove: true }
      }
      default: {
         return state
      }
   }
}


//action
export const getPosts = () => async (dispatch) => {
   dispatch({ type: GET_POSTS })
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setTimeout(() => {
         dispatch({ type: GET_POSTS_SUCCES, payload: response.data })
      }, 2000)
   } catch (err) {
      dispatch({ type: GET_POSTS_ERROR, payload: err.message })
   }
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

export const removePost = (id) => async (dispatch) => {
   dispatch({ type: TITLE_REMOVE, payload: null })
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
   })
   setTimeout(() => {
      dispatch({ type: REMOVE_POST, payload: id })
   }, 2000)
}
