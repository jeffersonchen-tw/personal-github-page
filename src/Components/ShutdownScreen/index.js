import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import "./style.css";

const ShutdownScreen = () => {
	const [selected, setSelected] = useState(0);
	return (
		<div className="background">
			<div className="main-panel">
				<div className="option-box">
					<div className="title-bar">
						<div>Boot Option</div>
					</div>
					<div className="list-container">
						<ul className="list">
							<li>resume</li>
							<li>source code</li>
							<li>send email</li>
						</ul>
					</div>
				</div>
				<div className="power-btn">
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