import { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, loading, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState("");

  if (loading) return <p>로딩 중...</p>;

  return (
    <div className="todo-box">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(input);
          setInput("");
        }}
      >
        추가
      </button>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id, todo.done)}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
