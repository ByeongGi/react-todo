
// Export Constants
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Export Actions
export function onTodoAdd(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}



