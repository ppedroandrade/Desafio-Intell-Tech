import React from "react";


import "./App.css";
import Print from "./Contexts/Components-Context";
import { Home } from "./Pages/Home";

const App = () => (
  <div className="App">
    <Print>
    <Home />
    </Print>
  </div>
);

export default App;
