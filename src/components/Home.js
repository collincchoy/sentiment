import React, { useEffect, useState } from "react";

const debounce = (f, ms) => {
  let ref;
  return (...args) => {
    if (ref) {
      clearTimeout(ref);
    } else {
      ref = setTimeout(() => f(...args), ms);
    }
  };
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const predict = debounce(async query => {
    const req = await fetch(
      `https://api.wit.ai/message?v=20200321&q=${query}`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_WIT_TOKEN}`
        }
      }
    );

    const data = await req.json();
    console.log(data);
    setSentiment(data);
  }, 1000);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const sendMessage = e => {
    e.preventDefault();
    predict(query);
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={sendMessage}>
        <label name="search_query">Say something:</label>
        <input
          name="search_query"
          type="text"
          autoComplete={false}
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <code>{JSON.stringify(sentiment)}</code>
    </>
  );
};

export default Home;
