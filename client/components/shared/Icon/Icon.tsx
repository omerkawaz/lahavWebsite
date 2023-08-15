import { ReactNode } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

const IconWrapper = styled(IconButton)`
  padding: 0 !important;
  margin: 0 5px !important;
`;

interface IIcon {
  icon: ReactNode;
  size?: string;
  color?: string;
  onClick?: () => void;
}

const Icon = ({ icon, size, color, onClick }: IIcon) => {
  return <IconWrapper onClick={onClick}>{icon}</IconWrapper>;
};

export default Icon;
