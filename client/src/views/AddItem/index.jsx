import React from "react";
import { useHistory } from "react-router-dom";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { H2 } from "../../components/Typography";
import APIList from "../../services/APIList";
import ToDoAPI from "../../services/APIToDo";
import Styles from "./AddItem.module.scss";
import { P } from "../../components/Typography";

const AddItem = ({ lists, setLists }) => {
  const api = new ToDoAPI("https://ci609api.ha383.brighton.domains");
  const listAPI = new APIList("https://ci609api.ha383.brighton.domains");

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

  return (
    <>
      {lists === undefined ? (
        <P>Failed to load</P>
      ) : (
        <>
          <H2>Add ToDo</H2>
          <form onSubmit={handleSubmit} id="addItemForm">
            <div className={Styles.root}>
              <SelectInput options={lists} />
              <TextInput title={"Title"} required />
              <TextInput title={"Note"} />
              <button type="submit" className={Styles.submitButton}>
                Add Item
              </button>
            </div>
          </form>
          <H2>Add List</H2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              listAPI.CreateList(event.target[0].value).then((response) => {
                setLists([...lists, response]);
                history.push(response._id);
              });
            }}
            id="addListForm"
          >
            <div className={Styles.root}>
              <TextInput title={"List Title"} required />
              <button type="submit" className={Styles.submitButton}>
                Add List
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};
export default AddItem;
