import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  TOGGLED,
  REMOVED,
}

export const TodosReducer = (todos: Todo[], action: IAction) => {
  switch (action.type) {
    case ActionType.ADDED: {
      return [...todos, new Todo(action.payload, false, new Date().getTime())];
    }

    case ActionType.TOGGLED: {
      return todos.map((todo) => {
        if (todo.id.toString() === action.payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    }

    case ActionType.REMOVED: {
      return todos.filter((todo) => todo.id.toString() !== action.payload);
    }

    default:
      break;
  }

  return todos;
};
