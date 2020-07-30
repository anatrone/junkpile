import React from "react";
import Logo from "../../Assets/Img/logo.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="GabsFlix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo desenho
      </Button>
    </nav>
  );
}

export default Menu;
