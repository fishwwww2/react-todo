import TodoList from "./components/TodoList";
import Clock from "./components/Clock";
import Quote from "./components/Quote";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>📌 Todo</h1>
      <Clock />

      <Quote />
      <TodoList />
    </div>
  );
}

export default App;
