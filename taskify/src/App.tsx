import React, {useState} from 'react';
import './App.css';
import {Todo} from "./types";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {

        const [text, setText] = useState<string>(" "); //initial state is needed!, text is object inside form
        const [todos, setTodos] = useState<Todo[]>([]); //list of todos will bi presented on screen

        const handleAdd = (e: React.FormEvent) => {
                e.preventDefault();
                if (text) {
                        setTodos([...todos, {id: Date.now(), text: text, isDone: false}])
                        setText("");
                }
        };

        return (
                <div className="bg-blue-500 h-screen text-center font-sans ">
                        <div className="bg-blue-500 h-fit">
                                <div className="text-white text-4xl p-4">
                                        TASKIFY
                                </div>
                                <div>
                                        <InputField text={text} setTodo={setText} handleAdd={handleAdd}/>
                                        <TodoList todos={todos} setTodos={setTodos}/>
                                </div>
                        </div>

                </div>
        );
}

export default App;
