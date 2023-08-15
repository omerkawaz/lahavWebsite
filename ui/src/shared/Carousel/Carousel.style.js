import styled, { css } from "styled-components";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export const CarouselWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  display: flex;
  transition: transform 0.3s;
  position: relative;
`;

export const InnerWrapper = styled.div``;

export const CarouselItemWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  transition: 1s ease;
  transform: translateX(${({ activeIndex }) => activeIndex * 430}px);


  ${({ isTablet }) =>
    isTablet &&
    css`
      transform: translateX(${({ activeIndex }) => activeIndex * 340}px);
    `}}

  ${({ isMobile }) =>
    isMobile &&
    css`
      transform: translateX(${({ activeIndex }) => activeIndex * 340}px);
    `}}

`;

export const IconWrapper = styled.button`
  background: none;
  border: none;
  transition: all 1s ease;

  svg {
    path {
      &:active {
        fill: #7ba699;
      }
    }
  }
`;

export const Dot = styled.span`
  border: 1px solid #7ba699;
  width: 10px;
  height: 10px;
  background: #7ba699;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s ease;

  &:active {
    background: #7ba699;
    border: 1px solid #7ba699;
  }

  ${({ light }) =>
    light &&
    css`
      border: 1px solid #aec8c0;
      background: #aec8c0;
    `}
`;

export const ArrowIconRight = styled(RiArrowRightSLine)`
  transition: all 1s ease;

  svg {
    path {
      &:active {
        fill: #7ba699;
      }
    }
  }
`;

export const ArrowIconLeft = styled(RiArrowLeftSLine)`
  transition: all 1s ease;

  svg {
    path {
      &:active {
        fill: #7ba699;
      }
    }
  }
`;
