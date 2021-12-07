import { shade } from "polished";
import styled from "styled-components";
import px2vw from "../../utils/px2vw";

interface IStyleProps {
  imageURL: string;
}

export const Container = styled.div`

`;

export const MovieData = styled.div<IStyleProps>`
  background-image: url("https:\/\/themoviedb.org/t/p/w440_and_h660_face/${(props) => props.imageURL}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
  width: ${px2vw(220)};
  height: ${px2vw(320)};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
   transform: scale(1.3);
    box-shadow: inset 0 0 10vh 0
      ${(props) => shade(0.9, props.theme.colors.bgColor)};
  }
`;
