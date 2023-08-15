import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 25px;
  max-width: 1200px;
  min-height: 100vh;

  @media screen and (max-width: 1120px) {
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  margin: 30px 0;
  width: 600px;

  @media screen and (max-width: 1120px) {
    justify-content: center;
    max-width: calc(100% - 20px);
  }
`;
