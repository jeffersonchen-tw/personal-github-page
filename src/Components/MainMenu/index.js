import TrayBar from "./TrayBar";
import LinkFolder from "./LinkFolder";
import WindowPanel from "./WindowPanel";
import "./style.css";
import { useState, useRef } from "react";

const MainMenu = () => {
  // window handling
  // TODO: using ref to close folder when clicking closing button on window
  const aboutRef = useRef();
  const projRef = useRef();
  const contactRef = useRef();
  // window opening
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const toggleDetailWindow = (index) => {
    if (index === 0) {
      setShowAbout(!showAbout);
    } else if (index === 1) {
      setShowProjects(!showProjects);
    } else {
      setShowContact(!showContact);
    }
  }

  return (
    <div>
      <div className="main-menu">
        <div className="folder-panel">
          <LinkFolder ref={aboutRef} title="About Me" openWindowHandler={
            () => toggleDetailWindow(0)} />
          <LinkFolder ref={projRef} title="My Projects" openWindowHandler={
            () => toggleDetailWindow(1)} />
          <LinkFolder ref={contactRef} title="Contact" openWindowHandler={
            () => toggleDetailWindow(2)} />
        </div>
        {showAbout && <WindowPanel title="About Me" closeWindowHandler={
          () => {
            toggleDetailWindow(0)
            aboutRef.current.closeByCloseButton(false);
          }} />}
        {showProjects && <WindowPanel title="My Projects" closeDetailWindow={
          () => {
            toggleDetailWindow(1)
            projRef.current.closeByCloseButton(false);
          }} />}
        {showContact && <WindowPanel title="Contact" closeDetailWindow={
          () => {
            toggleDetailWindow(2)
            contactRef.current.closeByCloseButton(false);
          }} />}
      </div>
      <TrayBar />
    </div>
  );
};

export default MainMenu;
