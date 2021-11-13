import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import "./style.css";

const ShutdownScreen = () => {
	// for navigation
	const history = useHistory();
	const restart = () => {
		history.push("/");
	}
	// for list item selection
	const [selected, setSelected] = useState(0);
	const isSelected = (index) => {
		if (index === selected) {
			return "true"
		}
		return "false"
	}

	return (
		<div className="background">
			<div className="main-panel">
				<div className="option-box">
					<div className="title-bar">
						<div>Boot Option</div>
					</div>
					<div className="list-container">
						<ul className="list">
							<li is-selected={isSelected(0)}>resume</li>
							<li is-selected={isSelected(1)}>source code</li>
							<li is-selected={isSelected(2)}>send email</li>
						</ul>
					</div>
				</div>
				<div className="power-btn" onClick={restart}>
					<FaPowerOff style={{
						color: '#c0bdb8',
						fontSize: '1.8em'
					}}/>
				</div>
			</div>
		</div>
	)
}

export default ShutdownScreen;