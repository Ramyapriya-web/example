import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa";
import DetailsOfUser from "../DetailsOfUser";
import "./index.css";

const HomePage = (props) => {
  const { detList, loginList, location, timer } = props;
  const { imgUrl, qrUrl, code } = detList;
  const { nameInp } = loginList;

  return (
    <div className="home-cont">
      <FaArrowLeft
        style={{
          color: "black",
          fontSize: "20px",
          alignSelf: "flex-start",
        }}
      />
      <img src={imgUrl} className="img" alt={nameInp} />
      <div className="card-containers">
        <p className="pp1"> {nameInp} </p>
        <img src={qrUrl} className="imge1" alt={nameInp} />
        <p className="pp2"> User Code </p>
        <div className="code-but">{code}</div>
      </div>
      <div className="container-list">
        <h1 className="heads"> Entry Log </h1>
        <div>
          <ul className="cont-lis">
            {loginList.map((eachUser) => (
              <DetailsOfUser
                info={eachUser.nameInp}
                key={eachUser.id}
                add={location}
                timeDet={format(timer, "dd MM yyyy hh:mm a")}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
