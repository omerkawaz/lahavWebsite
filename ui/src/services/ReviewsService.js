import HttpService, { strapiUrl } from "./HttpService";

class ReviewsService {
  constructor() {
    this.BASE_URL = strapiUrl;
    this.GET_REVIEWS = `${this.BASE_URL}/reviews`;

    console.log(this.GET_REVIEWS);
  }

  getReviews() {
    return HttpService.get(this.GET_REVIEWS)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("ArticlesServices.ts", err));
  }
}

export default new ReviewsService();
