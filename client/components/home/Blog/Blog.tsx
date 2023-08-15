import { useEffect, useState, useCallback } from "react";
import Container from "../../shared/Container/Container";
import ArticlesCategoriesServices from "../../../services/ArticlesCategoriesServices";
import Text from "../../shared/Text/Text";
import { CategoryTag } from "./Blog.style";
import { useRouter } from "next/router";
import { ICategory, IArticle } from "../../../interfaces/Articles";
import Button from "../../shared/Button/Button";
import Card from "../../shared/Card/Card";
import Skeleton from "../../shared/Card/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

const Posts = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selected, setSelected] = useState("3");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setLoading(true);
    ArticlesCategoriesServices.getCategories()
      .then((res: any) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setCategories([]);
        setLoading(false);
      });
  }, []);

  const handleCategory = useCallback((category) => {
    setSelected(category.id);
  }, []);

  const getCurrentCategory = (id: string) => {
    if (categories.length > 0) {
      return categories.find((ctg) => ctg.id === parseInt(id));
    }
  };

  const goToPost = (post: IArticle) => {
    router.push(`/articles/${post.id.toString()}`);
  };

  // const goToAllPosts = () => router.push("/articles");

  if (!categories) return <div>error</div>;

  return (
    <Container primary column height="100vh">
      <Text bold xxl 
        style={{
          marginTop: !matches ? '25px' : '0'
        }}
      
      >
        מאמרים
      </Text>

      <div
        style={{
          display: "flex",
          marginTop: "30px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : categories?.map(
              (category) =>
                category.isHomepage && (
                  <CategoryTag
                    key={category.id}
                    isSelected={
                      getCurrentCategory(selected)?.id === category.id
                    }
                    onClick={() => handleCategory(category)}
                  >
                    {category.name}
                  </CategoryTag>
                )
            )}
      </div>

      <Container
        margin="0 auto"
        justify="center"
        width={matches ? "1200px" : "unset"}
      >
        {getCurrentCategory(selected)?.articles.map(
          (article: IArticle) =>
            article.isHomepage && (
              <Card
                key={article.id}
                image={`http://68.183.74.230:1337${article?.src?.url}`}
                title={article.title}
                description={article.description}
                onClick={() => goToPost(article)}
              />
            )
        )}
      </Container>
      <Link href="/articles" passHref>
        <a>
        <Button
          primary
          width="300px"
          style={{ padding: "16px 32px", margin: '30px 0' }}
        >
          לחצו כאן למעבר לכל המאמרים
        </Button>
        </a>
      </Link>
    </Container>
  );
};

export default Posts;
