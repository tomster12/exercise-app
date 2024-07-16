import "./App.css";
import GlobalFeedView from "./components/GlobalFeedView.tsx";
import homeImg from "./assets/home.png";
import settingsImg from "./assets/settings.png";
import profileImg from "./assets/profile.png";
import logoutImg from "./assets/logout.png";

function App() {
    return (
        <div className="app">
            <div className="app-side-bar">
                <img className="_option" alt="" src={homeImg}></img>
                <img className="_option" alt="" src={settingsImg}></img>
                <img className="_option" alt="" src={profileImg}></img>
                <img className="_option" alt="" src={logoutImg}></img>
            </div>
            <div className="app-content">
                <GlobalFeedView />
            </div>
        </div>
    );
}

export default App;
