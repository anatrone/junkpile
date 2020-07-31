import React from "react";
import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";
import { Main } from "./styles";

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
