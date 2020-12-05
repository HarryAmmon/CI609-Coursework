import React, { useEffect, useState } from "react";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { H2 } from "../../components/Typography";
import APIList from "../../services/APIList";
import ToDoAPI from "../../services/APIToDo";

const AddItem = () => {
  const api = new ToDoAPI("http://localhost:5000");

  const handleSubmit = (event) => {
    event.preventDefault();
    let listID = event.target[0].value;
    const data = {
      title: event.target[1].value,
      note: event.target[2].value,
      completed: false,
    };
    console.log(data);
    api
      .PostToDo(listID, data)
      .then((res) => console.log("post successful"))
      .catch((err) => console.log(err));
    console.log(data);
  };

  const [lists, setLists] = useState([]);
  useEffect(() => {
    const listAPI = new APIList("http://localhost:5000");
    listAPI.GetListsIDAndTitle().then((response) => {
      console.log(response);
      setLists(response);
    });
  }, []);
  return (
    <>
      <H2>Add ToDo</H2>
      <form onSubmit={handleSubmit} id="addItemForm">
        <SelectInput options={lists} />
        <TextInput title={"Title"} required />
        <TextInput title={"Note"} />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default AddItem;
