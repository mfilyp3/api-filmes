import { Header } from "../Header";
import { PopularFilms } from "../PopularFilms";
import { Container, Content } from "./styles";

export function Layout() {
  return (
    <Container>
      <Header />

      <Content>
        <h4>Filmes do momento</h4>
        <PopularFilms />
      </Content>
    </Container>
  );
}
