import axios from "axios";

class APIList {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  GetListsIDAndTitle() {
    return this.api
      .get(`api/v1/lists`)
      .then((response) => {
        console.log(response);
        return response.data.lists;
      })
      .catch((error) => console.warn(error));
  }

  CreateList(title) {
    return this.api
      .post(`api/v1/list`, { title: title })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => console.warn(error));
  }

  RemoveList(listID) {
    return this.api
      .delete(`api/v1/list/${listID}`)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.warn(error));
  }
}

export default APIList;
