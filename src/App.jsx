// https://supabase.com/docs/guides/getting-started/tutorials/with-react

import "./App.css";
import GlobalFeedView from "./components/GlobalFeedView";

function App() {
    return (
        <div className="app">
            <div className="app-side-bar">
                <div className="_option" />
                <div className="_option" />
                <div className="_option" />
                <div className="_option" />
            </div>
            <div className="app-content">
                <GlobalFeedView />
            </div>
        </div>
    );
}

export default App;
