import styled from "styled-components";

export const AboutImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  margin-top: 30px;
  width: 400px;
  height: 400px;
  background-position: center;

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;
