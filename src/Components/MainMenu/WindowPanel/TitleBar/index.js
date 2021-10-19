import './style.css';

const TitleBar = (props) => {
    return (
        <div className="bar-container">
            <div className="box">
            <span className="title">{props.title}</span>
            </div>
        </div>
    )
};

export default TitleBar;