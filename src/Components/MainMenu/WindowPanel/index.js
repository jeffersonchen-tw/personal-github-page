import TitleBar from "./TitleBar";
import "./style.css";
import { useState, useEffect, useRef } from "react";

const panelStyle = {
    position: 'absolute',
    width: '45vw',
    height: '40vw',
    borderRadius: '2px',
    zIndex: 5,
    backgroundColor: '#262a28',
    border: '1.5px solid #d3d3d3',
    '@media (max-width: 500px)': {
    },
}

const WindowPanel = (props) => {
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x:0, y:0});
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px`
    }
    return () => {
    }
  }, [position])

  const mouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }
  return (
    <div className="window"
    ref={ ref }
    style={ panelStyle }
    onMouseMove={mouseMove}
    onMouseDown={() => setPressed(true)}
    onMouseUp={() => setPressed(false)}
    >
      <TitleBar title={props.title} />
      <p style={{color: '#ffffff'}}>{ pressed ? "Dragging..." : "Press to drag" }</p>
    </div>
  );
};

export default WindowPanel;
