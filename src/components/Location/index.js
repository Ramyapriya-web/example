import { Component } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import HomePage from "../HomePage";

import "./index.css";

class Location extends Component {
  state = { click1: false, inpVal: "" };

  isOnClick = () => {
    this.setState((PrevState) => ({
      click1: !PrevState.click1,
    }));
  };

  onChangeInp = (event) => {
    this.setState({ inpVal: event.target.value });
  };

  render() {
    const { click1, inpVal } = this.state;
    const { det, filteredResult, time } = this.props;

    return (
      <div>
        {click1 === true ? (
          <HomePage
            detList={filteredResult}
            loginList={det}
            location={inpVal}
            timer={time}
          />
        ) : (
          <div className="card-loc">
            <div className="cards1">
              <FaArrowLeft
                style={{
                  color: "black",
                  fontSize: "20px",
                  alignSelf: "flex-start",
                }}
              />
              <img src={filteredResult.imgUrl} className="image" alt={det} />
            </div>
            <div className="cards2">
              <div className="sear-input">
                <FaSearch style={{ color: "white", fontSize: "20px" }} />
                <input
                  type="search"
                  className="sear-inp"
                  placeholder="search location"
                  onChange={this.onChangeInp}
                />
              </div>
              <div
                style={{ width: "30vw", height: "70vh", textAlign: "center" }}
              >
                <img
                  src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                  className="img1"
                  alt="Google"
                />
              </div>
              <button
                className="conf-bt"
                type="submit"
                onClick={this.isOnClick}
              >
                Confirm your Location
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Location;
