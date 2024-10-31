// src/redux/user/user-reducer.js

const initialState = {
  todos: [],
  count: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), ...action.payload }],
        count: state.todos.length + 1,
      };

    case "DELETE_TODO":
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: updatedTodos,
        count: updatedTodos.length,
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, name: action.payload.newName } : todo
        ),
      };

    default:
      return state;
  }
};

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

export const editTodo = (id, newName) => ({
  type: "EDIT_TODO",
  payload: { id, newName },
});
