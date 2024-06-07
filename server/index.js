import express from "express";
import cors from "cors";
import db from './config/db.js';

const app = express();
app.use(cors());

db.connect((err) => {
  if (err) {
    console.error("error connecting:", err);
    return;
  }
  console.log("connected as id " + db.threadId);
});

app.get("/", (req, res) => {
  res.send("Like & share FAIZAN");
});

let port= 8080;
app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server", err);
    return;
  }
  console.log("server listening on port " + port);
});