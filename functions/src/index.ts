import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));

// posts
app.get("/posts", controller.posts.getPosts);
app.post("/posts", controller.posts.createPost);
app.patch("/posts/:id", controller.posts.updatePost);
app.delete("/posts/:id", controller.posts.deletePost);

exports.app = functions.https.onRequest(app);
