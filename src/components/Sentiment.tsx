import React from "react";
import { ReactComponent as Positive } from "../assets/Sentiment/Positive.svg";
import { ReactComponent as Neutral } from "../assets/Sentiment/Neutral.svg";
import { ReactComponent as Negative } from "../assets/Sentiment/Negative.svg";
import { roundTo } from "../utils";
import { Sentiment as SentimentType } from "../types";

type SentimentProps = {} & SentimentType;

const Sentiment: React.FC<SentimentProps> = ({ confidence, value }) => {
  const timsThoughts =
    value === "positive"
      ? "liked that."
      : value === "neutral"
      ? "was okay with that."
      : "did not like that.";
  return (
    <div>
      {value === "positive" ? (
        <Positive />
      ) : value === "neutral" ? (
        <Neutral />
      ) : (
        <Negative />
      )}
      <h1>
        Tim is {roundTo(confidence, 3) * 100}% sure that he {timsThoughts}
      </h1>
    </div>
  );
};

export default Sentiment;
