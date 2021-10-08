import "./style.css";
import Clock from "./Clock";
import { FaPowerOff } from "react-icons/fa";

const TrayBar = () => {
  return (
    <div className="footer">
      <div className="power-botton">
        <FaPowerOff style={{ color: "#e3e1de" }} />
      </div>
      <div className="clock">
        <Clock />
      </div>
    </div>
  );
};

export default TrayBar;
