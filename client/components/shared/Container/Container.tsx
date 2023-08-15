import { ReactNode } from "react";

import styled, { css } from "styled-components";

interface IS {
  id?:string;
  width?: string;
  height?: string;
  align?: string;
  justify?: string;
  primary?: boolean;
  background?: string;
  column?: boolean;
  children?: ReactNode;
  style?: any;
  margin?: string;
  wrap?: boolean;
}

const S = styled.div<IS>`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  min-height: ${({ height }) => (height ? height : "unset")};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
  background: ${({ background }) => (background ? background : "#fff")};
  align-items: ${({ align }) => (align ? align : "flex-start")};
  margin: ${({ margin }) => (margin ? margin : "unset")};
  flex-wrap: wrap;

  ${({ primary }) =>
    primary &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div<{alignItems?: string; justify?:string;padding?:string;width?:string;}>`
  width:${({ width }) => (width ? width : "100%")};
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  flex-wrap: wrap;
  padding: ${({ padding }) => (padding ? padding : "0")};

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

const Container = (props: IS) => {
  return <S {...props} />;
};

export default Container;
