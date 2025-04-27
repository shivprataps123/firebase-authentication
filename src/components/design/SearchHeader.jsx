import React from "react";
import { CiSearch, CiFilter } from "react-icons/ci";

function SearchHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // width: "50%",
        background: "white",
        paddingTop: "27px",
        paddingBottom: "32px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          gap: "8px",
        }}
      >
        <span>
          <CiSearch style={{ fontSize: "20px" }} />
        </span>
        <span
          style={{
            textAlign: "left",
            font: "normal normal medium 12px/14px Gilroy",
            letterSpacing: "0px",
            color: "#9A9A9E",
          }}
        >
          Search...
        </span>
      </div>
      <div
        style={{
          paddingRight: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span>
          <CiFilter style={{ fontSize: "20px" }} />
        </span>
        <span>filters</span>
      </div>
    </div>
  );
}

export default SearchHeader;
