import { createUser } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";

const controller = {
  users: { createUser },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
};

export default controller;
