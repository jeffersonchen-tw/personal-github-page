import TrayBar from "./TrayBar";
import LinkFolder from "./LinkFolder";
import "./style.css";

const MainMenu = () => {
  return (
    <div>
      <div className="main-menu">
        <div className="folder-panel">
          <LinkFolder title="About Me" />
          <LinkFolder title="My Projects" />
          <LinkFolder title="Contact" />
        </div>
      </div>
      <TrayBar />
    </div>
  );
};

export default MainMenu;
