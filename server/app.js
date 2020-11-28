const express = require("express");
const bodyParser = require("body-parser");

import db from "../database/db.json";
import ToDoItemValidator from "./services/ToDoItemValidator";

const app = express();
const jsonParser = bodyParser.json();
const itemValidator = new ToDoItemValidator();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// All ToDos
app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    todos: db,
  });
});

// Create a ToDo
app.post("/api/v1/todos", jsonParser, (req, res) => {
  const errors = itemValidator.validate(req.body);
  if (errors) {
    res.status(400).send(`validation errors: ${JSON.stringify(errors)}`);
  } else {
    res.status(200).send("pass");
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
