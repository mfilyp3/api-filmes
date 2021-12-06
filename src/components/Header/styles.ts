import styled from "styled-components";
import { shade } from "polished";
import px2vw from "../../utils/px2vw";

export const Container = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 7rem;
  color: var(--grey);
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.5s ease;
  box-shadow: 0 0 10px 0 ${(props) => shade(0.4, props.theme.colors.primary)};
  margin-bottom: 1rem;
  &.responsive {
    height: 90vh;

    li {
      display: block;
      width: 100%;
    }

    .left {
      width: 100%;
      flex-direction: column;
    }

    h3 {
      margin: 2rem 0;
    }
  }

  #responsiveShow {
    display: none;
  }

  .left {
    display: flex;
    align-items: center;
  }

  input {
    transition: all 0.7s ease !important;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--grey);
    outline: none;
    color: white;
    padding: 0.5rem 1rem;

    &:focus {
      width: ${px2vw(200)};
    }
  }

  h3:hover {
    color: white;
  }

  @media screen and (max-width: 375px) {
    justify-content: center;

    #responsiveShow {display: block}
    nav {
      flex-direction: column;
      flex-wrap: wrap;
    }

    .right,
    li {
      display: none;
    }
  }
`;

export const Logo = styled.h3`
  margin: 0 20px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
  transition: all 1 ease !important;

  > li {
    list-style: none;
    margin: 0 15px;
    transition: color 0.2s;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: white;
    }
  }
`;
