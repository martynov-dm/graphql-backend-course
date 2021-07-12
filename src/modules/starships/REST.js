import { RESTDataSource } from "apollo-datasource-rest";

const url = "https://swapi.co/api/";

export class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = url;
  }

  async getStarships() {
    return this.get("starships/");
  }
}
