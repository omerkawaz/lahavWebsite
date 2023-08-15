import HttpService from "./HttpService";

class TreatmentService {
  private BASE_URL: string;
  private GET_SERVICES: string;

  constructor() {
    this.BASE_URL = "http://68.183.74.230:1337";
    this.GET_SERVICES = `${this.BASE_URL}/services`;
  }

  getServices() {
    return HttpService.get(this.GET_SERVICES)

      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log("FROM ./TreatmentServices.ts", err));
  }

  getService(id: string | string[]) {
    return HttpService.get(`${this.GET_SERVICES}/${id}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => new Error("FROM ./TreatmentServices.ts"));
  }
}

export default new TreatmentService();
