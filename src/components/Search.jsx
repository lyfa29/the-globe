import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ filterBySearch }) => {
  return (
    <form className="position-relative custom-text-color">
      <BiSearchAlt2 className="fs-1 ms-4 position-absolute search-icon custom-text-color" />
      <input
        onChange={(event) => {
          filterBySearch(event.target.value.toLowerCase());
        }}
        className="py-3 border-0 shadow rounded-2 pe-2 bg-elements custom-text-color"
        type="text"
        placeholder="search for a country..."
      />
    </form>
  );
};

export default Search;
