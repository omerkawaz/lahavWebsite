import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Text from "../shared/Text/Text";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface IServiceCard {
  title: string;
  icon?: string;
  id?: string | number;
}
// eslint-disable-next-line react/display-name
const ServiceCard = ({ title, icon, id }: IServiceCard) => {
  const mobile = useMediaQuery("(max-width: 480px)");
  const tablet = useMediaQuery("(max-width: 900px)");

  return (
    <Card
      style={{
        boxSizing: "border-box",
        margin: "5px",
        height: mobile ? "150px" : tablet ? "200px" : "300px",
        minWidth: mobile ? "150px" : tablet ? "200px" : "300px",
        maxWidth: mobile ? "150px" : tablet ? "200px" : "300px",
        background: "#fff",
      }}
      variant="outlined"
    >
      <CardContent
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img
          src={"http://68.183.74.230:1337" + icon}
          width="80px"
          height="80px"
          alt="image"
        />
        <Text md bold style={{ fontSize: tablet ? "14px" : "18px" }}>
          {title}
        </Text>
        <Text sm primary>
            ראו עוד...
        </Text>
      </CardContent>
    </Card>
  );
}


export default  ServiceCard