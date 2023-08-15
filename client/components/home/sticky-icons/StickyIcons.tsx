import Icon from "../../shared/Icon/Icon";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const StickyContainer = styled.div`
  position: fixed;
  left: 2%;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

const IconStickWrapper = styled.div<{ background: string }>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${({ background }) => (background ? background : "unset")};
  border-radius: 50%;
  cursor: pointer;
`;

const StickyIcons = () => {
  return (
    <StickyContainer>
      <IconButton
        style={{ marginBottom: "5px" }}
        onClick={() => window.open("https://wa.me/+972543106929", "_blank")}
      >
        <FaWhatsapp color="#25D366" size="40px" />
      </IconButton>
      <IconButton
        style={{ background: "#7ba699" }}
        onClick={() => window.open("tel:+972543106929", "_blank")}
      >
        <FaPhoneAlt color="#f4f4f4" size="18px" />
      </IconButton>
    </StickyContainer>
  );
};

export default StickyIcons;
