import React, { useReducer, useState, useCallback } from "react";

type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number };

type Todo = {
  id: number;
  text: string;
};

type TodoItemProps = {
  todo: Todo[];
  onDelete: (id: number) => void;
};

const TodoItem = React.memo( ({
  todo,
  onDelete,
}: TodoItemProps) => {
  return (
    <div className="w-64">
      {todo.map((t) => (
        <div
          key={t.id}
          className="flex justify-between items-center bg-gray-100 p-2 rounded mt-2"
        >
          <span>{t.text}</span>

          <button
            className="text-red-500 font-bold"
            onClick={() =>
             onDelete(t.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
)

export const UseReducerTodo = () => {
  const reducer = (state: Todo[],action: Action): Todo[] => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {id: Date.now(), text: action.payload, },
        ];

      case "DELETE":
         return state.filter((todo) => todo.id !== action.payload);

      default:
        return state;
    }
  };
 

  const [todo, dispatch] = useReducer(reducer,[] );

  const [input, setInput] = useState("");

   const deleteTodo = useCallback((id: number) => {
  dispatch({
    type: "DELETE",
    payload: id,
  });
}, []);

const addTodo = () =>{
  dispatch({
    type: "ADD",
    payload: input,
  })
}

  return (
    <div className="flex flex-col items-center mt-10 gap-4">

      <div className="flex gap-2">
        <input
          className="border p-2 rounded"          value={input}
          placeholder="Enter todo"
          onChange={(e) => setInput(e.target.value) }
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            if (!input.trim()) return;

            addTodo();

            setInput("");
          }}
        >
          Add
        </button>
      </div>

      <TodoItem
        todo={todo}
        onDelete={deleteTodo}
      />
    </div>
  );
};