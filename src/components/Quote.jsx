import { useRef } from "react";

const quotes = [
  "포기하지 마라",
  "오늘도 성장 중",
  "노력은 배신하지 않는다",
  "이스터에그♥"
];

export default function Quote() {
  const quoteRef = useRef(null);

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteRef.current.textContent = quotes[random];
  };

  return (
        <div className="quote-box">
        <h3 ref={quoteRef}>오늘의 명언</h3>
        <button onClick={changeQuote}>랜덤 명언</button>
        </div>
  );
}
