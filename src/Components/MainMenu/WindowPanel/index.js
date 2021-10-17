import { useEffect } from "react";
import TitleBar from "./TitleBar";
import "./style.css";

const WindowPanel = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./drag.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="window" id={props.id} >
      <TitleBar title={props.title} />
    </div>
  );
};

export default WindowPanel;
