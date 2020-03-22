import React from "react";
import { Helmet } from "react-helmet";

const About = () => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About</h1>

    <h3>
      <span role="img" aria-label="Waving Hand">
        👋
      </span>{" "}
      Hi there!
    </h3>
    <article>
      <p>
        This app is powered behind-the-scenes by
        <a href="https://wit.ai/">
          Wit - a Natural Language Processing API
        </a>{" "}
        that's public and free-to-use!
      </p>
    </article>
  </div>
);

export default About;
