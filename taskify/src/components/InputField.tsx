import React, {useEffect, useRef} from "react";

type InputFieldProps = {
        text: string;
        setTodo : React.Dispatch<React.SetStateAction<string>>
        handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({text, setTodo, handleAdd}:InputFieldProps){
        const inputRef = useRef<HTMLInputElement>(null);

        useEffect(()=>{

        }, [])

        return (
                <form onSubmit={(e) => {handleAdd(e); inputRef.current?.focus();}}>
                        <input
                                className="rounded-2xl p-2"
                                type="input" value={text}
                                onChange={(e) => setTodo(e.target.value)}
                                placeholder="Enter a task!"
                                ref={inputRef}/>
                        <button type="submit" className="text-white p-2 text-1xl hover:text-yellow-500">ADD</button>
                </form>
        );
}