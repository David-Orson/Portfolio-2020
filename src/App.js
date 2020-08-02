import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles.css";

const App = () => {
  return (
    <div id="top">
      <Header />
      <Home />
    </div>
  );
};

export default App;
