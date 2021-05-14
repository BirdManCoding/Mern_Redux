import Post from "../models/PostModel.js";
import HttpError from "../models/HttpError.js";
import mongoose from "mongoose";

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

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return next(new HttpError("No post with that id", 404));

  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
  } catch (err) {
    next(new HttpError(err.message));
  }
};
