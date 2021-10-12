import { Container } from "./styles";
import logo2 from "../../asserts/logo2.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalMenu from "../ModalMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <Container>
      <div>
        <Link className="image" to="/">
          <img src={logo2} alt="logo" />
        </Link>
      </div>
      {size < 760 ? (
        <GiHamburgerMenu onClick={handleOpenModal} className="icon-container" />
      ) : (
        <div>
          <Link to="/historia"> História </Link>
          <Link to="/instrutor"> Instrutor </Link>
          <Link to="/eventos"> Eventos </Link>
          <Link to="/contatos"> Contatos </Link>
        </div>
      )}
      {open && <ModalMenu setOpen={setOpen} />}
    </Container>
  );
};

export default Menu;
