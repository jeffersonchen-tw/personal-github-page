import { RiRestartLine } from "react-icons/ri";
import "./style.css";

const ShutdownScreen = () => {
	return (
		<div className="background">
			<div className="panel">
				<div className="restart-btn">
					<RiRestartLine style={{
						width: '3vh'
					}}/>
				</div>
			</div>
		</div>
	)
}

export default ShutdownScreen;