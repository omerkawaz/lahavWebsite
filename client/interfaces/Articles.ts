export interface ICategory {
  id: number;
  name: string;
  articles: [];
  isHomepage?:boolean
}



interface IParagraph {
  id: string | number;
  title:string;
  desc: string;
}

export interface IArticle {
  id: number;
  title: string;
  description: string;
  isHomepage: boolean;
  src?: {
    url: string;
  };
  paragraphs: IParagraph[]
}
