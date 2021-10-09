import "./style.css";
import Clock from "./Clock";
import { FaPowerOff } from "react-icons/fa";

const TrayBar = () => {
  return (
    <div className="footer">
      <div className="power-botton">
        <FaPowerOff style={{
          color: "#000000",
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
