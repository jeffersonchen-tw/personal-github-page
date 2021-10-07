import "./style.css";

const LinkFolder = (props) => {
  return (
    <div className="container">
      <div className="folder"></div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default LinkFolder;
