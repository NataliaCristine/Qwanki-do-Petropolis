import { Container } from "./styles";
import graomestre from "../../asserts/graoMestre.jpg";
import mestreEvandro from "../../asserts/mestreEvandro.jpg";

const History = () => {
  return (
    <Container>
      <article>
        <section className="history">
          <h1> História </h1>
          <p>
            O Qwan Ki Do recebeu seu nome definitivo em 1981, mas buscou sua
            origem dentro das mais antigas técnicas das artes marciais. O Qwan
            Ki Do representa a conclusão de mais de 25 anos de estudos e buscas
            efetuadas por um dos maiores peritos em artes marciais
            sino-vietnamitas, o Grão Mestre Pham Xuan Tong, mais conhecido como
            mestre Tong. Mestre Pham Xuan Tong efetuou uma união dos mais
            considerados estilos de artes marciais sino-vietnamitas. No Vietnã,
            teve a honra e a chance de ser aluno do Grão Mestre Chau Qwan Ky,
            que com sua morte, deixou para o Mestre Pham Xuan Tong um
            testamento, nomeando-o como diretor geral de sua escola chinesa de
            artes marciais.
            <br />
            <strong> SURGIMENTO </strong> <br /> Mestre Chau Quan Ky dirigia-se,
            certo dia, para Govap (pequena aldeia ao sul do Vietnã), com suas
            plantas medicinais, quando foi surpreendido por uma tempestade. Um
            garoto de 10 anos chamado Phuam Xuan Tong surge abençoadamente e lhe
            oferece hospitalidade. Comovido, Chau Quan Ky traça o mapa astral da
            criança e solicita a seus pais que a deixem com ele, para receber os
            conhecimentos das artes marciais chinesas. O jovem Pham Xuan Tong
            treina duramente as posições de base nos anos que se seguiram. Aos
            14 anos a prática de seus exercícios chegava a 4 horas diárias. Aos
            19 anos já obtêm várias vitórias em competições nacionais e aos 2º é
            selecionado para integrar a Equipe de Treinadores Nacionais da
            Federação Vietnamita de Artes Marciais ( Tong Cuoc Quyen Thuat
            Vietnam). Estuda, simultaneamente à arte marcial, medicina
            tradicional, fisioterapia, digipuntura, osteopatia (massagem). Aos
            21 anos parte para a França, a fim de concluir seus estudos
            superiores. A partir de então (1968) começa a desenvolver uma nova
            arte marcial que arrebanha com muita rapidez muitos alunos. A
            perseverança e as qualidades pedagógicas do mestre Pham Xuan Tong o
            elevam ao nível dos grandes experts vietnamitas radicados no
            Ocidente. Essa ascensão, somada ao apoio dos alunos e amigos, o
            levam à criação da Federação Francesa de Qwan Ki Do, em maio de
            1981.
          </p>
        </section>
        <figure>
          <img src={graomestre} alt="Mestre" className="graoMestre" />
        </figure>
      </article>
      <article>
        <section className="mestre">
          <h2>Mestre Evandro</h2>
          <p>
            Mestre Evandro Crestani – praticante de artes marciais a mais de 40
            anos é Diretor Técnico do Qwan Ki Do ( arte marcial Vietnamita ) no
            Brasil desde 1998 e atualmente Representante pela América do Sul. Em
            1985 iniciou no Qwan Ki Do em São Paulo com o mestre Serge Baubil,
            introdutor da arte no Brasil, se tornando um dos principais
            discípulos desta arte marcial no País, chegando a graduação de Faixa
            Preta em março de 1988 aos seus 17 anos. Com a partida do mestre
            Serge para o Canadá em final de 1988, mestre Evandro decide dar
            continuidade na divulgação e expansão do QKD e começa a ministrar
            aulas particulares em sua casa, onde rapidamente agregou vários
            alunos e decide abrir a sua primeira academia de Qwan Ki Do em
            janeiro de 1989 e logo inaugura sua segunda academia em 1991.
            Durante o período de 1991 a 1998, mestre Evandro faz diversas
            apresentações ao publico participando de congressos, seminários e
            festivais de Artes Marciais em São Paulo, ministrando cursos,
            palestras em universidades, entre elas ( UNIP e FEFISA). Em 1999
            realiza em São Paulo o 1º seminário internacional de QKD trazendo ao
            Brasil o grão mestre Pham Xuan Tong, onde na ocasião participou do
            programa Jô Soares, no qual teve grande repercussão Nacional
            agregando vários representantes estaduais de QKD entre eles, Amapá,
            Amazonas, Alagoas e Rio de Janeiro.Desde então mestre Evandro viaja
            todos os anos para a Europa para treinar com o mestre Pham Xuan
            Tong, mantendo-se sempre atualizado. Em fevereiro de 2020 durante um
            seminário internacional realizado em São Paulo mestre Evandro foi
            promovido ao 6º dang, recebendo esta graduação diretamente das mãos
            do Grão mestre Pham Xuan Tong ( Fundador do Qwan ki Do ) em uma bela
            cerimônia realizada durante o seminário.Mestre Evandro Crestani é
            Faixa Preta 6º Dang Internacional, discípulo direto do grão mestre
            Fundador Pham Xuan Tong, Representante e Diretor Técnico do QKD no
            Brasil e Vice Presidente da Panamerican Qwan Ki Do Federation com
            sede no Canadá. Atualmente ministra Seminários e Palestras de QKD no
            Brasil e América do Sul para seus discípulos e é proprietário da
            empresa VIET SYSTEM ( Soluções em treinamentos ) especializada em
            Cursos de Defesa Pessoal e temas relacionados a segurança publica.
          </p>
        </section>
        <figure className="mestreEvandro">
          <img
            src={mestreEvandro}
            alt="Mestre Evandro"
            className="imageEvandro"
          />
        </figure>
      </article>
    </Container>
  );
};

export default History;
