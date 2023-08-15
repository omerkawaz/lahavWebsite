import HttpService, { strapiUrl } from "./HttpService";

class ArticlesCategoriesServices {
  constructor() {
    this.BASE_URL = strapiUrl;
    this.GET_CATEGORIES = `${this.BASE_URL}/articles-categories`;
  }

  getCategories() {
    return HttpService.get(this.GET_CATEGORIES)
      .then((res) => {
        return res.data;
      })
      .catch((err) =>
        console.log("FROM /servies ArticlesCategoriesServices", err)
      );
  }

  getCategory(id) {
    return HttpService.get(`${this.GET_CATEGORIES}/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }
}

export default new ArticlesCategoriesServices();
