import { useEffect, useState } from "react";
import Text from "../../shared/Text";
import ServiceCard from "./ServiceCard";
import { TreatmentContainer } from "./Treatment.style";
import PageContentService from "../../services/PageContentService";
import TreatmentService from "../../services/TreatmentService";
import Button from "../../shared/Button";
import { Spinner } from "../../shared/LoaderApp";

const openWhatsapp = () => window.open("https://api.whatsapp.com/send?phone=+972543106929&text=היי, אשמח לשמוע פרטים נוספים על הטיפול שלך", "_blank")

const Treatment = () => {
  const [content, setContent] = useState({
    title: "",
    description: "",
  });
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      PageContentService.getOntreatment(),
      TreatmentService.getServices(),
    ])
      .then(([content, services]) => {
        setContent(content);
        setServices(services);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (!services) return <div></div>;

  // loading ? (
  //   <LoaderApp on={loading} />
  // ) :

  return loading ? (
    <TreatmentContainer id="services" img="/assets/background_circles.svg">
      <Spinner />
    </TreatmentContainer>
  ) : (
    <TreatmentContainer id="services" img="/assets/background_circles.svg">
      {content && (
        <div>
          <Text xxl bold style={{ textAlign: "right" }}>
            {content.title}
          </Text>
          <Text
            md
            light
            style={{ lineHeight: "1.5" }}
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
            <Button
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "25px",
              }}
              width="150px"
              onClick={openWhatsapp}
            >
              יצירת קשר
            </Button>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.name}
            icon={service?.icon?.url}
          />
        ))}
      </div>
    </TreatmentContainer>
  );
};

export default Treatment;
