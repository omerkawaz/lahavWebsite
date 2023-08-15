import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-family: "Heebo", sans-serif;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 25px;
  max-width: 1350px;
  align-items: center;
  margin: 0 auto;

  ${({ isTablet }) =>
    isTablet &&
    css`
      max-width: 900px;
    `}}

    ${({ isMobile }) =>
      isMobile &&
      css`
        padding: 0;
        max-width: 380px;
      `}}


`;

export const StyledCardReview = styled.div`
  width: ${({ isTablet, isMobile }) =>
    isTablet || isMobile ? "330px" : "420px"};
  height: 220px;
  border: 1px solid #ddd;
  padding: 12px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  object-fit: center;
  cursor: pointer;
`;

export const CardTitle = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
  color: black;
`;

export const CardBody = styled.div`
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 10px;
  line-height: 1.5;
  color: black;
`;

export const TextDate = styled.p`
  font-size: 12px;
  color: #90949c;

  &:hover {
    text-decoration: underline;
  }
`;
