import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Sentiment from "./Sentiment";
import { Sentiment as SentimentType, Message } from "../types";

const StyledForm = styled.form`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 2px;
  border-color: darkblue;
  font-size: 16px;
  margin-left: 15px;
`;

const StyledButton = styled.button`
  padding: 10px;
  margin: 1px;
  border-radius: 5px;
  background-color: aquamarine;
  border: none;
  width: auto;
  height: 100%;

  &:hover {
    background-color: #5cb597;
    cursor: pointer;
  }
`;

const Home = () => {
  const [query, setQuery] = useState("");
  const [sentiment, setSentiment] = useState<SentimentType>();
  const predict = async (query: string) => {
    const req = await fetch(
      `https://api.wit.ai/message?v=20200321&q=${query}`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_WIT_TOKEN}`
        }
      }
    );

    const data: Message = await req.json();
    console.log(data);
    setSentiment(data.entities.sentiment?.[0]);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  const sendMessage: React.FormEventHandler = e => {
    e.preventDefault();
    query && predict(query);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <article>
        <h1>Home</h1>
        <StyledForm onSubmit={sendMessage}>
          <label htmlFor="search_query">Say something:</label>
          <StyledInput
            name="search_query"
            type="text"
            autoComplete="off"
            value={query}
            onChange={handleInputChange}
          />
          <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
        <code>{JSON.stringify(sentiment)}</code>
        {sentiment && <Sentiment {...sentiment} />}
      </article>
    </>
  );
};

export default Home;
