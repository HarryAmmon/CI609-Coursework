const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import DataValidator from "./Validators/DataValidator";
import ItemRepository from "./Repository/ItemRepository";
import ListRepository from "./Repository/ListRepository";

import List from "./Models/Lists";
import isValidID from "./Validators/IDValidator";

const app = express();
const jsonParser = bodyParser.json();

const validator = new DataValidator();

const ItemRepo = new ItemRepository(List);
const ListRepo = new ListRepository(List);

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

  app.get("/api/v1/todos/:id", jsonParser, (request, response) => {
    console.log("Received GET request ");
    if (!isValidID(request.params.id)) {
      response.status(400).send("Invalid ID");
    } else {
      ItemRepo.ReadAll(request.params.id, (error, value) => {
        if (error) {
          response.status(500).send("Database error");
        } else if (value === undefined) {
          response.status(404).send("List not found");
        } else {
          response.status(200).send({
            todos: value,
          });
        }
      });
    }
  });

  app.post("/api/v1/todos/:id", jsonParser, (request, response) => {
    console.log("Received POST request", Date.now());
    const bodyErrors = validator.requiresTitle(request.body);
    if (bodyErrors) {
      response
        .status(400)
        .send(`validation errors: ${JSON.stringify(bodyErrors)}`);
    } else if (!isValidID(request.params.id)) {
      response.status(400).send("Invalid ID");
    } else {
      ItemRepo.Create(request.params.id, request.body, (error, value) => {
        if (error) {
          response.status(500).send("Database error");
        } else if (value === undefined) {
          response.status(404).send("List not found");
        } else {
          response.status(201).send(value);
        }
      });
    }
  });

  app.patch("/api/v1/todo/:id", jsonParser, (request, response) => {
    console.log("Received UPDATE request", Date.now());
    if (!isValidID(request.params.id)) {
      response.status(400).send("Invalid ID");
    } else {
      console.log(request.body);
      ItemRepo.Update(
        request.params.id,
        request.body.complete,
        (error, result) => {
          if (error) {
            response.status(500).status("Database error");
          } else if (result === undefined) {
            response.status(404).send("Not found");
          } else {
            response.status(200).send();
            console.log("UPDATE successful");
          }
        }
      );
    }
  });

  app.delete("/api/v1/todo/:id", jsonParser, (request, response) => {
    console.log("Received DELETE request", Date.now());
    if (!isValidID(request.params.id)) {
      response.status(404).send("Invalid ID");
    } else {
      ItemRepo.Delete(request.params.id, (error, value) => {
        if (error) {
          response.status(500).send("Database error");
        } else if (value === undefined) {
          response.status(404).send("Not found");
        } else {
          console.log("DELETE successful");
          response.status(200).send();
        }
      });
    }
  });

  app.get("/api/v1/lists", (request, response) => {
    console.log("Received GET Request");
    ListRepo.GetAllLists((error, values) => {
      if (error) {
        console.log("server error");
        response.status(500).send("Database error");
      } else if (response === undefined) {
        response.status(404).send("No lists found");
      } else {
        response.status(200).send({ lists: values });
      }
    });
  });

  app.post("/api/v1/list", jsonParser, (request, response) => {
    console.log("Received POST request");
    const bodyErrors = validator.requiresTitle(request.body);
    if (bodyErrors) {
      response
        .status(400)
        .send(`validation errors: ${JSON.stringify(bodyErrors)}`);
    } else {
      ListRepo.Create(request.body, (error, value) => {
        if (error) {
          response.status(500).send("Database error");
        } else {
          response.status(201).send(value);
        }
      });
    }
  });

  app.listen(PORT, () => {
    console.log(`Script running on port ${PORT}`, Date.now());
  });
});
