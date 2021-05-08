import { Router } from "express";
import { getAllPosts, createPost } from "../controllers/postControllers.js";

const router = Router();

// @route   GET /api/posts/
// @desc    get all Posts
// @access  Public
router.get("/", getAllPosts);

// @route   POST /api/posts/
// @desc    create a Post
// @access  Public
router.post("/", createPost);

export default router;
