import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="input"
      />
      <button
        type="submit"
        style={{ backgroundColor: "#00BCBE" }}
      >
        <FiPlusCircle className="icon" />
        <span className="text">Adicionar</span>
      </button>
    </form>
  );
}

export default TodoForm;
