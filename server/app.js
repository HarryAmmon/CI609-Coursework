const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

import ToDoItemValidator from "./Validators/ToDoItemValidator";
import ItemRepository from "./Repository/ItemRepository";
import ListRepository from "./Repository/ListRepository";

// import ToDoItem from "./Models/ToDoItem";
import List from "./Models/Lists";
import makeExampleList, {
  createItemInList,
  findItemAndDelete,
  findItemAndDelete2,
  findItemAndUpdateCompleted,
  findItemByID,
  getAllItemsInList,
  getAllListIDS,
} from "./Repository/SubDocumentsPractice";
import isValidID from "./Validators/IDValidator";

const app = express();
const jsonParser = bodyParser.json();

const itemValidator = new ToDoItemValidator();

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
    const bodyErrors = itemValidator.validate(request.body);
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
    if (!isValidID(request.params.id) || !isValidID(request.body.itemID)) {
      response.status(400).send("Invalid ID");
    } else {
      console.log(request.body);
      ItemRepo.Update(
        request.params.id,
        request.body.itemID,
        { completed: request.body.complete },
        (error, value) => {
          console.log(value);
          if (error) {
            response.status(500).status("Database error");
          } else if (value.nModified >= 0) {
            console.log("UPDATE successful");
            response.status(200).send();
          } else {
            response.status(404).send("Not found");
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

  // app.get("/api/v1/list:id", jsonParser, (req, res) => {
  //   console.log("Received GET request");
  //   ListRepository.Read(req.params.id, (error, response) => {
  //     if (errors) {
  //       console.log("server error");
  //       res.status(500).send("Database error");
  //     } else {
  //       console.log(response);
  //       res.status(200).send(response);
  //     }
  //   });
  // });

  // app.post("/api/v1/lists", jsonParser, (req, res) => {
  //   console.log("Received POST request", Date.now());
  //   // const errors = itemValidator.validate(req.body);
  //   // if (errors) {
  //   // res.status(400).send(`validation errors: ${JSON.stringify(errors)}`);
  //   // }
  //   ListRepository.Create(
  //     {
  //       title: "anotherOne",
  //       items: [
  //         {
  //           title: "item1",
  //           completed: false,
  //           note: "A test note",
  //         },
  //       ],
  //     },
  //     (error, value) => {
  //       if (error) {
  //         res.status(500).send("Database error");
  //       } else {
  //         res.status(201).send(value);
  //       }
  //     }
  //   );
  // });
});

app.listen(PORT, () => {
  console.log(`Script running on port ${PORT}`, Date.now());
});

// makeExampleList();

//findItemByID("5fca9f49f5ed1c4b513ae385");

// findItemAndUpdateCompleted(
//   "5fcaa748926d8c4f409e613f",
//   "5fcb6aa7ad158f68b7f87468",
//   true
// );

// findItemAndDelete("5fcaa534935c2f4e76f6bfa1", "5fcaa748926d8c4f409e6142");

//getAllListIDS();

// getAllItemsInList("5fca9db929555f4acda0e50f");

// createItemInList("5fcaa748926d8c4f409e613f", {
//   title: "Practice Title",
//   note: "Practice note",
// });
