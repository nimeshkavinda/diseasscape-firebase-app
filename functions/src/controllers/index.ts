import { createUser, getUserByUid, getUsers } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";

const controller = {
  users: { createUser, getUserByUid, getUsers },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
};

export default controller;
