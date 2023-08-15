import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: ${({ img }) =>
    `linear-gradient(rgb(0, 0, 0, 0.2), rgb(0, 0, 0, 0.2)),url(${img})`};
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: #464646;
  background-repeat: no-repeat;
  min-height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    background-position: 70% center;
  }
`;
