import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { H2 } from "../../components/Typography";
import APIList from "../../services/APIList";
import ToDoAPI from "../../services/APIToDo";

const AddItem = () => {
  const api = new ToDoAPI("http://localhost:5000");
  const [lists, setLists] = useState([]);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let listID = event.target[0].value;
    const data = {
      title: event.target[1].value,
      note: event.target[2].value,
      completed: false,
    };
    api
      .PostToDo(listID, data)
      .then((res) => {
        console.log("post successful");
        history.push(`/${listID}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const listAPI = new APIList("http://localhost:5000");
    listAPI.GetListsIDAndTitle().then((response) => {
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
      <H2>Add List</H2>
      <form
        onSubmit={(event) => {
          console.log("list submit");
          event.preventDefault();
          console.log(event.target[0].value);
        }}
        id="addListForm"
      >
        <TextInput title={"List Title"} required />
        <button type="submit">Add List</button>
      </form>
    </>
  );
};

export default AddItem;
