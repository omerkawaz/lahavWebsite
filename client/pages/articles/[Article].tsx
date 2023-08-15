import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArticlesService from "../../services/ArticlesService";
import { IArticle } from "../../interfaces/Articles";
import { ArticleHero, ArticleContent } from "../../components/home/Blog/Blog.style";
import Text from "../../components/shared/Text/Text";

const Article = () => {
  const router = useRouter();
  const { Article: id } = router.query;
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    if (id) {
      ArticlesService.getArticle(id)
        .then((res: IArticle) => {
          setArticle(res);
        })
        .catch((err: Error) => console.log("ERR FROM /[Article].tsx", err));
    }
  }, [id]);


  return (
    <>
      <ArticleHero img={`http://68.183.74.230:1337${article?.src?.url}`} style={{height: '500px'}}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <Text xl bold color="#fff" margin="15px 0">
            {article?.title}
          </Text>
          <Text
            md
            color="#fff"
            style={{ maxWidth: "500px", lineHeight: "30px" }}
            dangerouslySetInnerHTML={{ __html: article?.description}}
          />

        </div>
      </ArticleHero>

      <ArticleContent>
        {article?.paragraphs.map((para: any) => (
          <div
            key={para.id}
            style={{
              margin: "15px 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text lg bold margin="10px 0">
              {para.title}
            </Text>
            <Text
              md
              margin="10px 0"
              dangerouslySetInnerHTML={{ __html: para.desc }}
            />
          </div>
        ))}
      </ArticleContent>
    </>
  );
};

export default Article;
