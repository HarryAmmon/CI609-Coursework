import React, { useEffect } from "react";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { H2 } from "../../components/Typography";

const AddItem = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    console.log(event.target[0].value);
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
