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
      .catch((error) => console.log(error));
  }
}

export default APIList;
