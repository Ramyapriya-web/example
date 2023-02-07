import { Component } from "react";
import { FaArrowLeft, FaUserAlt, FaUnlockAlt } from "react-icons/fa";
import Location from "../Location";

import "./index.css";

const randomPictures = [
  {
    id: 0,
    imgUrl:
      "https://static9.depositphotos.com/1144472/1095/i/950/depositphotos_10953362-stock-photo-happy-smiling-business-woman-over.jpg",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "L O 1 V 6 E",
  },
  {
    id: 1,
    imgUrl:
      "https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "V R 8 7 O P",
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHc8W1_fi-lAkj_VOF9sJmBknWJ8iEdAJvMg&usqp=CAU",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "2 7 U C 5 F",
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7eiCJ9cBXkfDRCwSOT8ovqqVV_-EWnFoIYOQfQ5SHDVXFBg0N31vPsE7YgGsTG0N-1zw&usqp=CAU",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "Z Y 8 0 I 2",
  },
  {
    id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvED2K9VyDvIg3smnKBTDcRJwGLLgYI5iUqg&usqp=CAU",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "W X Y 2 6 7",
  },
  {
    id: 5,
    imgUrl:
      "https://media.istockphoto.com/id/589098884/photo/portrait-of-handsome-teen-boy-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=U5aIe-Gvb0tuaVm8u1eUnpXTs1Ecjt_Lv2Zq2dD1mJE=",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "H 5 O 4 4 E",
  },
  {
    id: 6,
    imgUrl:
      "https://www.maxpixel.net/static/photo/1x/Person-Male-Face-Portrait-Human-Teenage-Man-Boy-6040022.jpg",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "T D 3 0 G F",
  },
  {
    id: 7,
    imgUrl:
      "https://i.pinimg.com/564x/e6/4b/13/e64b13cbacb4d10ce5ea7f74de59c7a6.jpg",
    qrUrl: "https://www.qrcode-monkey.com/img/default-preview-qr.svg",
    code: "7 5 P Q 8 T",
  },
];

class LogIn extends Component {
  state = { isClick1: false, date: new Date() };

  getFilteredDet = () => {
    const ind = Math.floor(Math.random() * 8);
    const filteredRes = randomPictures.filter((each) => each.id === ind);
    return filteredRes[0];
  };

  clickLog = () => {
    this.setState((PrevState) => ({
      isClick1: !PrevState.isClick1,
    }));
  };

  render() {
    const { isClick1, date } = this.state;
    const { listingUser } = this.props;

    return (
      <div>
        {isClick1 === true ? (
          <Location
            det={listingUser}
            time={date}
            filteredResult={this.getFilteredDet()}
          />
        ) : (
          <div className="container1">
            <FaArrowLeft
              style={{
                color: "black",
                fontSize: "20px",
                alignSelf: "flex-start",
              }}
            />
            <h1 className="heading"> TEST APP </h1>
            <div className="container2">
              <div className="bt-cont">
                <button className="bt1" type="button">
                  USER
                </button>
                <button className="bt2" type="button">
                  OWNER
                </button>
              </div>
              <div className="container3">
                <div className="ctt1">
                  <FaUserAlt style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para10"> User ID </p>
                </div>
                <input type="text" className="inp" />
              </div>
              <div className="container3">
                <div className="ctt1">
                  <FaUnlockAlt style={{ color: "orange", fontSize: "18px" }} />
                  <p className="para10"> Password </p>
                </div>
                <input type="text" className="inp" />
              </div>
              <button className="log-bt" type="submit" onClick={this.clickLog}>
                {" "}
                LOGIN{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default LogIn;
