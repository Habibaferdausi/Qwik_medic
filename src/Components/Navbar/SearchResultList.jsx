import React from "react";
import SearchResult from "./SearchResult";
import "./SearchResultsList.css";

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList;
