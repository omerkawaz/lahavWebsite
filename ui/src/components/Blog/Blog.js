import { useEffect, useState, useCallback } from "react";
import Container from "../../shared/Container";
import ArticlesCategoriesServices from "../../services/ArticlesCategoriesServices";
import Text from "../../shared/Text";
import { CategoryTag } from "./Blog.style";
import Button from "../../shared/Button";
import Card from "../../shared/Card/Card";
import Skeleton from "../../shared/Card/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../services/HttpService";

const Posts = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("3");
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const goToBlog = () => navigate("/articles");

  useEffect(() => {
    setLoading(true);
    ArticlesCategoriesServices.getCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setCategories([]);
        setLoading(false);
      });
  }, []);

  const handleCategory = useCallback((category) => {
    setSelected(category.id);
  }, []);

  const getCurrentCategory = (id) => {
    if (categories.length > 0) {
      return categories.find((ctg) => ctg.id === parseInt(id));
    }
  };

  const goToPost = (post) => {
    navigate(`/articles/${post.id.toString()}`);
  };

  if (!categories) return <div></div>;

  return (
    <Container primary column height="100vh">
      <Text
        bold
        xxl
        style={{
          marginTop: !matches ? "25px" : "0",
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
        width={matches ? "100%" : "unset"}
      >
        {getCurrentCategory(selected)?.articles.map(
          (article) =>
            article.isHomepage && (
              <Card
                key={article.id}
                image={imageUrl + article?.src?.url}
                title={article.title}
                description={article.description}
                onClick={() => goToPost(article)}
              />
            )
        )}
      </Container>
      <Button
        primary
        width="300px"
        style={{ padding: "16px 32px", margin: "30px 0" }}
        onClick={goToBlog}
      >
        לחצו כאן למעבר לכל המאמרים
      </Button>
    </Container>
  );
};

export default Posts;
