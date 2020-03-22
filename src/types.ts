export type Sentiment = {
  confidence: number;
  value: "positive" | "neutral" | "negative";
};

export type Message = {
  _text: string; // "things";
  entities: {
    sentiment?: [Sentiment];
  };
  msg_id: string; // "14XHQ0XLoSZSq04G9";
};
