const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("yashaswe");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at me</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
