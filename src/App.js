import { Component } from "react";
import { v4 } from "uuid";
import {
  FaEnvelope,
  FaBriefcase,
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaUserAlt,
  FaUnlockAlt,
} from "react-icons/fa";
import LogIn from "./components/LogIn";
import "./App.css";

class App extends Component {
  state = {
    isClick: false,
    nameInp: "",
    contactList: "",
  };

  clickFunc = () => {
    this.setState((PrevState) => ({
      isClick: !PrevState.isClick,
    }));
  };

  onChangeName = (event) => {
    this.setState({ nameInp: event.target.value });
  };

  addingFun = (event) => {
    event.preventDefault();
    const { nameInp } = this.state;
    const newList = {
      id: v4(),
      nameInp,
    };
    this.setState((PrevState) => ({
      contactList: [...PrevState.contactList, newList],
      nameInp: "",
    }));
  };

  render() {
    const { isClick, contactList } = this.state;
    return (
      <div>
        {isClick === true ? (
          <LogIn listingUser={contactList} />
        ) : (
          <div className="app-cont">
            <h1 className="head"> TEST APP </h1>
            <div className="card-cont">
              <div className="card">
                <div className="ct1">
                  <FaBriefcase style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para"> Name </p>
                </div>
                <input
                  type="text"
                  className="name-inp"
                  onChange={this.onChangeName}
                />
              </div>
              <div className="card">
                <div className="ct1">
                  <FaEnvelope style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para"> email ID </p>
                </div>
                <input type="text" className="name-inp" />
              </div>
              <div className="card">
                <div className="ct1">
                  <FaUserAlt style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para"> User ID </p>
                </div>
                <input type="text" className="name-inp" />
              </div>
              <div className="card">
                <div className="ct1">
                  <FaUnlockAlt style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para"> password </p>
                </div>
                <input type="text" className="name-inp" />
              </div>
              <button className="butt" type="submit" onClick={this.addingFun}>
                REGISTER NOW
              </button>
              <p className="para1">
                -------------------- or --------------------
              </p>
              <div className="card1">
                <FaGoogle
                  style={{
                    padding: "5px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "15px",
                    color: "black",
                    backgroundColor: "white",
                    fontSize: "10px",
                  }}
                />
                <p className="para2"> Sign up with Google </p>
              </div>
              <div className="card1">
                <FaFacebookF
                  style={{
                    width: "30px",
                    padding: "5px",
                    height: "30px",
                    borderRadius: "15px",
                    color: "black",
                    backgroundColor: "white",
                    fontSize: "10px",
                  }}
                />
                <p className="para2"> Sign up with Facebook </p>
              </div>
              <div className="card1">
                <FaApple
                  style={{
                    width: "30px",
                    padding: "5px",
                    height: "30px",
                    borderRadius: "15px",
                    color: "black",
                    backgroundColor: "white",
                    fontSize: "10px",
                  }}
                />
                <p className="para2"> Sign up with Apple </p>
              </div>
              <p className="para3"> Already having an account </p>
              <button className="btt1" type="submit" onClick={this.clickFunc}>
                <p className="para4">Click here to sign in</p>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
