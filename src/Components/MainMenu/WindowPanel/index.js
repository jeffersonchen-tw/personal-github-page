import TitleBar from "./TitleBar";
import { useState, useEffect, useRef } from "react";

const WindowPanel = (props) => {
  // TODO: change the initial window position
  const pcPanelStyle = {
    position: "absolute",
    width: "75vw",
    height: "50vw",
    borderRadius: "2px",
    zIndex: 5,
    backgroundColor: "#262a28",
    border: "2px solid #d3d3d3",
  };
  const mobilePanelStyle = {
    position: "absolute",
    width: "50vh",
    height: "80vh",
    borderRadius: "2px",
    zIndex: 5,
    backgroundColor: "#262a28",
    border: "1.5px solid #d3d3d3",
  };

  const detectWindow = () => {
    const isMobileDevice = window.matchMedia("(max-width: 600px)").matches;
    return isMobileDevice
  }
  window.addEventListener("resize", () => {
    setIsMobile(detectWindow);
  })
  const [isMobile, setIsMobile] = useState(detectWindow);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px`;
    }
    return () => { };
  }, [position]);

  const mouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };
  return (
    <div
      className="window"
      ref={ref}
      style={isMobile ? mobilePanelStyle : pcPanelStyle}
      onMouseMove={mouseMove}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <TitleBar title={props.title} closeWindowHandler={props.closeWindowHandler}/>
      <p style={{ color: "#ffffff" }}>
        {pressed ? "Dragging..." : "Press to drag"}
      </p>
    </div>
  );
};

export default WindowPanel;
