import styled from "styled-components";

export const HeroContainer = styled.div<{img:string}>`
  background-image: ${({img}) => `linear-gradient(rgb(0, 0, 0, 0.2), rgb(0, 0, 0, 0.2)),url(${img})`};
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  /* padding: 0 50px; */
`;
