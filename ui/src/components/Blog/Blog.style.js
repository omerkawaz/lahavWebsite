import styled from "styled-components";

export const ArticleHero = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: ${({ img }) =>
    `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.3)), url(${img})`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;
  background-size: cover;
`;

export const ArticleContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  min-height: 40vh;
  line-height: 30px;
`;

export const CategoryTag = styled.div`
  font-family: "Heebo" sans-serif;
  cursor: pointer;
  padding: 12px 18px;
  background: ${({ isSelected }) =>
    isSelected ? "#7ba699" : "rgb(255, 198, 199, 0.1)"};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#3c4144")};
  margin: 5px 10px;
  border-radius: 4px;
  transition: 0.3s ease;
  border: 1px solid rgb(0, 0, 0, 0.1);
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;

  &:active {
    background: #658f82;
    color: #fff;
  }
`;
