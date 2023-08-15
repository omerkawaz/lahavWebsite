import React from "react";
import styled, { css } from "styled-components";

const SText = styled.p`
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "#3c4144")};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  margin: ${({ margin }) => margin};

  ${({ xs }) =>
    xs &&
    css`
      font-size: 12px;
    `}
  ${({ sm }) =>
    sm &&
    css`
      font-size: 14px;
    `}
    ${({ md }) =>
    md &&
    css`
      font-size: 18px;
    `}
    ${({ lg }) =>
    lg &&
    css`
      font-size: 24px;
    `}
    ${({ xl }) =>
    xl &&
    css`
      font-size: 36px;
    `}
    ${({ xxl }) =>
    xxl &&
    css`
      font-size: 48px;
    `}
    ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
    ${({ light }) =>
    light &&
    css`
      font-weight: 400;
    `}
    ${({ primary }) =>
    primary &&
    css`
      color: #7ba699;
    `};
`;

const Text = (props) => {
  return <SText {...props} />;
};

export default Text;
