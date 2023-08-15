import Image from "next/image";
import HeroDraw from "../../../public/assets/hero.svg";
import Text from "../../shared/Text/Text";
import { Col, Row } from "../../shared/Container/Container";
import { HeroContainer } from "./Hero.style";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "../../shared/Button/Button";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Hero = () => {
  const matches = useMediaQuery("(max-width: 480px)");

  return (
    <HeroContainer>
      {/* <Row justify="space-around">
        <Col>
          <Text
            primary
            xxl
            bold
            style={{ fontSize: matches ? "36px" : "48px" }}
          >
            להב טיפול הוליסטי
          </Text>
          <Text lg maxWidth="340px">
            לורם איפסום דולור סיט אמט, נולום ארווס סאפיאן - פוסיליס קוויס,
          </Text>
          <Button
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            width="150px"
          >
            עוד עליי
            <FaRegArrowAltCircleLeft color="#fff" />
          </Button>
        </Col>
        <Col>
          <Image src={HeroDraw} width="700" height="700" alt="hero" />
        </Col>
      </Row> */}
    </HeroContainer>
  );
};

export default Hero;
