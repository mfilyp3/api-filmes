import { Container, MovieData } from "./styles";

interface IProps {
  name: string;
  imageURL: string;
}

export function Movie({ name, imageURL }: IProps) {
  return (
    <Container>
      <MovieData imageURL={imageURL}></MovieData>
    </Container>
  );
}
