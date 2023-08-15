import styled, { css } from "styled-components";

// Desktop view

export const SHeader = styled.div`
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-shadow: 0 0 5px 1px rgb(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  z-index: 1;
  background: #fff;

  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

 /* border-bottom: 1px solid #ccc; */

export const SUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const SLi = styled.li`
  color: #505050;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s ease;
  margin-left: 10px;

  &:hover {
    color: #7ba699;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SMobileNav = styled.div`
  background: rgb(255, 255, 255, 1);
  display: flex;
  position: absolute;
  top: 75px;
  right: 0;
  width: 100%;
  height: 40vh;
  border-bottom: 1px solid #ccc;
  z-index: 1;
`;

export const MobileUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MobileLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505050;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s ease;
  height: 30%;
  width: 100%;
`;

// @media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
// @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
// @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
// @media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
