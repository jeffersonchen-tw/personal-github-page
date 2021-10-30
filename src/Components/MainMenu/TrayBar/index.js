import "./style.css";
import Clock from "./Clock";
import { FaPowerOff } from "react-icons/fa";

const TrayBar = (props) => {
  return (
    <div className="footer">
      <div className="power-botton" onClick={props.powerbtnHandler}>
        <FaPowerOff style={{
          color: "#e8e6e3",
          height: '2.4vh'
       }} />
      </div>
      <div className="clock">
        <Clock />
      </div>
    </div>
  );
};

export default TrayBar;
