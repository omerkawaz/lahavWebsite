import Container, {
  Col,
  Row,
} from "../../components/shared/Container/Container";
import Text from "../../components/shared/Text/Text";
import Image from "next/image";
import Lahav from "../../public/assets/lahav-avatar-edited.jpg";

import PageService from "../../services/PageContentService";
import { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IAbout {
  background?: string;
}

const About = ({ background }: IAbout) => {
  const matches = useMediaQuery("(min-width: 1024px)");

  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    PageService.getAboutContent()
      .then((res: any) => {
        setContent(res);
      })
      .catch((err: any) => console.log(err));
  }, []);

  if (!content) return <div>error</div>;

  return (
    // <Container
    //   id="about"
    //   align="center"
    //   justify="space-around"
    //   background={background ? background : "#f5f8f7"}
    //   height={!matches ? "100vh" : "80vh"}
    //   style={{
    //     // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1014%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(123%2c 166%2c 153%2c 0.35)'%3e%3c/rect%3e%3cpath d='M1440 0L1125.96 0L1440 53.35z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1125.96 0L1440 53.35L1440 325.33000000000004L540.38 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M540.3799999999999 0L1440 325.33000000000004L1440 447.32000000000005L492.33999999999986 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M492.3399999999999 0L1440 447.32000000000005L1440 470.63000000000005L290.6499999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L595.64 560L0 284.58z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 284.58L595.64 560L644.38 560L0 183.38z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 183.38L644.38 560L652.82 560L0 135.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 135.2L652.82 560L1030.95 560L0 75.97999999999999z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1014'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
    //     backgroundSize: "cover",
    //     padding: "25px",
    //     width: "100%",
    //   }}
    // >

    <div
    id="about"
      style={{
        background: background ? background : "#f5f8f7",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: matches ? "space-between" : "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: matches ? "1200px" : "100%",
          minHeight: "100vh",
          margin: "auto",
          padding:  "25px",
        }}
      >
        <div style={{
          marginTop: matches ? "0" : '30px'
        }}>
          <Text xxl bold>
            {content.title}
          </Text>
          <Text md dangerouslySetInnerHTML={{ __html: content.description }} />
        </div>
        {/* </Col> */}
        <div style={{ position: "relative", left: !matches ? "0" : "50px" }}>
          <Image
            className="avatarLahav"
            src={Lahav}
            width={400}
            height={400}
            alt="avatar"
          />
          <style jsx global>{`
            .avatarLahav {
              border-radius: 50%;
              width: 50%;
              object-fit: cover;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default About;
