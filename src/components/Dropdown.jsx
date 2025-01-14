import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  // false is on default, i.e the dropdown shouldn't show when you visit the site

  const options = [
    "All Countries",
    "Africa",
    "Americas",
    "Antarctic",
    "Asia",
    "Europe",
    "oceania",
  ];

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="d-flex align-items-center gap-5 shadow p-3 rounded-2 bg-elements custom-text-color position-relative
      dropdown-display"
    >
      <p className="mb-0">{selectedRegion}</p>
      <RiArrowDownSLine
        style={{
          transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.9s ease-in-out",
        }}
      />
      {toggleDropdown && (
        <ul className="position-absolute dropdown-options bg-elements px-0 py-2 rounded-2">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(
                    option === "All Countries" ? "Filter by Region" : option
                  );
                  filterByRegion(option);
                }}
                className="px-3 py-1"
              >
                {option}
              </li>
            );
          })}
        </ul>
        //  the bracket  with toggle down and && is called conditional rendering and is used to make a drop down follow promptly it transformation
      )}
    </div>
  );
};

export default Dropdown;
