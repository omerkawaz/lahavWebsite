import { useEffect, useState } from "react";
import TreatmentService from "../../services/TreatmentService";
import {
  TreatmentImageContainer,
  TreatmentContent,
  ToolsContainer,
  ToolELement,
  SuccessContainer,
  SuccessElement,
} from "../../components/Treatment/Treatment.style";
import Text from "../../shared/Text";

import { FaHeart } from "react-icons/fa";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useParams } from "react-router-dom";
import { imageUrl } from "../../services/HttpService";

const TreatmentInnerPage = () => {
  const mobile = useMediaQuery("(max-width: 480px)");
  const { treatmentId: id } = useParams();

  const [service, setService] = useState({
    id: "",
    name: "",
    description: "",
    image: { url: "" },
    icon: { url: "" },
    tool: [],
    successTitle: "",
    success: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      TreatmentService.getService(id)
        .then((res) => {
          setService(res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [id]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <TreatmentImageContainer
        img={imageUrl + service?.image?.url}
      ></TreatmentImageContainer>

      <TreatmentContent>
        <Text
          xl
          bold
          primary
          margin="30px 0 30px 0"
          style={{ alignText: "center !important" }}
        >
          {service?.name}
        </Text>
        <Text
          light
          margin="0"
          style={{
            textAlign: "center",
            fontSize: "16px",
            width: mobile ? "300px" : "400px",
            whiteSpace: "wrap",
            overflow: "hidden",
            alignText: "center !important",
          }}
          dangerouslySetInnerHTML={{ __html: service?.description }}
        />
      </TreatmentContent>

      <ToolsContainer>
        {service &&
          service?.tool?.map((t) => (
            <ToolELement key={t.id}>
              {/* <div style={{ width: '65px', height: '65px', background: '#7ba699', borderRadius:'50%', display:'grid', placeItems:'center'}}> */}
              <img
                src={imageUrl + t?.icon?.url}
                width="50"
                height="50"
                alt="icon of tool"
              />
              {/* </div> */}
              <Text md>{t.name}</Text>
              <Text
                sm
                light
                dangerouslySetInnerHTML={{ __html: t.description }}
                style={{
                  width: "200px",
                  whiteSpace: "wrap",
                  overflow: "hidden",
                }}
              />
            </ToolELement>
          ))}
      </ToolsContainer>

      <SuccessContainer>
        <Text bold xl color="#7ba699" style={{ textAlign: "center" }}>
          {service?.successTitle}
        </Text>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {service &&
            service?.success?.map((s) => (
              <SuccessElement key={s.id}>
                <FaHeart color="#ffc6c7" style={{ marginLeft: "15px" }} />
                <Text light md>
                  {s.effect}
                </Text>
              </SuccessElement>
            ))}
        </div>
      </SuccessContainer>
    </div>
  );
};

export default TreatmentInnerPage;
