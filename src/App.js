// Library
import React from "react";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

// Local
import "./App.css";
import { db } from "./firebase";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState("");

    React.useEffect(() => {
        const todoCollection = collection(db, "todos");
        return onSnapshot(todoCollection, (snapshot) => {
            console.log("New data received");
            setTodos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });
    }, []);

    const addTodo = async (e) => {
        e.preventDefault();
        const todoCollection = collection(db, "todos");
        await addDoc(todoCollection, { todo: input });
        setInput("");
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" onClick={addTodo}>
                    Add Todo
                </button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
