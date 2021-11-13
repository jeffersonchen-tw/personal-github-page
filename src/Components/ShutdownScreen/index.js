import "./style.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import ContactPanel from "./ContactPanel";

const ShutdownScreen = () => {
    // for navigation
    const history = useHistory();
    // go to root
    const restart = () => {
        history.push("/");
    }
    // go to github page
    const goGithhub = () => {
        window.location.replace("https://github.com/jeffersonchen-tw/personal-github-page");
    }
    // for list item selection
    const [selected, setSelected] = useState(0);
    const [arroyKeyDownCount, setArroyKeyDownCount] = useState(0);
    const isSelected = (index) => {
        if (index === selected) {
            return "true"
        }
        return "false"
    }
    // select by arrow key
    const moveUp = () => {
        setArroyKeyDownCount(arroyKeyDownCount + 1);
        if (selected > 0) {
            setSelected(selected - 1);
        } else {
            setSelected(2);
        }
    }
    const moveDown = () => {
        if (selected < 2) {
            setSelected(selected + 1);
        } else {
            setSelected(0);
        }
    }
    const selectByKey = (e) => {
        if (arroyKeyDownCount > 3) { return }
        if (e.keyCode === 37) {
            // left
            moveUp();
        } else if (e.keyCode === 38) {
            // up
            moveUp();
        } else if (e.keyCode === 39) {
            // right
            moveDown();
        } else if (e.keyCode === 40) {
            // down
            moveDown();
        }
    }
    // select by mouse
    const selectByMouse = (index) => {
        setSelected(index);
    }
    //
    const keyDetection = (e) => {
        selectByKey(e);
        // press enter to comfirm the selection
        if (e.keyCode === 13) {
            if (selected === 0) {
                // resume
                restart();
            } else if (selected === 1) {
                // go gitHub
                goGithhub();
            } else if (selected === 2) {
                // send email
            }
        }
    }
    //
    useEffect(() => {
        const interval = setInterval(() => {
            setArroyKeyDownCount(0);
        }, 2000);
        window.addEventListener("keydown", keyDetection);
        return () => {
            window.removeEventListener("keydown", selectByKey);
            clearInterval(interval);
        }
    })
	return (
		<div className="background">
			        <div className="main-panel">
            <div className="option-box">
                <div className="title-bar">
                    <div>
                        <span>Option</span><span className="sub-title">- press enter to continue</span>
                    </div>
                </div>
                <div className="list-container">
                    <ul className="list">
                        <li is-selected={isSelected(0)} onClick={() => selectByMouse(0)}>resume</li>
                        <li is-selected={isSelected(1)} onClick={() => selectByMouse(1)}>get the source code</li>
                        <li is-selected={isSelected(2)} onClick={() => selectByMouse(2)}>send email</li>
                    </ul>
                </div>
            </div>
            <div className="power-btn" onClick={restart}>
                <FaPowerOff style={{
                    color: '#c0bdb8',
                    fontSize: '1.8em'
                }} />
            </div>
        </div>
		</div>
	)
}

export default ShutdownScreen;