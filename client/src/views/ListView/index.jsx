import React, { useEffect, useState } from "react";
import ListTitle from "../../components/ListTitle";
import ToDoForm from "../../components/ToDoForm";
import { useParams } from "react-router-dom";
import APIList from "../../services/APIList";

const ListView = ({ lists, setLists }) => {
  let { id } = useParams();
  const [listTitle, setListTitle] = useState("Reminders");

  useEffect(() => {
    const api = new APIList("http://localhost:5000");
    api.GetListsIDAndTitle().then((response) => {
      let name = lists.filter((x) => x._id === id);
      setListTitle(name[0] ? name[0].title : "");
    });
  }, [lists, id]);

  return (
    <>
      <ListTitle
        listID={id}
        name={listTitle}
        lists={lists}
        setLists={setLists}
      />
      <ToDoForm listID={id} />
    </>
  );
};

export default ListView;
