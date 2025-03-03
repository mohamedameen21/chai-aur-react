import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
    },
  ],
};

const addTodoReducer = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload.text,
  };
  state.todos.push(todo);
};

const removeTodoReducer = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
};

const updateTodoReducer = (state, action) => {
  const id = action.payload.id;
  state.todos = state.todos.map((todo) =>
    todo.id == id ? { ...todo, text: action.payload.text } : todo
  );
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: addTodoReducer,
    removeTodo: removeTodoReducer,
    updateTodo: updateTodoReducer,
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
