const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("yashaswe");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "Joke1", content: "This is a joke" },
    { id: 2, title: "Joke2", content: "This is another joke" },
    { id: 3, title: "Joke3", content: "This is very another joke" },
    { id: 4, title: "Joke4", content: "This is last joke" },
  ];
  res.json(jokes);
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at me</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
