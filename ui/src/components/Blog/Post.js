import { useEffect, useState } from "react";
import { imageUrl } from "../../services/HttpService";
import ArticlesService from "../../services/ArticlesService";
import { ArticleHero, ArticleContent } from "./Blog.style";
import Text from "../../shared/Text";
import { useParams } from "react-router-dom";

const Article = () => {
  const { postId: id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (id) {
      ArticlesService.getArticle(id)
        .then((res) => {
          setArticle(res);
        })
        .catch((err) => console.log("[Article].tsx", err));
    }
  }, [id]);

  return (
    <>
      <ArticleHero
        img={imageUrl + article?.src?.url}
        style={{ height: "500px" }}
      >
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
            dangerouslySetInnerHTML={{ __html: article?.description }}
          />
        </div>
      </ArticleHero>

      <ArticleContent>
        {article?.paragraphs.map((para) => (
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
