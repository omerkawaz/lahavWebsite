import styled from "styled-components";

export const TreatmentContainer = styled.div`
  min-height: 100vh;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;

  @media screen and (max-width: 820px) {
    min-height: 100vh;
  }
`;

export const TreatmentImageContainer = styled.div`
  height: 500px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-clip: padding-box;
  background-color: #464646;
  background-repeat: no-repeat;
  object-fit: cover;
`;

export const TreatmentContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  line-height: 30px;
`;

export const ToolsContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ToolELement = styled.div`
  min-width: 23%;
  margin: 10px;
`;

export const SuccessContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  margin: 50px auto;
`;

export const SuccessElement = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;
