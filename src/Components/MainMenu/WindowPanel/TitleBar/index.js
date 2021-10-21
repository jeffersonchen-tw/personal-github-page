import { IoCloseSharp } from "react-icons/io5"
import './style.css';

const TitleBar = (props) => {
    return (
        <div className="bar-container">
            <span className="title">{props.title}</span>
            <div className="close-btn">
                <IoCloseSharp style={{
                    color: '#e8e6e3',
                    height: '5em'
                }}/>
            </div>
        </div>
    )
};

export default TitleBar;