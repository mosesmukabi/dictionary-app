import React, { useState } from "react";
import WordDefinition from "./WordDefinition";
import "./App.css";

const DictionarySearch = () => {
  const [word, setWord] = useState("");

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className="input-div">
      <input
        className="input"
        type="text"
        value={word}
        onChange={handleInputChange}
        placeholder="Enter a word..."
        style={{ padding: "10px", fontSize: "16px", width: "300px" }}
      />
      <div className="results">{word && <WordDefinition word={word} />}</div>
    </div>
  );
};

export default DictionarySearch;
