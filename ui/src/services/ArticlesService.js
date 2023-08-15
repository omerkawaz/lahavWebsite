import HttpService, { strapiUrl } from "./HttpService";

class ArticlesService {
  constructor() {
    this.BASE_URL = strapiUrl;
    this.GET_ARTICLES = `${this.BASE_URL}/articles`;
  }

  getArticles() {
    return HttpService.get(this.GET_ARTICLES)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("ArticlesServices.ts", err));
  }

  getArticle(id) {
    return HttpService.get(`${this.GET_ARTICLES}/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("ArticlesServices.ts", err));
  }
}

export default new ArticlesService();
