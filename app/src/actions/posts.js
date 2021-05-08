import * as api from "../api/posts";
import { FETCH_ALL, CREATE } from "./actionTypes";

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
