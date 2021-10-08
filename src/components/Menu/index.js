import { Conteiner } from "./styles";
import logo2 from "../../asserts/logo2.jpg";

const Menu = () => {
  return (
    <Conteiner>
      <div>
        <img src={logo2} alt="logo" />
      </div>
      <div>
        <button> História </button>
        <button> Professor </button>
        <button> Eventos </button>
        <button> Contatos </button>
      </div>
    </Conteiner>
  );
};

export default Menu;
