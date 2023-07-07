import { CheckBox, Margin } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HotelDetail from "./HotelDetail";

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "100px",
        paddingRight: "100px",
        gap: "20px",
        position: "relative",
      }}
    >
      <div>
        <p style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "20px" }}>
          Select Filters
        </p>
        <Box
          sx={{
            display: "flex",
            height: "271px",
            width: "230px",

            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "16px",
              margin: "5px",
            }}
          >
            Suggested For You
          </p>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label>Last Minute Deal</label>
            </Grid>
          </Grid>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label>Free Cancellation</label>
            </Grid>

            <Grid item xs={2}>
              <span>(430)</span>
            </Grid>
          </Grid>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label>Pay @Hotel Available</label>
            </Grid>

            <Grid item xs={2}>
              <span>(0)</span>
            </Grid>
          </Grid>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label>Breakfast Included</label>
            </Grid>

            <Grid item xs={2}>
              <span>(321)</span>
            </Grid>
          </Grid>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label style={{ textAlign: "left" }}>
                Breakfast+Lunch/Dinner Included
              </label>
            </Grid>

            <Grid item xs={2}>
              <span style={{ marginRight: "20px" }}>(122)</span>
            </Grid>
          </Grid>

          <Grid
            style={{ fontSize: "14px", fontWeight: 400 }}
            container
            spacing={2}
          >
            <Grid item xs={10}>
              <input type="checkbox" />
              <label>All Meals Included</label>
            </Grid>

            <Grid item xs={2}>
              <span>(7)</span>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <p
          style={{
            fontSize: "28px",
            lineHeight: "28px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Recently Viewed
        </p>

        <HotelDetail />
      </div>
    </div>
  );
};

export default Body;
