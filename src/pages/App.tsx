import { Outlet } from "react-router-dom";
import "./App.css";
import homeImg from "../assets/home.png";
import settingsImg from "../assets/settings.png";
import profileImg from "../assets/profile.png";
import logoutImg from "../assets/logout.png";

function App() {
    return (
        <div className="app">
            <div className="app-side-bar">
                <img className="_option" src={homeImg}></img>
                <img className="_option" src={settingsImg}></img>
                <img className="_option" src={profileImg}></img>
                <img className="_option" src={logoutImg}></img>
            </div>
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
