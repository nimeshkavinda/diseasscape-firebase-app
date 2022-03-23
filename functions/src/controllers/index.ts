import { createPost, getPosts, updatePost, deletePost } from "./posts";

const controller = {
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
};

export default controller;
