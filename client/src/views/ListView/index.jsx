import React, { useEffect, useState } from "react";
import ListTitle from "../../components/ListTitle";
import ToDoForm from "../../components/ToDoForm";
import { useParams } from "react-router-dom";
import APIList from "../../services/APIList";

const ListView = () => {
  let { id } = useParams();
  const [listTitle, setListTitle] = useState("Reminders");
  useEffect(() => {
    const api = new APIList("http://localhost:5000");
    api.GetListsIDAndTitle().then((response) => {
      let name = response.filter((x) => x._id === id);
      setListTitle(name[0].title);
    });
  }, [id]);
  return (
    <>
      <ListTitle name={listTitle} />
      <ToDoForm listID={id} />
    </>
  );
};

export default ListView;
