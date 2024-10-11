import React from "react";
import { useQuery } from "react-query";
import { fetchWordDefinition } from "./api";

const WordDefinition = ({ word }) => {
  const { data, error, isLoading } = useQuery(
    ["wordDefinition", word],
    () => fetchWordDefinition(word),
    {
      retry: false,
    },
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Could not fetch the definition. Please try again.</p>;
  }

  if (data && data.length > 0) {
    const meanings = data[0].meanings;

    // Filter out unwanted parts of speech (verbs, pronouns, etc.)
    const filteredMeanings = meanings.filter(
      (meaning) =>
        meaning.partOfSpeech !== "verb" && meaning.partOfSpeech !== "pronoun",
    );

    return (
      <div>
        {filteredMeanings.map((meaning, index) => (
          <div key={index}>
            {meaning.definitions.map((def, i) => (
              <p key={i}>{def.definition}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <p>No definition found for "{word}".</p>;
};

export default WordDefinition;
