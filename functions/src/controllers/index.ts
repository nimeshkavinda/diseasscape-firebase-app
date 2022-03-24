import { createUser, getUserByUid, getUsers } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";
import { createPatient, getPatients } from "./patients";
import { createEvent, getEvents } from "./events";

const controller = {
  users: { createUser, getUserByUid, getUsers },
  patients: { createPatient, getPatients },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
  events: { createEvent, getEvents },
};

export default controller;
