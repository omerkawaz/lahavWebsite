import { useEffect, useState } from "react";
import { Col, Row } from "../shared/Container/Container";
import Text from "../shared/Text/Text";
import ServiceCard from "./ServiceCard";
import { TreatmentContainer } from "./Treatment.Style";
import PageContentService from "../../services/PageContentService";
import TreatmentService from "../../services/TreatmentService";
import { useRouter } from "next/router";
import Button from "../shared/Button/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";
// import {
//   GiApothecary,
//   GiHiveMind,
//   GiDrinkMe,
//   GiOvermind,
// } from "react-icons/gi";

interface IContent {
  title: string;
  description: string;
}

interface IService {
  id: string | number;
  name: string;
  icon: {
    url: string;
  };
}

const Treatment = () => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [content, setContent] = useState<IContent>({
    title: "",
    description: "",
  });

  const router = useRouter();
  const page_location = router.pathname;

  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    PageContentService.getOntreatment()
      .then((res: any) => {
        setContent(res);
      })
      .catch((err: any) => {
        console.log(err);
      });

    TreatmentService.getServices()
      .then((res: any) => {
        setServices(res);
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, []);

  if (!services) return <div>נראה שאנחנו לא מוצאים את מה שאתן מחפשות</div>;

  return (
    <TreatmentContainer id="services" img="/assets/background_circles.svg">
          {content && (
            <div style={{marginTop: !matches ? '50px' : '0'}}>
              <Text xxl bold>
                {content.title}
              </Text>
              <Text
                md
                style={{ lineHeight: "1.5" }}
                dangerouslySetInnerHTML={{ __html: content.description }}
              />
              <Link href={page_location === "/treatment" ? "/contact" : "/#contact"} passHref>
                <a>
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      marginTop: "30px",
                      marginBottom: "25px",
                    }}
                    width="150px"
                  >
                    יצירת קשר
                  </Button>
                </a>
              </Link>
            </div>
          )}



          <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}>
            {services.map((service) => (
              <Link key={service.id} href={`/treatment/${service.id}`} passHref>
                  <a>
                  <ServiceCard
                    id={service.id}
                    title={service.name}
                    icon={service?.icon?.url}
                  />
                </a>
              </Link>
            ))}
        </div>
     </TreatmentContainer>
  );
};

export default Treatment;
