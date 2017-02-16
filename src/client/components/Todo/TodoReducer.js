import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './TodoAction';


// Initial State
const initialState = { data: [] };

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :

      // console.log("Reducer TODO "+state.data);

      return {
        data: [action.todo, ...state.data],
      };

    case UPDATE_TODO :
      return {
        data: [action.todo, ...state.data],
      };
    

    case DELETE_TODO :
      return {
        data: state.data.filter(todo => todo.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

// Get all posts
export const getTodos = (state) =>{
console.log("TEST getTodos");
console.log(state);
return state.data };


// Export Reducer
export default TodoReducer;