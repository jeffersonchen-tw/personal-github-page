import React, { useState } from "react";
import "./style.css";

const LinkFolder = (props) => {
  const [open, setOpen] = useState(0);

  function handleClick() {
    if (open === 1) {
      setOpen(0);
    } else {
      setOpen(1);
    }
  }

  return (
    <div className="container" onClick={props.openWindowHandler}>
      <div className="folder" onClick={handleClick}>
        <div className="cover" opened={open} />
        <div className="paper" />
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default LinkFolder;
