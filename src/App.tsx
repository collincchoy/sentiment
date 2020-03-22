import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";

const StyledApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <Helmet
        defaultTitle="Sensitive Tim"
        titleTemplate="Sensitive Time - %s"
      />
      <StyledApp>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
