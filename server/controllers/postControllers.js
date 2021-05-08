import Post from "../models/PostModel.js";
import HttpError from "../models/HttpError.js";

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return next(new HttpError("No posts found", 404));
    }
    res.json(posts);
  } catch (err) {
    next(new HttpError(err.message));
  }
};

export const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    next(new HttpError(err.message, 409));
  }
};
