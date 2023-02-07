import "./index.css";

const DetailsOfUser = (props) => {
  const { info, add, timeDet } = props;

  return (
    <li className="list-props">
      <p className="paragraph"> {info} </p>
      <p className="paragraph"> {add} </p>
      <p className="paragraph"> {timeDet} </p>
    </li>
  );
};

export default DetailsOfUser;
