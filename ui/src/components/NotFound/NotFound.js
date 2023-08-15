import Button from "../../shared/Button";
import Text from "../../shared/Text";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const mobile = useMediaQuery("(max-width: 480px)");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Text xl primary bold style={{ marginTop: mobile ? "50px" : "100px" }}>
        העמוד לא נמצא
      </Text>
      <Text md light style={{ margin: "10px 0" }}>
        לא נורא, <br />
        זה זמן טוב לקחת נשימה
      </Text>
      <Button width="200px" style={{ fontSize: "24px" }} onClick={goHome}>
        חזרה לאתר
      </Button>
      <img
        src="/assets/hero.svg"
        width={mobile ? "400" : "700"}
        height={mobile ? "400" : "700"}
        alt="hero"
      />
    </div>
  );
};

export default NotFound;
