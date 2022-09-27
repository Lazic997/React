import React from "react";
import {Todo} from "../types";
import TodoCard from "./TodoCard";

type TodoListProps = {
        todos: Todo[];
        setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoList({todos, setTodos}: TodoListProps) {
        return (
                <div>
                        {todos.map(t => (
                                <TodoCard
                                        todo={t}
                                        key={t.id}
                                        todos={todos}
                                        setTodos={setTodos}/>
                        ))}
                </div>
        );
}