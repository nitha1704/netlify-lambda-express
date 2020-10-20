const express = require("express");
const app = express();
const router = express.Router();

const cors = require("cors");
const serverless = require("serverless-http");

app.use(cors());

const users = [
  { id: 1, name: "puxer", lastname: "maxson" },
  { id: 2, name: "Mary", lastname: "Swan" },
  { id: 3, name: "John", lastname: "Doe" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  const user = {
    id: req.body.id,
    name: req.body.name,
    lastname: req.body.lastname,
  };
  users.push(user);
  res.send(req.body);
});

router.get("/hell", (req, res) => {
  res.send("hell");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
