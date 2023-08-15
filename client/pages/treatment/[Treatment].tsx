import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TreatmentService from "../../services/TreatmentService";
import {
  TreatmentImageContainer,
  TreatmentContent,
  ToolsContainer,
  ToolELement,
  SuccessContainer,
  SuccessElement,
} from "../../components/Treatment/Treatment.Style";
import Text from "../../components/shared/Text/Text";
import { FaHeart } from "react-icons/fa";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface ITool {
  id: string | number;
  name: string;
  description: string;
  icon: { url: string };
}

interface ISUCCESS {
  id: string | number;
  effect: string;
}

interface IService {
  id: string | number;
  name: string;
  description: string;
  image: { url: string };
  icon: {
    url: string;
  };
  tool: ITool[];
  successTitle: string;
  success: ISUCCESS[];
}

const TreatmentInnerPage = () => {
  const mobile = useMediaQuery("(max-width: 480px)");
  const router = useRouter();
  const { Treatment: id } = router.query;
  const [service, setService] = useState<IService>({
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
    // if (!id || !Number(id)) {return router.push("/404");}

    if(id){
      TreatmentService.getService(id)
      .then((res: any) => {
        console.log(res)
        setService(res);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
    }





    
  }, [id]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <TreatmentImageContainer
        img={`http://68.183.74.230:1337${service?.image?.url}`}
        // style={{ marginTop: "80px" }}
      ></TreatmentImageContainer>

      <TreatmentContent>
        <Text xl bold margin="30px 0 30px 0">
          {service?.name}
        </Text>
        <Text
          margin="0"
          style={{
            textAlign: "center",
            fontSize: "16px",
            width: mobile ? "300px" : "400px",
            whiteSpace: "wrap",
            overflow: "hidden",
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
                  src={"http://68.183.74.230:1337" + t?.icon?.url}
                  width="50"
                  height="50"
                  alt="image"
                />
              {/* </div> */}
              <Text bold md > 
                {t.name}
              </Text>
              <Text
                sm
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
