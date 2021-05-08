import axios from "axios";

const url = "http://localhost:8080/api/posts";

export const fetchPosts = () => axios.get(url);
