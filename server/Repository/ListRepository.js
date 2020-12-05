class ListRepository {
  constructor(model) {
    this.model = model;
  }

  GetAllLists(callback) {
    this.model.find({}, ["id", "title"], (error, response) => {
      if (response === null) {
        callback(error, undefined);
      } else {
        callback(error, response);
      }
    });
  }
}

export default ListRepository;
