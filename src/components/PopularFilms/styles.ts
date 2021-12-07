import styled from "styled-components";

interface IStyleProps {
  marginLeft: number;
}
export const Container = styled.div<IStyleProps>`
  min-width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;;
  left: ${props => props.marginLeft}px;

  transition: all .8s ease;
  
  
  &:hover div {
    visibility: visible;
  }
`;

export const Swipe = styled.div`
  position: absolute;
  width: 20px;
  height: 20%;
  background-color:rgba(0,0,0, 0.5);
  cursor: pointer;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: height 0.5s ease-in-out;
  border-radius: 7px;
  z-index: 99;

  &#left {
    left: 0 
  }

  &#right { 
    right: 0
  }

  &:hover {
    height: 50%
  }
`;


