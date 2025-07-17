import { useEffect, useState } from "react";
import "./styles.css";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cachedResult, setCachedResult] = useState({});
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const fetchData = async () => {
    if (input == "") {
      setResult([]);
      return;
    }
    if (cachedResult[input]) {
      setResult(cachedResult[input]);
      return;
    }
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );

    const data = await response.json();
    setResult(data?.recipes);
    setCachedResult((pre) => ({ ...pre, [input]: data?.recipes }));
  };

  const handleKeyDown = (e) => {
    if (result.length === 0 && input.length === 0) return;
    if (e.key === "ArrowUp") {
      setHighlightedIndex((pre) => {
        return pre <= 0 ? result.length - 1 : --pre;
      });
    }
    if (e.key === "ArrowDown") {
      setHighlightedIndex((pre) => {
        return pre < result.length - 1 ? ++pre : 0;
      });
    }
    if (e.key === "Enter") {
      setInput(result[highlightedIndex].name);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);
    setHighlightedIndex(-1);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className="App">
      <h1>Auto complete search bar</h1>
      <h2>Search recipes</h2>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Enter the words"
          value={input}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setInput(e.target.value)}
        />
        {showResult && result.length > 0 ? (
          <div className="result-container">
            {result.map((item, index) => {
              return (
                <span
                  className={`result ${
                    index === highlightedIndex ? " highlighted" : ""
                  }`}
                  key={item.id}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        ) : input.length > 0 && showResult ? (
          <p>No result found</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
