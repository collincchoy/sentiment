import React from "react";
import { ReactComponent as Positive } from "../assets/Sentiment/Positive.svg";
import { ReactComponent as Neutral } from "../assets/Sentiment/Neutral.svg";
import { ReactComponent as Negative } from "../assets/Sentiment/Negative.svg";
import { roundTo } from "../utils";

type SentimentProps = {
  confidence: number;
  value: "positive" | "neutral" | "negative";
};

const Sentiment: React.FC<SentimentProps> = ({ confidence, value }) => {
  return (
    <div>
      {value === "positive" ? (
        <Positive />
      ) : value === "neutral" ? (
        <Neutral />
      ) : (
        <Negative />
      )}
      <h1>{roundTo(confidence, 3)}</h1>
    </div>
  );
};

export default Sentiment;
