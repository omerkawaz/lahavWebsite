import HttpService from "./HttpService";

class ArticlesService {
  private BASE_URL: string;
  private GET_ARTICLES: string;

  constructor() {
    this.BASE_URL = "http://68.183.74.230:1337";
    this.GET_ARTICLES = `${this.BASE_URL}/articles`;
  }

  getArticles() {
    return HttpService.get(this.GET_ARTICLES)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log("FROM ./ArticlesServices.ts", err));
  }

  getArticle(id: string | string[] | number) {
    return HttpService.get(`${this.GET_ARTICLES}/${id}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log("FROM ./ArticlesServices.ts", err));
  }
}

export default new ArticlesService();
