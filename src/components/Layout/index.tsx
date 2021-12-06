import { Header } from "../Header";
import { PopularFilms } from "../PopularFilms";
import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <Header />
      <PopularFilms />
    </Container>
  );
}
