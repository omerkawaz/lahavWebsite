import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import ArticlesCategoriesServices from "../../services/ArticlesCategoriesServices";
import { ICategory, IArticle } from "../../interfaces/Articles";
import Container, { Row } from "../../components/shared/Container/Container";
import Text from "../../components/shared/Text/Text";
import Card from "../../components/shared/Card/Card";
import { ArticleHero, CategoryTag } from "../../components/home/Blog/Blog.style";
import Skeleton, {
  SkeltonCategoryTag,
} from "../../components/shared/Card/Skeleton";
import useMediaQuery from "@material-ui/core/useMediaQuery";



const Articles = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selected, setSelected] = useState("3");
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    // const _t = setTimeout(()=> {
    //   window.scroll(0,0)
    // },500)

    setLoading(true);
    ArticlesCategoriesServices.getCategories()
      .then((res: any) => {
        setCategories(res);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });




      // return () => clearInterval(_t);
  }, []);

  const handleCategory = useCallback((category) => {
    setSelected(category.id);
  }, []);

  const getCurrentCategory = (id: string) =>
    categories.find((ctg) => ctg.id === parseInt(id));

  const goToPost = (post: IArticle) => {
    router.push(`articles/${post.id.toString()}`);
  };

  return (
    <>
      <ArticleHero img="/assets/articles_image.jpg" />
      <Container column align="center" height="100vh" style={{marginBottom: '50px'}}>
          <Text bold xxl>
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

          <Container margin="0 auto" justify="center" width={ matches ? "1200px" : "unset"}>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} />
                ))
              : getCurrentCategory(selected)?.articles.map(
                  (article: IArticle) => (
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
      </Container>
    </>
  );
};

export default Articles;
