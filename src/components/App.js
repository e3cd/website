import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Index";
import Menu from "./Menu/Index";

import Projects from "./Main/Projects";
import Skills from "./Main/Skills";
import About from "./Main/About";
import Footer from "./Footer/Index";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="Menu__container">
          <Menu />
        </div>
        <div className="App__container">
          <Footer />
          <div className="App__content">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/projects" component={Projects} />

              <Route path="/skills" component={Skills} />
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
