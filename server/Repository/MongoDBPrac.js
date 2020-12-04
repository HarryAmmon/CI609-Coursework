const mongoose = require("mongoose");
import ToDoItemRepository from "../Repository/ToDoItemRepository";

const connectToMongo = () => {
  mongoose.connect(
    "mongodb+srv://angryBadger:maker2NINETEEN9offer@todoproject.wjz8y.mongodb.net/ToDoProject?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {});
  const itemRepo = new ToDoItemRepository(db);

  //   itemRepo.Create(
  //     {
  //       title: "Test ToDo1",
  //       completed: false,
  //       note: "Created using the repo class",
  //     },
  //     (value) => {
  //       console.log(value);
  //     }
  //   );

  itemRepo.ReadAll((value) => {
    const firstItem = value[0];

    itemRepo.Update(firstItem._id, { completed: true }, (raw) => {
      console.log(raw);
    });
  });

  //   db.once("open", () => {
  //     console.log("do our thing");

  //     const kittenSchema = new mongoose.Schema({
  //       name: String,
  //     });

  //     const Kitten = mongoose.model("Kitten", kittenSchema);

  //     const silenceTheKitten = new Kitten({ name: "Silence" });
  //     console.log(silenceTheKitten.name);

  //     silenceTheKitten.save((err, silenceTheKitten) => {
  //       if (err) return console.error(err);
  //       console.log(silenceTheKitten.name);
  //     });

  //     Kitten.find((err, kittens) => {
  //       if (err) return console.log(err);
  //       console.log(kittens);
  //     });

  //     const myItem = new ToDoItem({
  //       title: "Second ToDo",
  //       completed: false,
  //       note: "My first note",
  //     });

  //     myItem.save((err, theItem) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("theItem");
  //         console.log(theItem);
  //       }
  //     });
  //   });
};

export default connectToMongo;
