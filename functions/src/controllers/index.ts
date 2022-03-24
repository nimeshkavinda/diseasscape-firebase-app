import { createUser, getUserByUid, getUsers } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";
import { createPatient } from "./patients";

const controller = {
  users: { createUser, getUserByUid, getUsers },
  patients: { createPatient },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
};

export default controller;
