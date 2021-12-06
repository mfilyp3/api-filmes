import { Container, Navigate, Logo } from "./styles";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container className={isOpen ? "responsive" : ""}>
      <div className="left">
        <FaBars id="responsiveShow" size={15} onClick={handleOpen} />
        <Logo>iMovie</Logo>

        <Navigate>
          <li>Séries</li>
          <li>Filmes</li>
        </Navigate>
      </div>

      <div className="right">
        <input type="text" placeholder="Pesquise aqui..." />
      </div>
    </Container>
  );
}
