import { useEffect, useState } from "react";
import { FaStarHalfAlt, FaThumbsUp } from "react-icons/fa";
import ReactModal from "react-modal";
import { IMovieData } from "../../interfaces/Movies/movieData.interface";
import api from "../../services/api";
import { Badge, Container } from "./styles";

ReactModal.setAppElement("#root");

interface IMovieDataProps {
  isOpen: boolean;
  onRequestClose(): void;
  id?: number;
}

export function MovieDataModal({
  id,
  isOpen,
  onRequestClose,
}: IMovieDataProps) {
  const [movieData, setMovieData] = useState<IMovieData>();
  useEffect(() => {
    if (id === undefined) return;
    api
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b546a16a0e4b1ba063c4f43fdda8c26c&language=pt-BR`
      )
      .then((response) => {
        const { data } = response;
        setMovieData(data);
      });
  }, [id]);

  const dateFormated = new Intl.DateTimeFormat("pt-BR").format(new Date());
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h4>{movieData?.title}</h4>
        <p>
          <strong>Sinopse:</strong> {movieData?.overview}
        </p>
        <p>
          Este filme
          <b>{movieData?.status === "Released" ? "já foi" : "ainda será"}</b>
          lançado.
        </p>
        <p>
          <FaStarHalfAlt /> Este filme está com uma média de
          <b>{movieData?.vote_average}</b>
        </p>
        <p>
          <FaThumbsUp />
          <b>{movieData?.vote_count}</b> votaram neste filme
        </p>
        Generos:
        {movieData?.genres
          ?.map((genres) => {
            return genres.name;
          })
          .join(",")}
      </Container>
    </ReactModal>
  );
}
