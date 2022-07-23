import React from "react";

import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Pdf from "./Components/Pdf";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Container>
      <Pdf />
    </Container>
    <Footer />
  </div>
);

export default App;
