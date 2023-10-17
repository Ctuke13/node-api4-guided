const express = require("express");
const server = express();

server.use(express.json());

const port = process.env.PORT || 9000;

server.get("/hello", (req, res) => {
  res.json("hello, there");
});

server.use("*", (req, res) => {
  res.json({ message: "API is UP!" });
});

server.listen(port, () => {
  console.log("\n*** Server Running on http://localhost:9000 ***\n");
});
