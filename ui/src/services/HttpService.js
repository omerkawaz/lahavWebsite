import axios from "axios";

export const strapiUrl =
  process.env.REACT_APP_API_URL === "production"
    ? "https://lahavstendel.co.il/api"
    : "http://localhost:1337";

export const imageUrl =
  process.env.REACT_APP_API_URL === "production"
    ? "https://lahavstendel.co.il/api/"
    : "http://localhost:1337/";

class HttpService {
  constructor() {
    const service = axios.create();
    this.service = service;
  }

  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args);
  }

  put(...args) {
    return this.service.put(...args);
  }

  patch(...args) {
    return this.service.patch(...args);
  }

  delete(...args) {
    return this.service.delete(...args);
  }
}

export default new HttpService();
