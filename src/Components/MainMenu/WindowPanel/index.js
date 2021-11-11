import TitleBar from "./TitleBar";
import {
  useState, useEffect, useRef,
} from "react";

const WindowPanel = (props) => {
  const [firstLoad, setFirstLoad] = useState(true);
  
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
  //
  const innerRef = useRef();
  //
  const movePosition = (moveX, moveY) => {
    setPosition({
      x: position.x + moveX,
      y: position.y + moveY
    })
  }

  const autoOffsetWindow = (count) => {
    if (!firstLoad) { return }
    if (count === 0) {
      movePosition(0, 0)
    } else if (count === 1) {
      movePosition(50, 50)
    } else {
      movePosition(80, 80)
    }
    setFirstLoad(false);
  }

  useEffect(() => { 
    autoOffsetWindow(props.count)
    if (innerRef.current) {
      innerRef.current.style.transform = `translate(${position.x}px, ${position.y}px`;
    }
    return () => { };
  });

  const mouseMove = (event) => {
    if (pressed) {
      movePosition(event.movementX, event.movementY)
    }
  };

  return (
    <div
      className="window"
      ref={innerRef}
      style={isMobile ? mobilePanelStyle : pcPanelStyle}
      onMouseMove={mouseMove}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      <TitleBar title={props.title} closeWindowHandler={props.closeWindowHandler} />
      {props.innerView}
    </div>
  );
};

export default WindowPanel;
