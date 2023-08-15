import styled from "styled-components";

export const TreatmentContainer = styled.div<{img:string; id:string;}>`
  min-height: 90vh;
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
`;

// export const TreatmentRow =styled.div`
//     width: 1200px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-wrap: wrap;
//     margin: 0 auto;
// `;


export const TreatmentImageContainer = styled.div<{img:string}>`
  height: 300px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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