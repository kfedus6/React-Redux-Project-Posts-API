import axios from 'axios'

const GET_POSTS = 'posts/GET_POSTS';
const GET_POSTS_SUCCES = 'posts/GET_POSTS_SUCCES';
const GET_POSTS_ERROR = 'posts/GET_POSTS_ERROR';
const CREATE_POST = 'posts/CREATE_POST';
const REMOVE_POST = 'posts/REMOVE_POST';
const SEARCH_POST = 'posts/SEARCH_POST';

const defaultState = {
   posts: [],
   loading: false,
   error: null,
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
         return { ...state, posts: state.posts.filter(p => p.id !== payload) }
      }
      case SEARCH_POST: {
         state.loading = false;
         return { ...state, posts: state.posts.filter(p => p.title === payload) }
      }
      default: {
         return state
      }
   }
}


//action
export const getPosts = (search) => async (dispatch) => {
   dispatch({ type: GET_POSTS, payload: null })
   if (search) {
      dispatch({ type: SEARCH_POST, payload: search })
   } else {
      try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
         dispatch({ type: GET_POSTS_SUCCES, payload: response.data })
      } catch (e) {
         dispatch({ type: GET_POSTS_ERROR, payload: "Произошла ошибка" })
      }
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
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
   })
   dispatch({ type: REMOVE_POST, payload: id })
}
/* 
export const searchPost = (search) => (dispatch) => {
   dispatch({ type: SEARCH_POST, payload: search })
} */