import React, { useState } from "react";
import Sentiment from "./Sentiment";
import { Sentiment as SentimentType, Message } from "../types";

// const debounce = (f, ms) => {
//   let ref;
//   return (...args) => {
//     if (ref) {
//       clearTimeout(ref);
//     } else {
//       ref = setTimeout(() => f(...args), ms);
//     }
//   };
// };

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
    predict(query);
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={sendMessage}>
        <label htmlFor="search_query">Say something:</label>
        <input
          name="search_query"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <code>{JSON.stringify(sentiment)}</code>
      {sentiment && <Sentiment {...sentiment} />}
    </>
  );
};

export default Home;
