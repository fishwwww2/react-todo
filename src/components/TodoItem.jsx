export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={toggleTodo}
      />
      <span className={todo.done ? "done" : ""}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </div>
  );
}
