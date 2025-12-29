export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        className={todo.done ? "done" : ""}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </div>
  );
}
