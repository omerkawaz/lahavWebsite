import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const IconWrapper = styled(IconButton)`
  padding: 0 !important;
  margin: 0 5px !important;
`;

const Icon = ({ icon, size, color, onClick }) => {
  return <IconWrapper onClick={onClick}>{icon}</IconWrapper>;
};

export default Icon;
