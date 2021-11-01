import { FaPowerOff } from "react-icons/fa";
import "./style.css";

const ShutdownScreen = () => {
	return (
		<div className="background">
			<div className="main-panel">
				<div className="option-box">
				</div>
				<FaPowerOff style={{
					color: '#c0bdb8',
					fontSize: '2em'
				}} />
			</div>
		</div>
	)
}

export default ShutdownScreen;