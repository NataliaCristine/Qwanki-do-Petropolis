import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Nav } from "./styles";

const Footer = () => {
  return (
    <Nav>
      <h3>Desenvolvedoras:</h3>
      <ul>
        <li>
          <span>Natalia</span>
        </li>
        <li>
          <a
            href="http://github.com/NataliaCristine"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nataliacristine-nunes/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <span>Priccila</span>
        </li>
        <li>
          <a
            href="https://github.com/DivinitySystem"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/priccila-lucem/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </Nav>
  );
};

export default Footer;
