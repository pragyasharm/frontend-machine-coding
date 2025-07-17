import { useEffect, useState } from "react";
import "./styles.css";

export default function SearchPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cachedResult, setCachedResult] = useState({});

  const fetchData = async () => {
    if (input == "") {
      setResult([]);
      return;
    }
    if (cachedResult[input]) {
      setResult(cachedResult[input]);
      return;
    }
    console.log("Api call", input);
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );

    const data = await response.json();
    console.log(data);
    setResult(data?.recipes);
    setCachedResult((pre) => ({ ...pre, [input]: data?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);

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
          onChange={(e) => setInput(e.target.value)}
        />
        {showResult && result.length > 0 ? (
          <div className="result-container">
            {result.map((item) => {
              return (
                <span className="result" key={item.id}>
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
