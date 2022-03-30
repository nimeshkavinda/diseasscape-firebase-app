import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));

// users
app.post("/users", controller.users.createUser);
app.get("/users", controller.users.getUsers);
app.get("/users/:uid", controller.users.getUserByUid);
app.patch("/users/:uid", controller.users.updateUser);

// patients
app.patch("/patients/:uid", controller.patients.createPatient);
app.get("/patients", controller.patients.getPatients);

// posts
app.get("/posts", controller.posts.getPosts);
app.post("/posts", controller.posts.createPost);
app.patch("/posts/:id", controller.posts.updatePost);
app.delete("/posts/:id", controller.posts.deletePost);

// events
app.post("/events", controller.events.createEvent);
app.get("/events", controller.events.getEvents);

exports.app = functions.https.onRequest(app);
