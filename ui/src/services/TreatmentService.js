import HttpService, { strapiUrl } from "./HttpService";

class TreatmentService {
  constructor() {
    this.BASE_URL = strapiUrl;
    this.GET_SERVICES = `${this.BASE_URL}/services`;
  }

  getServices() {
    return HttpService.get(this.GET_SERVICES)

      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("FROM ./TreatmentServices.ts", err));
  }

  getService(id) {
    return HttpService.get(`${this.GET_SERVICES}/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => new Error("FROM ./TreatmentServices.ts"));
  }
}

export default new TreatmentService();
