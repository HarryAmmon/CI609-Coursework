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

  Create(listData, callback) {
    const list = new this.model({ title: listData.title });
    list.save((error, document) => callback(error, document));
  }
}

export default ListRepository;
