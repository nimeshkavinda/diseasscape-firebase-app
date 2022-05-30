import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

app.get("/", (req, res) => res.status(200).send("Hello world"));

// users
app.post("/users", controller.users.createUser);
app.get("/users", controller.users.getUsers);
app.get("/users/:uid", controller.users.getUserByUid);
app.patch("/users/:uid", controller.users.updateUser);

// patients
app.patch("/patients/:uid", controller.patients.createPatient);
app.get("/patients", controller.patients.getPatients);
app.delete("/patients/:uid", controller.patients.deletePatient);

// posts
app.get("/posts", controller.posts.getPosts);
app.post("/posts", controller.posts.createPost);
app.patch("/posts/:id", controller.posts.updatePost);
app.delete("/posts/:id", controller.posts.deletePost);

// events
app.post("/events", controller.events.createEvent);
app.get("/events", controller.events.getEvents);
app.patch("/events/:id", controller.events.updateEvent);

exports.app = functions.https.onRequest(app);
