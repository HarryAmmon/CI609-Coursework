const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import ToDoItemValidator from "./Validators/ToDoItemValidator";
import ToDoItemRepository from "./Repository/ToDoItemRepository";

const app = express();
const jsonParser = bodyParser.json();
const itemValidator = new ToDoItemValidator();
const Repository = new ToDoItemRepository();

const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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
  console.log("Database connection established", Date.now());

  app.get("/api/v1/todos", (req, res) => {
    console.log("Received GET request");
    Repository.ReadAll((value) => {
      res.status(200).send({
        todos: value,
      });
    });
  });

  // Create a ToDo
  app.post("/api/v1/todos", jsonParser, (req, res) => {
    console.log("Received POST request", Date.now());
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
    console.log("Received UPDATE request", Date.now());
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

  app.delete("/api/v1/todo/:id", jsonParser, (req, res) => {
    console.log("Received DELETE request", Date.now());
    Repository.Delete(req.params.id, (response) => {
      console.log(response);
      res.status(200).send(response);
    });
  });

  app.listen(PORT, () => {
    console.log(`Script running on port ${PORT}`, Date.now());
  });
});
