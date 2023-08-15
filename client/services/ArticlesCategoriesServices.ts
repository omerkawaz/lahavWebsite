import HttpService from "./HttpService";

class ArticlesCategoriesServices {
  private BASE_URL: string;
  private GET_CATEGORIES: string;

  constructor() {
    this.BASE_URL = "http://68.183.74.230:1337";
    this.GET_CATEGORIES = `${this.BASE_URL}/articles-categories`;
  }

  getCategories() {
    return HttpService.get(this.GET_CATEGORIES)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) =>
        console.log("FROM /servies ArticlesCategoriesServices", err)
      );
  }

  getCategory(id: string) {
    return HttpService.get(`${this.GET_CATEGORIES}/${id}`)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log(err));
  }
}

export default new ArticlesCategoriesServices();
