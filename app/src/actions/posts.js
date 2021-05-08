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
