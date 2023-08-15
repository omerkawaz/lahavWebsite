import HttpService, { strapiUrl } from "./HttpService";

class PageContent {
  constructor() {
    this.BASE_URL = strapiUrl;
    this.GET_HERO_SECTION = `${this.BASE_URL}/hero-section`;
    this.GET_ABOUT_SECTION = `${this.BASE_URL}/about`;
    this.GET_TREATMENT_SECTION = `${this.BASE_URL}/on-treatment`;
  }

  getHeroSection() {
    return HttpService.get(this.GET_HERO_SECTION)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("FROM /servies PageContent", err));
  }

  getAboutContent() {
    return HttpService.get(this.GET_ABOUT_SECTION)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("FROM /servies PageContent", err));
  }

  getOntreatment() {
    return HttpService.get(this.GET_TREATMENT_SECTION)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log("FROM /servies PageContent", err));
  }
}

export default new PageContent();
