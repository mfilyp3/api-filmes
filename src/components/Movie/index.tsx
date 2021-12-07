import { IMovieData } from "../../interfaces/Movies/movieData.interface";
import { Container, MovieData } from "./styles";

interface IProps {
  onClick?: any;
  name: string;
  imageURL: string;
}

export function Movie({ onClick, name, imageURL }: IProps) {
  return (
    <Container>
      <MovieData onClick={onClick} imageURL={imageURL}></MovieData>
    </Container>
  );
}
