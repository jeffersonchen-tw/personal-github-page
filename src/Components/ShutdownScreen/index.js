import { FaPowerOff } from "react-icons/fa";
import "./style.css";

const ShutdownScreen = () => {
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
							<li>clear cache</li>
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