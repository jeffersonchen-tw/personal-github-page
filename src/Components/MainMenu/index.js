import TrayBar from "./TrayBar";
import LinkFolder from "./LinkFolder";
import WindowPanel from "./WindowPanel";
import AboutWindow from "./src/AboutWindow";
import ProjectWindow from "./src/ProjectWindow";
import ContactWindow from "./src/ContactWindow";
import PowerButtonPopup from "./PowerButtonPopup"
import "./style.css";
import { useState, useRef } from "react";

const MainMenu = () => {
  // popop menu of power button
  const [showPowerButtonPopup, setShowPowerButtonPopup] = useState(false);
  const powerButtonPopupToggler = () => {
    console.log("clicked")
    setShowPowerButtonPopup(!showPowerButtonPopup);
  }
  // window handling
  // using ref to close folder when clicking closing button on window
  const aboutFolderRef = useRef();
  const projFolderRef = useRef();
  const contactFolderRef = useRef();
  // window opening
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  //
  const [openedCount, setOpenedCount] = useState(0);
  const openWindowHandler = (index) => {
    toggleDetailWindow(index)
    setOpenedCount(openedWindow);
  }
  // count the opening window
  const openedWindow = () => {
    const countingList = [showAbout, showProjects, showContact];
    var result = 0;
    for(var i=0;i<3;i++) {
      if (countingList[i] === true) {
        result+=1
      }
    }
    return result;
  }
  //
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
          <LinkFolder ref={aboutFolderRef} title="About Me" openWindowHandler={
            () => openWindowHandler(0)} />
          <LinkFolder ref={projFolderRef} title="My Projects" openWindowHandler={
            () => openWindowHandler(1)} />
          <LinkFolder ref={contactFolderRef} title="Contact" openWindowHandler={
            () => openWindowHandler(2)} />
        </div>
        {showAbout && <WindowPanel count={openedCount} title="About Me" innerView={<AboutWindow />}
          closeWindowHandler={
            () => {
              toggleDetailWindow(0)
              aboutFolderRef.current.closeByCloseButton(false);
            }} />}
        {showProjects && <WindowPanel count={openedCount} title="My Projects" innerView={<ProjectWindow />}
          closeWindowHandler={
            () => {
              toggleDetailWindow(1)
              projFolderRef.current.closeByCloseButton(false);
            }} />}
        {showContact && <WindowPanel count={openedCount} title="Contact" innerView={<ContactWindow />}
          closeWindowHandler={
            () => {
              toggleDetailWindow(2)
              contactFolderRef.current.closeByCloseButton(false);
            }} />}
      </div>
      <div>
        {showPowerButtonPopup && <PowerButtonPopup />}
      </div>
      <TrayBar powerbtnHandler={powerButtonPopupToggler} />
    </div>
  );
};

export default MainMenu;
