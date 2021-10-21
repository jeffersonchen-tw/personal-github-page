import TrayBar from "./TrayBar";
import LinkFolder from "./LinkFolder";
import WindowPanel from "./WindowPanel";
import "./style.css";
import { useState } from "react";

const MainMenu = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const openDetailWindow = (index) => {
    if (index === 0) {
      setShowAbout(true);
    } else if (index === 1) {
      setShowProjects(true);
    } else {
      setShowContact(true);
    }
  }
  return (
    <div>
      <div className="main-menu">
        <div className="folder-panel">
          <LinkFolder title="About Me" openWindowHandler={
            () => {
              openDetailWindow(0)
            }}/>
          <LinkFolder title="My Projects" openWindowHandler={
            () => {
              openDetailWindow(1)
            }
          }/>
          <LinkFolder title="Contact" openWindowHandler={
            () => {
              openDetailWindow(2)
            }
          }/>
        </div>
        { showAbout && <WindowPanel title="About Me" />}
        { showProjects && <WindowPanel title="My Projects" />}
        { showContact && <WindowPanel title="Contact" />}
      </div>
      <TrayBar />
    </div>
  );
};

export default MainMenu;
