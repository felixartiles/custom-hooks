export const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    
    case "add ToDo":
      ///se agrega una copia de los valores originales(initial state) y se agrega el nuevo elemento (payload)
      return [...initialState, action.payload];
      case "delete ToDo":
      return initialState.filter(todo => todo.id !== action.payload);
      case "toggle ToDo":
        return initialState.map(todo =>{
          if(todo.id === action.payload){ //payload = id
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo;
        });
    default:
      return initialState;
  }
};
