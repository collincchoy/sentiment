import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";

const StyledApp = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const PageContainer = styled.div`
  flex: 1;
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
        <PageContainer>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </PageContainer>
      </StyledApp>
    </Router>
  );
}

export default App;
