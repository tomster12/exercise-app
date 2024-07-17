import "./Main.css";
import Dropdown from "../components/Dropdown";
import DatePicker from "../components/DatePicker";
import ScrollableDiv from "../components/ScrollableDiv";

function Main() {
    return (
        <div className="main">
            <div className="exercise-feed-container">
                <ScrollableDiv>
                    <div className="exercise-feed">
                        <div className="_day">
                            <h1>Sunday, 11th March</h1>
                            <hr />
                            <div className="_exercise">
                                <span className="_type">Rowing</span>
                                <div className="_muscle _legs">
                                    <img alt="" />
                                    <span>Legs</span>
                                </div>
                                <div className="_measurement">
                                    <span>860 </span>
                                    <span>metres</span>
                                </div>
                                <div className="_measurement">
                                    <span>354 </span>
                                    <span>strokes</span>
                                </div>
                                <div className="_measurement">
                                    <span>10 </span>
                                    <span>minutes</span>
                                </div>
                            </div>
                        </div>
                        <div className="_day">
                            <h1>Monday, 12th March</h1>
                            <hr />
                            <div className="_exercise-group">
                                <div className="_exercise">
                                    <span className="_type">Bicep Curl</span>
                                    <div className="_muscle _biceps">
                                        <img alt="" />
                                        <span>Biceps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>10 </span>
                                        <span>reps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>5 </span>
                                        <span>kgs</span>
                                    </div>
                                </div>
                                <div className="_rest _short">
                                    <span>30 seconds rest</span>
                                </div>
                                <div className="_exercise">
                                    <span className="_type">Bicep Curl</span>
                                    <div className="_muscle _biceps">
                                        <img alt="" />
                                        <span>Biceps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>10 </span>
                                        <span>reps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>5 </span>
                                        <span>kgs</span>
                                    </div>
                                </div>
                                <div className="_rest _short">
                                    <span>30 seconds rest</span>
                                </div>
                                <div className="_exercise">
                                    <span className="_type">Bicep Curl</span>
                                    <div className="_muscle _biceps">
                                        <img alt="" />
                                        <span>Biceps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>5 </span>
                                        <span>reps</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>5 </span>
                                        <span>kgs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="_exercise-group">
                                <div className="_exercise">
                                    <span className="_type">Pushup</span>
                                    <div className="_muscle _chest">
                                        <img alt="" />
                                        <span>Chest</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>15 </span>
                                        <span>reps</span>
                                    </div>
                                </div>
                                <div className="_rest _medium">
                                    <span>2 minute rest</span>
                                </div>
                                <div className="_exercise">
                                    <span className="_type">Pushup</span>
                                    <div className="_muscle _chest">
                                        <img alt="" />
                                        <span>Chest</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>15 </span>
                                        <span>reps</span>
                                    </div>
                                </div>
                                <div className="_rest _none">
                                    <span>No rest</span>
                                </div>
                                <div className="_exercise">
                                    <span className="_type">Pushup</span>
                                    <div className="_muscle _chest">
                                        <img alt="" />
                                        <span>Chest</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>12 </span>
                                        <span>reps</span>
                                    </div>
                                </div>
                                <div className="_rest _long">
                                    <span>5 minutes rest</span>
                                </div>
                                <div className="_exercise">
                                    <span className="_type">Pushup</span>
                                    <div className="_muscle _chest">
                                        <img alt="" />
                                        <span>Chest</span>
                                    </div>
                                    <div className="_measurement">
                                        <span>10 </span>
                                        <span>reps</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_day">
                            <h1>Wednesday, 14th March</h1>
                            <hr />
                            <div className="_exercise">
                                <span className="_type">Bicep Curl</span>
                                <div className="_muscle _biceps">
                                    <img alt="" />
                                    <span>Biceps</span>
                                </div>
                                <div className="_measurement">
                                    <span>15 </span>
                                    <span>reps</span>
                                </div>
                                <div className="_measurement">
                                    <span>10 </span>
                                    <span>kgs</span>
                                </div>
                            </div>
                            <div className="_exercise">
                                <span className="_type">Bicep Curl</span>
                                <div className="_muscle _biceps">
                                    <img alt="" />
                                    <span>Biceps</span>
                                </div>
                                <div className="_measurement">
                                    <span>15 </span>
                                    <span>reps</span>
                                </div>
                                <div className="_measurement">
                                    <span>10 </span>
                                    <span>kgs</span>
                                </div>
                            </div>
                            <div className="_exercise">
                                <span className="_type">Bicep Curl</span>
                                <div className="_muscle _biceps">
                                    <img alt="" />
                                    <span>Biceps</span>
                                </div>
                                <div className="_measurement">
                                    <span>15 </span>
                                    <span>reps</span>
                                </div>
                                <div className="_measurement">
                                    <span>10 </span>
                                    <span>kgs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollableDiv>
            </div>

            <div className="exercise-input">
                <DatePicker />
                <div className="_form">
                    <div className="_left">
                        <Dropdown options={["Rowing", "Bicep Curl", "Pushup"]} />
                        <div className="_submit">Add</div>
                    </div>
                    <div className="_right">
                        <div className="_property-input">10</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
