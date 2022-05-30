import { createUser, getUserByUid, getUsers, updateUser } from "./users";
import { createPost, getPosts, updatePost, deletePost } from "./posts";
import { createPatient, getPatients, deletePatient } from "./patients";
import { createEvent, getEvents, updateEvent } from "./events";

const controller = {
  users: { createUser, getUserByUid, getUsers, updateUser },
  patients: { createPatient, getPatients, deletePatient },
  posts: {
    createPost,
    getPosts,
    updatePost,
    deletePost,
  },
  events: { createEvent, getEvents, updateEvent },
};

export default controller;
