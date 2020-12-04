const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import ToDoItemValidator from "./Validators/ToDoItemValidator";
import ModelRepository from "./Repository/ModelRepository";

import ToDoItem from "./Models/ToDoItem";

const app = express();
const jsonParser = bodyParser.json();
const itemValidator = new ToDoItemValidator();
const Repository = new ModelRepository(ToDoItem);

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
    Repository.ReadAll((error, value) => {
      if (error) {
        res.status(500).send("Database error");
      } else {
        res.status(200).send({
          todos: value,
        });
      }
    });
  });

  app.post("/api/v1/todos", jsonParser, (req, res) => {
    console.log("Received POST request", Date.now());
    const errors = itemValidator.validate(req.body);
    if (errors) {
      res.status(400).send(`validation errors: ${JSON.stringify(errors)}`);
    } else {
      Repository.Create(req.body, (error, value) => {
        if (error) {
          res.status(500).send("Database error");
        } else {
          res.status(201).send(value);
        }
      });
    }
  });

  app.patch("/api/v1/todo/:id", jsonParser, (req, res) => {
    console.log("Received UPDATE request", Date.now());
    Repository.Update(
      req.params.id,
      { completed: req.body.completed },
      (error, response) => {
        if (error) {
          res.status(500).status("Database error");
        } else if (response.nModified > 1) {
          console.log("UPDATE successful");
          res.status(200).send();
        } else if (response.nModified === 0) {
          res.status(404).send(`ID: ${req.params.id} not found`);
        }
      }
    );
  });

  app.delete("/api/v1/todo/:id", jsonParser, (req, res) => {
    console.log("Received DELETE request", Date.now());
    Repository.Delete(req.params.id, (error, response) => {
      if (error) {
        res.status(500).send("Database error");
      } else if (response.deletedCount > 1) {
        console.log("DELETE successful");
        res.status(200).send();
      } else if (response.deletedCount === 0) {
        res.status(404).send(`ID: ${req.params.id} not found`);
      } else {
        res.status(500).send();
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Script running on port ${PORT}`, Date.now());
});
