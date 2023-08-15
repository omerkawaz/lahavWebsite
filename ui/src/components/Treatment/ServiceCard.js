import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Text from "../../shared/Text";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useNavigate, useLocation } from "react-router-dom";
import { imageUrl } from "../../services/HttpService";
import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { useState } from "react";

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 0 0 10px 1px rgb(0,0,0,0.15);
  }
`;

const StyledReadMore = styled.p`
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  color: #7ba699;
  transition: 0.3s ease;
`;

// eslint-disable-next-line react/display-name
const ServiceCard = ({ title, icon, id }) => {
  const mobile = useMediaQuery("(max-width: 480px)");
  const tablet = useMediaQuery("(max-width: 900px)");
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToInnerTreatment = (id) => {
    if (pathname === "/treatment") {
      navigate(id.toString());
    } else {
      navigate(`treatment/${id}`);
    }
  };

  return (
    <StyledCard
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        boxSizing: "border-box",
        margin: "5px",
        height: mobile ? "175px" : tablet ? "200px" : "300px",
        minWidth: mobile ? "175px" : tablet ? "200px" : "300px",
        maxWidth: mobile ? "175px" : tablet ? "200px" : "300px",
        background: "#fff",
        cursor: "pointer",
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
        onClick={() => navigateToInnerTreatment(id)}
      >
        <img src={imageUrl + icon} width="80px" height="80px" alt="icon" />
        <Text md style={{ fontSize: tablet ? "14px" : "16px", fontWeight: '500', margin: '10px 0' }}>
          {title}
        </Text>
        <StyledReadMore isHover={isHover}>
          <ArrowLeft />
        </StyledReadMore>
      </CardContent>
    </StyledCard>
  );
};

export default ServiceCard;
