import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const getInitialTodos = () => {
  const stored = localStorage.getItem("todos");
  return stored ? JSON.parse(stored) : [];
};

function App() {
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo,
      ),
    );
  };

  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  return (
	  <div className="section">
		<Header />
		<div className="app">
		  <h1>To-Do List App</h1>
		  <TodoForm addTodo={addTodo} />
		  <TodoList
			todos={todos}
			removeTodo={removeTodo}
			editTodo={editTodo}
			toggleEdit={toggleEdit}
		  />
		</div>
	</div>
  );
}

export default App;
