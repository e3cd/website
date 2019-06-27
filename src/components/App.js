import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Index";
import Menu from "./Menu/Index";
import Resume from "./Main/Resume";
import Projects from "./Main/Projects";
import Skills from "./Main/Skills";
import About from "./Main/About";
import Footer from "./Footer/Index";
import ProjectModal from "./Showcase/ProjectModal";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Menu__container">
          <Menu />
        </div>
        <div className="App__container">
          <Footer />
          <div className="App__content">
            <Switch>
              <Route path="/resume" exact component={Resume} />
              <Route path="/projects" exact component={Projects} />

              <Route path="/skills" exact component={Skills} />
              <Route path="/about" exact component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
