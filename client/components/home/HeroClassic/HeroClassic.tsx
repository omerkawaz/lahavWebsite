// import Image from "next/image";
// import HeroDraw from "../../../public/assets/hero.svg";
import Text from "../../shared/Text/Text";
import { Col, Row } from "../../shared/Container/Container";
import { HeroContainer } from "./Hero.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../../shared/Button/Button";
import { CgArrowLeft } from "react-icons/cg";
import { useEffect, useState } from "react";
import PageService from "../../../services/PageContentService";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from 'next/link'

const Hero = () => {
  const matches = useMediaQuery("(max-width: 480px)");

  const [content, setContent] = useState({
    title: "",
    text: "",
    button: "",
    slug: "",
    image: [{url: ''}],
  });

  useEffect(() => {
    PageService.getHeroSection()
      .then((res: any) => {
        setContent(res);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);

  if (!content) return <div>Error</div>;

  return (
    <HeroContainer img={`http://68.183.74.230:1337${content.image[0]?.url}`}>
      <Row style={{ justifyContent: "space-around" }}>
        <Col style={{ position: "relative" }}>
          <Text
            color="#fff"
            xxl
            bold
            style={{ fontSize: matches ? "33px" : "48px" }}
          >
            {content.title}
          </Text>
          <Text
            lg
            color="#fff"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
          <Link href={`#${content.slug}`} passHref>
            <a>
            <Button
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              width="250px"
            >
              {content.button}
              <CgArrowLeft
                color="#fff"
                style={{ marginRight: "30px" }}
                size="1.5em"
              />
            </Button>
            </a>
          </Link>
      
        </Col>
        <div
            style={{
              position: "absolute",
              bottom: matches ? '25px' : '75px',
              right: "50%",
              transform: "translateX(50%)",
            }}
          >
            <a href="#services">
              <HiOutlineChevronDoubleDown size="2em" color="#fff" />
            </a>
          </div>
      </Row>
    </HeroContainer>
  );
};

export default Hero;
