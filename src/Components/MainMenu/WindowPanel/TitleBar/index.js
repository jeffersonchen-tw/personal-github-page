import './style.css';

const TitleBar = (props) => {
    return (
        <div className="bar-container">
            <span className="title">{props.title}</span>
        </div>
    )
};

export default TitleBar;