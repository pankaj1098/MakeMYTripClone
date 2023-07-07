import React from "react";

const AddressBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "20px",
        paddingBottom: "20px",
        border: "0px solid #4a4a4a",
        gap: "5px",
        backgroundColor: "#0c2540",
      }}
    >
      <div style={{ display: "inline-flex", gap: "10px" }}>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "12px",
            fontWeight: "bold",
            color: "#008cff",
            margin: 0,
          }}
        >
          Home{" "}
        </p>
        <span
          style={{
            fontSize: "12px",
            lineHeight: "12px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Hotels and more in Chandigarh Capital Region
        </span>
      </div>
      <div>
        <p
          style={{
            fontSize: "24px",
            lineHeight: "24px",
            fontWeight: "bold",
            color: "white",
            margin: 0,
          }}
        >
          576 Properties in Chandigarh Capital Region
        </p>
      </div>
    </div>
  );
};

export default AddressBar;
