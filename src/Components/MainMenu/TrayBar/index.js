import './style.css'
import { FaPowerOff } from 'react-icons/fa'

const TrayBar = () => {
    return (
        <div className="footer">
        <div className="power-botton">
            <FaPowerOff style={{color: '#ffffff'}}/>
        </div>
        <div className="clock">
        </div>
        </div>
    )
}

export default TrayBar;