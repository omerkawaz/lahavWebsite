import { useEffect, useState, useCallback } from "react";
import ArticlesCategoriesServices from "../../services/ArticlesCategoriesServices";
import Container from "../../shared/Container";
import Text from "../../shared/Text";
import Card from "../../shared/Card/Card";
import { ArticleHero, CategoryTag } from "./Blog.style";
import Skeleton, { SkeltonCategoryTag } from "../../shared/Card/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { imageUrl } from "../../services/HttpService";

const Articles = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("3");
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);

    setLoading(true);
    ArticlesCategoriesServices.getCategories()
      .then((res) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleCategory = useCallback((category) => {
    setSelected(category.id);
  }, []);

  const getCurrentCategory = (id) =>
    categories.find((ctg) => ctg.id === parseInt(id));

  const goToPost = (post) => {
    navigate(`/articles/${post.id}`);
  };

  return (
    <>
      <ArticleHero img="/assets/articles_image.jpg" />
      <Container
        column
        align="center"
        height="100vh"
        style={{ marginBottom: "50px" }}
      >
        <Text bold xxl style={{ marginTop: "30px" }}>
          מאמרים
        </Text>

        <div
          style={{
            display: "flex",
            marginTop: "30px",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "800px",
          }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => (
                <SkeltonCategoryTag key={idx} />
              ))
            : categories?.map((category) => (
                <CategoryTag
                  key={category.id}
                  isSelected={getCurrentCategory(selected)?.id === category.id}
                  onClick={() => handleCategory(category)}
                >
                  {category.name}
                </CategoryTag>
              ))}
        </div>

        <Container
          margin="0 auto"
          justify="center"
          width={matches ? "1200px" : "unset"}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} />
              ))
            : getCurrentCategory(selected)?.articles.map((article) => (
                <Card
                  key={article.id}
                  image={imageUrl + article?.src?.url}
                  title={article.title}
                  description={article.description}
                  onClick={() => goToPost(article)}
                />
              ))}
        </Container>
      </Container>
    </>
  );
};

export default Articles;
