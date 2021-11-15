import { useState } from "react";
import ContactPanel from "./ContactPanel";
import OptionPanel from "./OptionPanel";
import "./style.css";

const ShutdownScreen = () => {
    // panel toggling
    const [showContactPanel, setShowContactPanel] = useState(false);
    return (
        <div className="background">
            <div className="main-panel">
                {showContactPanel ? <OptionPanel /> : <ContactPanel />}
            </div>
        </div>
    )
}

export default ShutdownScreen;