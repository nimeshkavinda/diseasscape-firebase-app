import * as functions from "firebase-functions";
import * as express from "express";
import controller from "./controllers";

const app = express();

app.get("/", (req, res) => res.status(200).send("Hello world"));
app.post("/posts", controller.posts.createPost);

exports.app = functions.https.onRequest(app);
