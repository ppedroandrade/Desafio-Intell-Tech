import { useState } from "react";

import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import usePrint from "../../Contexts/Components-Context/Services/usePrint";
import Container from "./Components/Container";
import Pdf from "./Components/Pdf/pdf";

export const Home = () => {
  const [img, setImg] = useState();
  const [showGraphic, setShowGraphic] = useState(false);
  const { componentsPdfRef } = usePrint();

  return (
    <>
      <Header setImg={setImg} setShowGraphic={setShowGraphic} />
      <Container>
        <Pdf img={img} showGraphic={showGraphic} ref={componentsPdfRef} />
      </Container>
      <Footer />
    </>
  );
};
