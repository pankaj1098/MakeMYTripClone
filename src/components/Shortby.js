import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";

const Shortby = () => {
  return (
    <div
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        border: "0px solid",
        backgroundColor: "#daf8fe",
      }}
    >
      <div style={{ display: "flex", gap: "35px" }}>
        <p style={{ fontWeight: "bold" }}>SORT BY:</p>
        <p style={{ fontWeight: "bold" }}>Popular</p>
        <p style={{ fontWeight: "bold" }}>
          User Rating{" "}
          <span style={{ fontWeight: "normal" }}>(Highest First)</span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Price <span style={{ fontWeight: "normal" }}>(Highest First)</span>
        </p>
        <p style={{ fontWeight: "bold" }}>
          Price <span style={{ fontWeight: "normal" }}>(Lowest First)</span>
        </p>
        <button
          style={{
            display: "flex",
            height: "36.5px",
            width: "107px",
            marginTop: "10px",
          }}
        >
          {" "}
          <RoomIcon sx={{ marginTop: "5px" }} />
          <p style={{ marginTop: "10px" }}>View Map</p>
        </button>

        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 250,
            height: 36.5,
            marginTop: "7px",
          }}
        >
          <IconButton type="button" aria-label="search">
            <SearchIcon fontSize="small" />
          </IconButton>
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Search for locality/Hotel name"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Shortby;
