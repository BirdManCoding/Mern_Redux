import axios from "axios";

const url = "http://localhost:8080/api/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = data => axios.post(url, data);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
