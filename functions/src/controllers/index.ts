import { createUser, getUserByUid } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";

const controller = {
  users: { createUser, getUserByUid },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
};

export default controller;
