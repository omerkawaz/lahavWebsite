import axios from "axios";

class HttpService {
  public service: any;
  public response: any;
  constructor() {
    const service = axios.create();
    this.service = service;
  }

  get(...args: any) {
    return this.service.get(...args);
  }

  post(...args: any) {
    return this.service.post(...args);
  }

  put(...args: any) {
    return this.service.put(...args);
  }

  patch(...args: any) {
    return this.service.patch(...args);
  }

  delete(...args: any) {
    return this.service.delete(...args);
  }
}

export default new HttpService();
