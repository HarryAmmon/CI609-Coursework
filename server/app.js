const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import ToDoItemValidator from "./services/validators/ToDoItemValidator";
import ToDoItemRepository from "./services/Repository/ToDoItemRepository";

const app = express();
const jsonParser = bodyParser.json();
const itemValidator = new ToDoItemValidator();
const Repository = new ToDoItemRepository();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.options("*", cors());

mongoose.connect(
  "mongodb+srv://angryBadger:maker2NINETEEN9offer@todoproject.wjz8y.mongodb.net/ToDoProject?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  app.get("/api/v1/todos", (req, res) => {
    Repository.ReadAll((value) => {
      res.status(200).send({
        todos: value,
      });
    });
  });

  // Create a ToDo
  app.post("/api/v1/todos", jsonParser, (req, res) => {
    const errors = itemValidator.validate(req.body);
    if (errors) {
      res.status(400).send(`validation errors: ${JSON.stringify(errors)}`);
    } else {
      Repository.Create(req.body, (value) => {
        res.status(201).send(value);
      });
    }
  });

  app.patch("/api/v1/todo/:id", jsonParser, (req, res) => {
    Repository.Update(
      req.params.id,
      { completed: req.body.completed },
      (raw) => {
        console.log("success");
        console.log(raw);
        res.status(200).send();
      }
    );
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
