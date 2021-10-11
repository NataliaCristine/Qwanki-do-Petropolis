import Carrousel from "../../components/Carousel";
import { Container } from "./styles";
import Julio from "../../asserts/Professor/Julio.jpeg";
import Milton from "../../asserts/Professor/Milton.jpeg";

const Professor = () => {
  const instructores = [
    { image: Julio, name: "Julio", graducao: "Faixa-Preta" },
    { image: Milton, name: "Milton", graducao: "Faixa-Preta" },
  ];

  return (
    <Container>
      <h1 className="eventos-carousel"> Comissão Técnica em Eventos </h1>
      <div className="carousel">
        <Carrousel />
      </div>
      <h2> Comissão Técnica: </h2>
      <ul className="conteiner-cart-principal">
        {instructores.map((item, index) => (
          <li className="conteiner-cart" key={index}>
            <figure>
              <img src={item.image} alt="Instrutores" />
            </figure>
            <strong>{item.name}</strong>
            <p>
              <strong>{item.graducao}</strong>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Professor;
