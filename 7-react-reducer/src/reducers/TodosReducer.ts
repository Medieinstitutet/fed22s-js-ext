import { Todo } from "../models/Todo";

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export enum ActionType {
  ADDED,
  TOGGLED,
}

export const TodosReducer = <T>(todos: Todo[], action: IAction<T>) => {
  switch (action.type) {
    case ActionType.ADDED: {
      const test = action.payload as unknown;
      const text = test as string;
      return [...todos, new Todo(text, false, new Date().getTime())];
    }

    case ActionType.TOGGLED: {
      const test = action.payload as unknown;
      const id = Number(test);
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    }

    default:
      break;
  }

  //   switch (action.type) {
  //     case "added":
  //       return [...todos, new Todo(action.payload, false, new Date().getTime())];

  //     case "toggled":
  //       return todos.map((todo) => {
  //         if (todo.id === action.payload) {
  //           return { ...todo, done: !todo.done };
  //         } else {
  //           return todo;
  //         }
  //       });

  //     default:
  //       break;
  //   }

  //   if (action.type === "added") {
  //     return [...todos, new Todo(action.payload, false, new Date().getTime())];
  //   } else if (action.type === "toggled") {
  //     return todos.map((todo) => {
  //       if (todo.id === action.payload) {
  //         return { ...todo, done: !todo.done };
  //       } else {
  //         return todo;
  //       }
  //     });
  //   }

  return todos;
};
