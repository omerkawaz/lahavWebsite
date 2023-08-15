import { useEffect, useState } from "react";
import PageService from "../../services/PageContentService";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Text from "../../shared/Text";
import { AboutImage } from "./About.style";
import Button from "../../shared/Button";

const openWhatsapp = () => window.open("https://api.whatsapp.com/send?phone=+972543106929&text=היי, אשמח לשמוע פרטים נוספים על הטיפול שלך", "_blank")


const About = ({ background }) => {
  const matches = useMediaQuery("(min-width: 1024px)");

  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    PageService.getAboutContent()
      .then((res) => {
        setContent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!content) return <div></div>;

  return (
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
          maxWidth: matches ? "1200px" : "100%",
          minHeight: "100vh",
          margin: "auto",
          padding: "25px",
        }}
      >
        <div>
          <Text
            xxl
            bold
            style={{
              marginTop: matches ? "0" : "50px",
            }}
          >
            {content.title}
          </Text>
          <Text
            md
            light
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
          <Button
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "15px",
              marginBottom: "25px",
            }}
            width="150px"
            onClick={openWhatsapp}
          >
            יצירת קשר
          </Button>
        </div>
        <div style={{ position: "relative", left: !matches ? "0" : "50px" }}>
          <AboutImage src={"/assets/lahav-about-avatar.jpg"} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default About;
