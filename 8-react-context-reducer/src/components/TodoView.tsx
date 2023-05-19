import { useContext } from "react";
import { TodoDispatchContext } from "../contexts/TodoDispatchContext";
import { Todo } from "../models/Todo";
import { ActionType } from "../reducers/TodosReducer";

interface ITodoViewProps {
  todo: Todo;
}

export const TodoView = ({ todo }: ITodoViewProps) => {
  const dispatch = useContext(TodoDispatchContext);

  return (
    <div>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <button
        onClick={() => {
          dispatch({
            type: ActionType.TOGGLED,
            payload: todo.id.toString(),
          });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ActionType.REMOVED, payload: todo.id.toString() });
        }}
      >
        Ta bort
      </button>
    </div>
  );
};
