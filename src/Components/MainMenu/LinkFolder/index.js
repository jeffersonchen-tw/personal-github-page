import React, { forwardRef, useState, useImperativeHandle } from "react";
import "./style.css";

const LinkFolder = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  function handleClickOnFolder() {
    // function from parent
    props.openWindowHandler()
    setOpen(!open)
  }
  // close folder when clicking on close button on titlebar of window
  useImperativeHandle(ref, () => ({
    closeByCloseButton(closed) {
      setOpen(closed);
    }
  }),[])

  return (
    <div className="container">
      <div className="folder" onClick={handleClickOnFolder}>
        <div className="cover" opened={open.toString()} />
        <div className="paper" />
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
});

export default LinkFolder;
