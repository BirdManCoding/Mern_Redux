import { Router } from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
} from "../controllers/postControllers.js";

const router = Router();

// @route   GET /api/posts/
// @desc    get all Posts
// @access  Public
router.get("/", getAllPosts);

// @route   POST /api/posts/
// @desc    create a Post
// @access  Public
router.post("/", createPost);

// @route   PATCH /api/posts/:id
// @desc    update a post
// @access  Public
router.patch("/:id", updatePost);

export default router;
