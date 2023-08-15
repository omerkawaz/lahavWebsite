import Text from "../../shared/Text";
import { Col, Row } from "../../shared/Container";
import { HeroContainer } from "./Hero.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../../shared/Button";
import { CgArrowLeft } from "react-icons/cg";
import { useEffect, useState } from "react";
import PageService from "../../services/PageContentService";
import { imageUrl } from "../../services/HttpService";

// import { HiOutlineChevronDoubleDown } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";

const Hero = () => {
  const matches = useMediaQuery("(max-width: 480px)");
  // const navigate = useNavigate();
  const [content, setContent] = useState({
    title: "",
    text: "",
    button: "",
    slug: "",
    image: [{ url: "" }],
  });
  // const goToAbout = () => navigate("#about");

  useEffect(() => {
    PageService.getHeroSection()
      .then((res) => {
        setContent(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!content) return <div></div>;

  return (
    <HeroContainer img={imageUrl + content.image[0]?.url}>
      <Row style={{ justifyContent: "space-around", alignItems: "center" }}>
        <Col style={{ position: "relative", alignItems: "flex-start" }}>
          <Text
            color="#fff"
            xxl
            bold
            style={{ fontSize: matches ? "36px" : "48px", marginTop: "50px" }}
          >
            {content.title}
          </Text>
          <Text
            light
            lg
            color="#fff"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
          <a href="#about" style={{ textDecoration: "none" }}>
            <Button
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              width="250px"
              // onClick={goToAbout}
            >
              {content.button}
              <CgArrowLeft
                color="#fff"
                style={{ marginRight: "30px" }}
                size="1.5em"
              />
            </Button>
          </a>
        </Col>
        {/* <div
          style={{
            position: "absolute",
            bottom: matches ? "25px" : "75px",
            right: "50%",
            transform: "translateX(50%)",
          }}
        >
          <a href="#services">
            <HiOutlineChevronDoubleDown size="2em" color="#fff" />
          </a>
        </div> */}
      </Row>
    </HeroContainer>
  );
};

export default Hero;
