import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/instagram", (req, res) => {
  res.send("instagram page");
});

export default app;
