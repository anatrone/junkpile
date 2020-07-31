import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Img/logo.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Junkpile" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/imagem">
        Novo desenho
      </Button>
    </nav>
  );
}

export default Menu;
