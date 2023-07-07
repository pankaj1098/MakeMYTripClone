import { Button } from "@mui/base";
import React from "react";

const SelectBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "20px",
        // paddingBottom: "20px",
        border: "0px solid #4a4a4a",
        gap: "5px",
        backgroundColor: "#0c2540",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <div
          style={{
            border: "0px solid",
            backgroundColor: " #4a4a4a",
            width: "215px",
            height: "44.8px",
          }}
        >
          <select
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#53b2fe",
            }}
          >
            <option value="option1">CITY, AREA OR PROPERTY </option>
            <option value="option2">USD </option>
            <option value="option3">EUR </option>
            <option value="option3">AED </option>
          </select>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              color: "white",
              margin: 0,
              marginLeft: "5px",
            }}
          >
            Delhi
          </p>
        </div>

        <div
          style={{
            border: "0px solid",
            backgroundColor: " #4a4a4a",
            width: "215px",
            height: "44.8px",
          }}
        >
          <select
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#53b2fe",
            }}
          >
            <option value="option1">CHECK-IN </option>
            <option value="option2">USD </option>
            <option value="option3">EUR </option>
            <option value="option3">AED </option>
          </select>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              color: "white",
              margin: 0,
              marginLeft: "5px",
            }}
          >
            Fri, 7 Jul 2023
          </p>
        </div>

        <div
          style={{
            border: "0px solid",
            backgroundColor: " #4a4a4a",
            width: "215px",
            height: "44.8px",
          }}
        >
          <select
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#53b2fe",
            }}
          >
            <option value="option1">CHECK-OUT </option>
            <option value="option2">USD </option>
            <option value="option3">EUR </option>
            <option value="option3">AED </option>
          </select>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              color: "white",
              margin: 0,
              marginLeft: "5px",
            }}
          >
            Sun, 9 Jul 2023
          </p>
        </div>

        <div
          style={{
            border: "0px solid",
            backgroundColor: " #4a4a4a",
            width: "215px",
            height: "44.8px",
          }}
        >
          <select
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#53b2fe",
            }}
          >
            <option value="option1">ROOM & GUESTS </option>
            <option value="option2">USD </option>
            <option value="option3">EUR </option>
            <option value="option3">AED </option>
          </select>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "16px",
              color: "white",
              margin: 0,
              marginLeft: "5px",
            }}
          >
            1 Room,2 Adults
          </p>
        </div>
        <div>
          <Button
            style={{
              fontSize: "18px",
              height: "39.6px",
              fontWeight: "bold",
              border: "none",
              width: "176px",
              color: "white",
              borderRadius: "34px",
              backgroundColor: "#53b2fe",
            }}
          >
            SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectBar;
