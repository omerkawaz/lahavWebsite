import HttpService from "./HttpService";

class PageContent {
  private BASE_URL: string;
  private GET_HERO_SECTION: string;
  private GET_ABOUT_SECTION: string;
  private GET_TREATMENT_SECTION: string;

  constructor() {
    this.BASE_URL = "http://68.183.74.230:1337";
    this.GET_HERO_SECTION = `${this.BASE_URL}/hero-section`;
    this.GET_ABOUT_SECTION = `${this.BASE_URL}/about`;
    this.GET_TREATMENT_SECTION = `${this.BASE_URL}/on-treatment`;

}

  getHeroSection() {
    return HttpService.get(this.GET_HERO_SECTION)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log("FROM /servies PageContent", err));
  }

  getAboutContent() {
    return HttpService.get(this.GET_ABOUT_SECTION)
      .then((res: any) => {
        return res.data;
      })
      .catch((err: any) => console.log("FROM /servies PageContent", err));
  }

  getOntreatment(){
    return HttpService.get(this.GET_TREATMENT_SECTION)
    .then((res: any) => {
      return res.data;
    })
    .catch((err: any) => console.log("FROM /servies PageContent", err));
  }
}

export default new PageContent();
