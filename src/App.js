// Library
import React from "react";

// Local
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="exercise-feed">
                <div className="_day">
                    <h1>Monday, 12th March</h1>
                    <hr />
                    <div className="_exercise">
                        <span>Bicep Curl</span>
                        <span>3 sets</span>
                        <span>10 reps</span>
                        <span>10kg</span>
                    </div>
                    <div className="_exercise">
                        <span>Pushup</span>
                        <span>15</span>
                    </div>
                    <div className="_rest _short"></div>
                    <div className="_exercise">
                        <span>Pushup</span>
                        <span>12</span>
                    </div>
                    <div className="_rest _medium"></div>
                    <div className="_exercise">
                        <span>Pushup</span>
                        <span>10</span>
                    </div>
                </div>
                <div className="_day">
                    <h1>Wednesday, 14th March</h1>
                    <hr />
                    <div className="_exercise">
                        <span>Bicep Curl</span>
                        <span>3 sets</span>
                        <span>10 reps</span>
                        <span>10kg</span>
                    </div>
                </div>
            </div>
            <div className="exercise-input"></div>
        </div>
    );
}

export default App;
