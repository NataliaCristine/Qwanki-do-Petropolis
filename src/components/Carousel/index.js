import certificado1 from "../../asserts/Professor/certificado1.jpeg";
import certificado2 from "../../asserts/Professor/certificado2.jpeg";
import equipe from "../../asserts/Professor/equipe.jpeg";
import equipemestres from "../../asserts/Professor/equipemestres.jpeg";

import Carousel from "react-elastic-carousel";
import { Container } from "./styles";

const Carrousel = () => {
  const imagesComissaoTecnica = [
    certificado1,
    certificado2,
    equipe,
    equipemestres,
  ];

  return (
    <Container>
      <Carousel>
        {imagesComissaoTecnica.map((item, index) => (
          <div key={index}>
            <img src={item} alt="Comissao-técnica" />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Carrousel;
