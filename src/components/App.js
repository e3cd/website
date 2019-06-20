import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Resume from "./Main/Resume";
import Projects from "./Main/Projects";
import Skills from "./Main/Skills";
import About from "./Main/About";
import Footer from "./Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App__container">
        <Header />
        <Menu />
        <Switch>
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/skills/" exact component={Skills} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
