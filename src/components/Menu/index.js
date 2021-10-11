import { Container } from "./styles";
import logo2 from "../../asserts/logo2.jpg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Container>
      <div>
        <Link className="image" to="/">
          <img src={logo2} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/historia"> História </Link>
        <Link to="/professor"> Professor </Link>
        <Link to="/eventos"> Eventos </Link>
        <Link to="/contatos"> Contatos </Link>
      </div>
    </Container>
  );
};

export default Menu;
