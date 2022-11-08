import React, { Component } from "react";
import style from "./Styles/app.module.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AbcTask from "./components/AbcTask.jsx";

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header></Header>
        <AbcTask></AbcTask>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
