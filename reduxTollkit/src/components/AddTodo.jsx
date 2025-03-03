import { useState, useDispatch } from "react";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoFromComponent = (todo) => {
        dispatch(addTodo(todo));
        setInput('');
    }
}

export default AddTodo;
