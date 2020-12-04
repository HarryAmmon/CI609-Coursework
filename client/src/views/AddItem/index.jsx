import React, { useEffect } from "react";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { H2 } from "../../components/Typography";
import ToDoAPI from "../../services/APIToDo";

const AddItem = () => {
  const api = new ToDoAPI("http://localhost:5000/");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      list: event.target[0].value,
      title: event.target[1].value,
      note: event.target[2].value,
    };
    api
      .PostToDo(data)
      .then((res) => console.log("post successful"))
      .catch((err) => console.log(err));
    console.log(data);
  };

  useEffect(() => {});
  return (
    <>
      <H2>Add ToDo</H2>
      <form onSubmit={handleSubmit} id="addItemForm">
        <SelectInput
          options={[
            { id: "1", title: "Reminders" },
            { id: "2", title: "More Reminders" },
          ]}
        />
        <TextInput title={"Title"} required />
        <TextInput title={"Note"} />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default AddItem;
