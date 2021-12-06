import { useEffect, useState } from "react";
import api from "../../services/api";
import { Movie } from "../Movie";
import { Container, Swipe } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useKeyPress } from "../../utils/hooks/useKeyPress";

interface IDataResponse {
  title: string;
  id: string;
  poster_path: string;
  backdrop_path: string;
}

export function PopularFilms() {
  const [movieList, setMovieList] = useState<IDataResponse[]>([]);
  const [scrollX, setScrollX] = useState(0);

  document.addEventListener("keydown", function (e) {
    const { key } = e;

    switch (key) {
      case "ArrowLeft":
        handleClickLeft();
        break;
    }
  });

  useEffect(() => {
    api
      .get(
        `popular?api_key=b546a16a0e4b1ba063c4f43fdda8c26c&language=pt-BR&page=1`
      )
      .then((response) => {
        const { results } = response.data;

        setMovieList(results);
      });
  }, []);

  const handleClickLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    const stopNav = scrollX > window.innerWidth / 2;

    if (stopNav) {
      x = 0;
    }

    setScrollX(x);
  };

  return (
    <Container marginLeft={scrollX}>
      <Swipe id="left" onClick={handleClickLeft}>
        <FaAngleLeft size={34} />
      </Swipe>

      {movieList.map((movies) => {
        return <Movie name={movies.title} imageURL={movies.poster_path} />;
      })}

      <Swipe id="right">
        <FaAngleRight size={34} />
      </Swipe>
    </Container>
  );
}
