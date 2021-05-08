import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    //userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    creator: { type: String, required: true },
    tags: [String],
    likeCount: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
