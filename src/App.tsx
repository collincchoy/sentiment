import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const StyledApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
