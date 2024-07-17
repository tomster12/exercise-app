import "./App.css";
import GlobalFeedView from "./components/GlobalFeedView.tsx";
import homeImg from "./assets/home.png";
import settingsImg from "./assets/settings.png";
import profileImg from "./assets/profile.png";
import logoutImg from "./assets/logout.png";

function App() {
    return (
        <div className="app">
            <div className="side-bar">
                <img className="side-bar-option" src={homeImg}></img>
                <img className="side-bar-option" src={settingsImg}></img>
                <img className="side-bar-option" src={profileImg}></img>
                <img className="side-bar-option" src={logoutImg}></img>
            </div>
            <div className="app-content">
                <GlobalFeedView />
            </div>
        </div>
    );
}

export default App;
