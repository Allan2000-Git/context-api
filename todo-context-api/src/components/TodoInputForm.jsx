import React from 'react'
import { useState } from 'react'
import { useTodo } from '../contexts/index'

function TodoInputForm() {

    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo();

    const add = (event) =>{
        event.preventDefault();

        if(!todo) {
            return
        }

        addTodo({todo, isCompleted:false})
        setTodo("")
    }

    return (
        <>
            <form className="flex">
                <input
                    type="text"
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)}
                    placeholder="Enter your Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2.5"
                />
                <button onClick={add} type="submit" className="rounded-r-lg px-6 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
        </>
    )
}

export default TodoInputForm
