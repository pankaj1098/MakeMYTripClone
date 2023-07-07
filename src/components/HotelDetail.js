import { Box, Paper, Rating } from "@mui/material";
import React from "react";
import makeLogo from "./images/makeLogo.png";
import Ratings from "./images/Ratings.png";
import lightIcon from "./images/lightIcon.png";

const HotelDetail = () => {
  return (
    <Paper elevation={10}>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          border: "1px solid grey",
          width: "939px",

          ":hover": {
            backgroundColor: " #ebfafa",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            position: "relative",
            boxSizing: "border-box",

            width: "755px",
            padding: "14px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <div>
              <img
                style={{ width: "239px", height: "162px" }}
                src="https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-640w.jpg"
                alt="h1"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <div>
                <img
                  style={{ width: "56px", height: "50px" }}
                  src="https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-640w.jpg"
                  alt="h1"
                />
              </div>
              <div>
                <img
                  style={{ width: "56px", height: "50px" }}
                  src="https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-640w.jpg"
                  alt="h1"
                />
              </div>
              <div>
                <img
                  style={{ width: "56px", height: "50px" }}
                  src="https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-640w.jpg"
                  alt="h1"
                />
              </div>
              <div>
                <img
                  style={{ width: "56px", height: "50px" }}
                  src="https://lirp.cdn-website.com/11191c87/dms3rep/multi/opt/building1-feded8e1-640w.jpg"
                  alt="h1"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <img
                style={{ height: "27px", width: "125px" }}
                src={makeLogo}
                alt="makeLogo"
              />
            </div>
            <div>
              <img src={Ratings} alt="Rating" />
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div>
                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "22px",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  Hotel Sun Park
                </p>
              </div>
              <div style={{ marginTop: "18px", margin: "0px" }}>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
              </div>
            </div>
            <div>
              <p style={{ margin: 0 }}>
                <span style={{ color: "#53b2fe" }}>
                  Zirakpur Panchkula Kalka Highway, Zirakpur
                </span>{" "}
                | 9.6 km from Chandigarh International Airport
              </p>
            </div>
            <div>
              <p
                style={{
                  display: "inline-flex",
                  border: "1px solid grey",
                  borderRadius: "4px",
                  fontSize: "11px",
                  backgroundColor: "grey",
                  padding: "5px",
                  height: "15px",
                  weidth: "40px",
                  fontWeight: "bold",
                }}
              >
                Couple Friendly
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#1a7971",
                  fontSize: "12px",
                  lineHeight: "12px",
                  margin: "0px",
                }}
              >
                {" "}
                ✓ Free cancellation till check-In
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#1a7971",
                  fontSize: "12px",
                  lineHeight: "12px",
                  lineHeight: "12px",
                }}
              >
                {" "}
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                position: "relative",
                marginTop: -7,
              }}
            >
              <div>
                <img
                  style={{ marginTop: "8px" }}
                  src={lightIcon}
                  alt="lightIcon"
                />
              </div>
              <p
                style={{
                  color: "#8b572a",
                  fontSize: "12px",
                  lineHeight: "12px",
                  margin: 10,
                }}
              >
                {" "}
                100% Money Back Guarantee on Clean rooms with TV,AC & Free Wi-Fi
              </p>
            </div>
          </div>
        </div>

        <Box
          style={{
            display: "flex",
            padding: "20px",
            alignItems: "flex-end",

            flexDirection: "column",
            boxSizing: "border-box",
            border: "1px solid grey",
            height: "257px",
            width: "184px",
            backgroundColor: "#f2f2f2",
            ":hover": {
              backgroundColor: " #ccf5ff",
            },
          }}
        >
          <p
            style={{
              color: "#9b9b9b",
              fontSize: "16px",
              lineHeight: "16px",
              textDecorationLine: "line-through",
              margin: 5,
              marginTop: "90px",
            }}
          >
            ₹ 2,699
          </p>

          <p
            style={{
              color: "black",
              fontSize: "26px",
              fontWeight: "bold",
              lineHeight: "26px",
              margin: 5,
            }}
          >
            ₹ 2,318
          </p>

          <p
            style={{
              color: "#4a4a4a",
              fontSize: "12px",

              lineHeight: "12px",
              margin: 5,
            }}
          >
            + ₹ 418 taxes & fees
          </p>

          <p
            style={{
              color: "#4a4a4a",
              fontSize: "14px",
              lineHeight: "16px",
              marginTop: "0px",
              marginBottom: "15px",
            }}
          >
            Per Night
          </p>

          <p
            style={{
              color: "#0084ff",
              fontSize: "11px",
              fontWeight: "bold",
              lineHeight: "11px",
              margin: 0,
            }}
          >
            Login to unlock the best
          </p>
          <p
            style={{
              color: "#0084ff",
              fontSize: "11px",
              fontWeight: "bold",
              lineHeight: "11px",
              margin: 1,
            }}
          >
            deals
          </p>
        </Box>
      </Box>
    </Paper>
  );
};

export default HotelDetail;
