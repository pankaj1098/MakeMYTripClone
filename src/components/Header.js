import "./Header.css";
import makeMyTriplogo from "./images/makeMyTriplogo.png";
import fligthLogo from "./images/flightLogo.png";
import HotelsLogo from "./images/HotelsLogo.png";
import Homestays from "./images/Homestays.png";
import TrainLogo from "./images/TrainLogo.png";
import BusLogo from "./images/BusLogo.png";
import moreLogo from "./images/moreLogo.png";
import cabLogo from "./images/cabLogo.png";
import HolidayPackages from "./images/HolidayPackages.png";
import ForexLogo from "./images/ForexLogo.png";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img
            style={{ height: "50px", width: "150px" }}
            src={makeMyTriplogo}
            alt="MakeMyTrip Logo"
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "32px", height: "26px" }}
                src={fligthLogo}
                alt="flight"
              />
            </div>
            <div>
              <p style={{ marginTop: "-10px" }}>Flights</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "32px", height: "26px" }}
                src={HotelsLogo}
                alt="Hotel"
              />
            </div>
            <div>
              <p style={{ marginTop: "-7px" }}>Hotels</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img style={{ width: "26" }} src={Homestays} alt="HomeStays" />
            </div>
            <div>
              <p style={{ marginTop: "-10px" }}>Homestays</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "32px", height: "26px" }}
                src={HolidayPackages}
                alt="HolidayPackages"
              />
            </div>
            <div>
              <p style={{ marginTop: "-10px" }}>Holiday Packages</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "32px", height: "26px" }}
                src={TrainLogo}
                alt="train"
              />
            </div>
            <div>
              <p style={{ marginTop: "-6px" }}>Trains</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{ width: "32px", height: "26px" }}
                src={BusLogo}
                alt="bus"
              />
            </div>
            <div>
              <p style={{ marginTop: "-10px" }}>Buses</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "32px", height: "26px" }}
              src={cabLogo}
              alt="Cab"
            />

            <p style={{ marginTop: "-6px" }}>Cabs</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "32px", height: "26px" }}
              src={ForexLogo}
              alt="forexLogo"
            />

            <p style={{ marginTop: "-6px" }}>Forex</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "32px", height: "26px" }}
              src={moreLogo}
              alt="morelogo"
            />

            <div className="dropdown">
              <a href="/More">More</a>
              <div className="dropdown-content">
                <a href="/charter">Charter flight</a>
                <a href="/Where2Go">Where2Go</a>
                <a href="/Nearbygetaways">Nearby getaways</a>
                <a href="/GiftCards">GiftCards</a>
                <a href="/TripMoney">Trip Money</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <select
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
            }}
          >
            <option value="option1">INR </option>
            <option value="option2">USD </option>
            <option value="option3">EUR </option>
            <option value="option3">AED </option>
          </select>
          <div style={{ marginTop: "20px" }}>
            <img src={logo} alt="logo" />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>Login or</p>
            <p
              style={{
                marginTop: "-17px",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Create Account
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
