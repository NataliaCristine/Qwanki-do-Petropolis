import { Conteiner } from "./styles";
import logo2 from "../../asserts/logo2.jpg";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <Conteiner>
      <div>
        <img src={logo2} alt="logo" />
      </div>
      <div>
        <Link to="/historia"> História </Link>
        <button> Professor </button>
        <button> Eventos </button>
        <button> Contatos </button>
      </div>
    </Conteiner>
  );
};

export default Menu;
