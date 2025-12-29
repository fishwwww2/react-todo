import { useEffect, useState } from "react";
import { API_URL } from "../env/api";  // API_URL 보안을 위해서 따로 분리햇어요
// 근데 다시 생각해보니까 이러면 .gitignore에 api.js를 추가해야 할 것 같은데
// 과제라서 안 함 (ㅠㅠ)
// 사실 롤백하기 너무 귀찮았어요


export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // CREATE
  const addTodo = async (text) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, done: false })
    });
    const newTodo = await res.json();
    setTodos(prev => [...prev, newTodo]);
  };

  // UPDATE
  const toggleTodo = async (id, done) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !done })
    });

    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // DELETE
  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // READ
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo
  };
}
