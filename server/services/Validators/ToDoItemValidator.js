class ToDoItemValidator {
  validate(data) {
    console.log("data");
    console.log(data);
    const errors = {};
    if (data.title === undefined) {
      errors.title = "Must include a title";
    } else {
      return undefined;
    }
    return errors;
  }
}

export default ToDoItemValidator;
