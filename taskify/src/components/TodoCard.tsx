import React, {useEffect, useRef, useState} from "react";
import {Todo} from "../types";
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import {MdDone} from "react-icons/md"

type TodoCardProps = {
        todo: Todo;
        todos: Todo[];
        setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoCard({todo, todos, setTodos}: TodoCardProps) {

        const [edit, setEdit] = useState<boolean>(false); //make sure to set initialState
        const [editTodo, setEditTodo] = useState<string>(todo.text);
        const inputRef = useRef<HTMLInputElement>(null);

        const handleDone = (id: number) => {
                setTodos(todos.map((todo) =>
                        todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
        };

        const handleDelete = (id: number) => {
                setTodos(todos.filter(todo =>
                        todo.id !== id));
        };

        const handleEdit = (e: React.FormEvent, id: number) => {
                e.preventDefault();
                setTodos(todos.map(todo => todo.id === id ? {...todo, text: editTodo} : todo));
                setEdit(false);
        }

        useEffect(() => {
                inputRef.current?.focus();
        }, [edit])

        return (
                <form className="justify-center flex p-4" onSubmit={(e) => handleEdit(e, todo.id)}>
                        <div className="bg-blue-700 flex w-4/5 p-4 text-xl rounded text-white break-words">

                                {
                                        edit ? (
                                                <input ref={inputRef} className="text-black flex-1 rounded" value={editTodo} onChange={(e) =>
                                                        setEditTodo(e.target.value)}/>
                                        ) : todo.isDone ? (
                                                <s className="flex-1 text-left text-lime-500 w-2/3">{todo.text}</s>
                                        ) : (
                                                <div className="flex-1 text-left w-2/3">{todo.text}</div>
                                        )
                                }

                                <div className="flex">
                                        <div className="ml-5 cursor-pointer hover:text-black" onClick={() => {
                                                if (!edit && !todo.isDone) {
                                                        setEdit(!edit);
                                                }
                                        }
                                        }><AiFillEdit/></div>
                                        <div className="ml-5 cursor-pointer hover:text-red-500"
                                              onClick={() => handleDelete(todo.id)}><AiFillDelete/></div>
                                        <div className="ml-5 cursor-pointer hover:text-lime-500"
                                              onClick={() => handleDone(todo.id)}><MdDone/></div>
                                </div>
                        </div>
                </form>
        );
}