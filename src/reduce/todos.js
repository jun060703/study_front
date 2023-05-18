import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};
//reducer
const todosSlice = createSlice({
  //reducer name
  name: 'todos',
  //reducer의 초기값
  initialState: initialState,
  //reducer의 action들
  reducers: {
    setTodos: (state, action) => {
      const { payload } = action;
      state.todos = payload;
    },
    createTodo: (state, action) => {
      const { payload } = action;
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      state.todos.filter(todo => todo.id !== payload);
    },
    deleteSelectedTodos: (state, action) => {
      const { payload } = action;
      state.todos = state.todo.filter(todo => !payload.includes(todo.id));
    },
  },
});

export const { setTodos, createTodo, deleteTodo, deleteSelectedTodos } = todosSlice.actions;
export default todosSlice.reducer;
