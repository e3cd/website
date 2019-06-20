import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      <div className="App__container">
        <Switch>
          <Route path="/resume" exact component={resume} />
          <Route path="/projects" exact component={projects} />
          <Route path="/skills/" exact component={skills} />
          <Route path="/about" exact component={about} />
        </Switch>
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
