import { useEffect, useState } from "react";
import api from "../../services/api";
import { Movie } from "../Movie";
import { Container, Swipe } from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useKeyPress } from "../../utils/hooks/useKeyPress";
import { MovieDataModal } from "../MovieDataModal";
import { IMovieData } from "../../interfaces/Movies/movieData.interface";

export function PopularFilms() {
  const [movieDataModalShow, setMovieDataModalShow] = useState(false);
  const [movieList, setMovieList] = useState<IMovieData[]>([]);
  const [scrollX, setScrollX] = useState(0);
  const [movieDataModalParams, setMovieDataModalParams] = useState<number>();

  const keyLeftPressed = useKeyPress(37);
  const keyRightPressed = useKeyPress(39);

  function handleCloseNewMovieDataModal() {
    setMovieDataModalShow(false);
  }

  function handleOpenNewMovieDataModal(params: any) {
    setMovieDataModalParams(params);
    setMovieDataModalShow(true);
  }

  const handleClickLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    const mathSimple = window.innerWidth * 2 - scrollX;

    if (scrollX === mathSimple) {
      console.log(scrollX, mathSimple, x);
    }
    console.log(scrollX, mathSimple, x);
    setScrollX(x);
  };

  const handleClickRight = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);

    const listW = movieList.length * 220;
    const maxW = window.innerWidth - listW;

    if (maxW > x) {
      x = maxW - 10;
    }

    setScrollX(x);
  };

  useEffect(() => {
    if (keyLeftPressed) handleClickLeft();
    if (keyRightPressed) handleClickRight();
  }, [keyLeftPressed, keyRightPressed]);

  useEffect(() => {
    api
      .get(
        `popular?api_key=b546a16a0e4b1ba063c4f43fdda8c26c&language=pt-BR&page=1`
      )
      .then((response) => {
        let { results } = response.data;
        setMovieList(results);
      });
  }, []);

  return (
    <Container marginLeft={scrollX}>
      <Swipe id="left" onClick={handleClickLeft}>
        <FaAngleLeft size={34} />
      </Swipe>

      {movieList.map((movies) => {
        return (
          <Movie
            onClick={() => {
              handleOpenNewMovieDataModal(movies.id);
            }}
            name={movies.title}
            imageURL={movies.poster_path}
          />
        );
      })}

      <Swipe id="right">
        <FaAngleRight size={34} />
      </Swipe>

      <MovieDataModal
        isOpen={movieDataModalShow}
        id={movieDataModalParams}
        onRequestClose={handleCloseNewMovieDataModal}
      />
    </Container>
  );
}
